import { Link } from "react-router";
import type { Route } from "./+types/sedescanonicas.$slug";
import { getSedeCanonicaPorSlug } from "~/data/sedes_canonicas";
import { cofradias } from "~/data/cofradia";

/* ==========================================
   LOADER
========================================== */

export function loader({ params }: Route.LoaderArgs) {
  const sede = params.slug ? getSedeCanonicaPorSlug(params.slug) : null;

  if (!sede) {
    throw new Response("Sede canónica no encontrada", { status: 404 });
  }

  const cofradiasVinculadas = sede.cofradiasIds
    .map((id) => cofradias.find((cofradia) => cofradia.id === id))
    .filter((cofradia) => cofradia !== undefined);

  return { sede, cofradiasVinculadas };
}

export function meta({ loaderData }: Route.MetaArgs) {
  if (!loaderData?.sede) {
    return [{ title: "Sede canónica no encontrada | Gloria Viva" }];
  }

  return [
    { title: `${loaderData.sede.nombre} | Gloria Viva` },
    {
      name: "description",
      content: `Conoce ${loaderData.sede.nombre}, su historia y las cofradías vinculadas a este templo de Toledo.`,
    },
  ];
}

function tituloHorarios(usoActual: string) {
  if (usoActual === "CULTO") return "Horarios de culto";
  if (usoActual === "MUSEO") return "Horario de visita";
  return "Culto y visitas";
}

/* ==========================================
   SEDE CANÓNICA · DETALLE
========================================== */

export default function SedeCanonicaPage({ loaderData }: Route.ComponentProps) {
  const { sede, cofradiasVinculadas } = loaderData;

  return (
    <main className="min-h-svh bg-[#F8F7F3] text-[#263D63]">
      {/* Cabecera en el azul identitario de Gloria Viva */}
      <header className="bg-[#263D63] px-6 pb-15 pt-36 text-white md:px-10 md:pb-20 md:pt-44 lg:px-30">
        <div className="mx-auto max-w-300 text-center">
          <p className="text-xs uppercase tracking-[0.22em] text-white/70 md:text-sm">
            Sede canónica · Toledo
          </p>
          <h1 className="mx-auto mt-6 max-w-4xl text-4xl leading-[1.08] tracking-[-0.035em] sm:text-5xl md:text-6xl lg:text-7xl">
            {sede.nombre}
          </h1>
          <p className="mt-7 text-sm leading-relaxed tracking-[0.03em] text-white/80 md:text-base">
            {sede.direccion}
          </p>
        </div>
      </header>

      <div className="mx-auto w-full max-w-360 px-6 pb-24 pt-12 md:px-10 md:pb-32 md:pt-17 lg:px-30">
        <div className="grid border-y border-[#263D63]/20 lg:grid-cols-2">
          <section className="border-b border-[#263D63]/20 py-10 lg:border-b-0 lg:py-14 lg:pr-16">
            <h2 className="text-sm uppercase tracking-[0.2em] text-[#263D63]/65">
              Descripción
            </h2>
            <p className="mt-7 max-w-2xl text-base leading-8 tracking-[0.02em] text-[#263D63]/85 md:text-lg md:leading-9">
              {sede.descripcionBreve}
            </p>
          </section>

          <section className="py-10 lg:border-l lg:border-[#263D63]/20 lg:py-14 lg:pl-16">
            <h2 className="text-sm uppercase tracking-[0.2em] text-[#263D63]/65">
              {tituloHorarios(sede.usoActual)}
            </h2>

            {sede.horarios.length > 0 ? (
              <div className="mt-7 space-y-6">
                {sede.horarios.map((horario) => (
                  <div key={horario.id}>
                    <p className="text-sm leading-6 text-[#263D63]/70">
                      {horario.texto}
                    </p>
                    <p className="mt-2 text-xl tabular-nums md:text-2xl">
                      {horario.hora}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="mt-7 max-w-md text-base leading-8 text-[#263D63]/75">
                Los horarios pueden cambiar según la época del año y las
                celebraciones. Consulta la información actualizada antes de
                acudir.
              </p>
            )}

            {sede.horariosUrl && (
              <a
                href={sede.horariosUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex min-h-11 items-center gap-3 border-b border-[#263D63] pb-1 text-sm tracking-[0.035em] transition-colors hover:text-[#263D63]/65 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#263D63] motion-reduce:transition-none md:text-base"
              >
                Consultar información oficial
                <span aria-hidden="true">↗</span>
              </a>
            )}
          </section>
        </div>

        <section className="border-b border-[#263D63]/20 py-12 md:py-16">
          <h2 className="text-sm uppercase tracking-[0.2em] text-[#263D63]/65">
            Cofradías con sede canónica aquí
          </h2>

          {cofradiasVinculadas.length > 0 ? (
            <ul className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {cofradiasVinculadas.map((cofradia) => (
                <li key={cofradia.id}>
                  <Link
                    to={`/cofradias/${cofradia.slug}`}
                    className="group flex min-h-35 items-center gap-5 rounded-2xl border border-[#263D63]/20 px-5 py-6 transition-colors duration-300 hover:border-[#263D63] hover:bg-[#263D63] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#263D63] motion-reduce:transition-none"
                  >
                    {cofradia.logoUrl ? (
                      <img
                        src={cofradia.logoUrl}
                        alt=""
                        loading="lazy"
                        decoding="async"
                        className="h-18 w-18 shrink-0 object-contain"
                      />
                    ) : cofradia.escudoUrl ? (
                      <img
                        src={cofradia.escudoUrl}
                        alt=""
                        loading="lazy"
                        decoding="async"
                        className="h-18 w-18 shrink-0 object-contain"
                      />
                    ) : null}
                    <div className="min-w-0 flex-1">
                      <h3 className="text-xl leading-tight tracking-tight md:text-2xl">
                        {cofradia.nombreCorto || cofradia.nombre}
                      </h3>
                      {cofradia.subnombre && (
                        <p className="mt-2 text-sm leading-relaxed tracking-[0.03em] text-[#263D63]/70 group-hover:text-white/75 group-focus-visible:text-white/75">
                          {cofradia.subnombre}
                        </p>
                      )}
                    </div>
                    <span aria-hidden="true" className="text-xl">
                      ↗
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-7 text-base leading-8 text-[#263D63]/70">
              Todavía no hay cofradías vinculadas a esta sede.
            </p>
          )}
        </section>

        <nav aria-label="Navegación de sedes canónicas" className="mt-9">
          <Link
            to="/sedescanonicas"
            className="inline-flex min-h-11 items-center gap-3 text-sm tracking-[0.035em] transition-colors hover:text-[#263D63]/65 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#263D63] motion-reduce:transition-none md:text-base"
          >
            <span aria-hidden="true">←</span>
            Volver a sedes canónicas
          </Link>
        </nav>
      </div>
    </main>
  );
}
