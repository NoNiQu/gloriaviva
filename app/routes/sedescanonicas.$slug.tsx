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

function getTituloHorarios(usoActual: string | null) {
  switch (usoActual) {
    case "CULTO":
    case "CULTO_Y_MUSEO":
      return "Horario de misa";
    case "MUSEO":
      return "Horario de visita";
    default:
      return "Horarios";
  }
}

/* ==========================================
   SEDE CANÓNICA · DETALLE
========================================== */

export default function SedeCanonicaPage({ loaderData }: Route.ComponentProps) {
  const { sede, cofradiasVinculadas } = loaderData;
  const cofradiasConEscudo = cofradiasVinculadas.filter((cofradia) =>
    Boolean(cofradia.escudoUrl),
  );

  return (
    <main className="min-h-svh bg-[#263D63] text-white">
      {/* Cabecera centrada de la versión anterior de Gloria Viva */}
      <header className="bg-[#263D63] px-6 pb-8 pt-36 text-white md:px-10 md:pb-10 md:pt-44 lg:px-30">
        <div className="mx-auto w-full text-center">
          <h1 className="mt-6 w-full text-4xl leading-[1.08] tracking-wide sm:text-5xl md:text-6xl lg:text-7xl">
            {sede.nombre}
          </h1>
          <p className="mt-7 text-sm leading-relaxed tracking-wider text-white/85 md:text-base">
            {sede.direccion}
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-360 px-6 pb-10 md:px-10 md:pb-14 lg:px-30 lg:pb-27">
        {/* Descripción + horarios: misma estructura que Entre Silencios */}
        <div className="grid border-y border-white/15 lg:grid-cols-2">
          <section className="relative min-h-64 border-b border-white/15 py-10 lg:min-h-72 lg:border-b-0 lg:pr-16 lg:after:absolute lg:after:bottom-8 lg:after:right-0 lg:after:top-8 lg:after:w-px lg:after:bg-white/15">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/75">
              Descripción
            </h2>

            {sede.descripcionBreve ? (
              <p className="mt-6 max-w-2xl text-sm leading-7 text-white/75 md:text-base md:leading-8">
                {sede.descripcionBreve}
              </p>
            ) : (
              <p className="mt-6 max-w-2xl text-sm leading-7 text-white/75">
                Actualmente no hay una descripción disponible de esta sede
                canónica.
              </p>
            )}
          </section>

          <section className="min-h-64 py-10 lg:min-h-72 lg:pl-16">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/75">
              {getTituloHorarios(sede.usoActual)}
            </h2>

            {sede.horarios.length > 0 ? (
              <div className="mt-6 space-y-7">
                {sede.horarios.map((horario) => (
                  <div key={horario.id}>
                    <p className="text-sm leading-6 text-white/75">
                      {horario.texto}
                    </p>
                    <p className="mt-2 text-xl tabular-nums md:text-2xl">
                      {horario.hora}
                    </p>
                  </div>
                ))}
              </div>
            ) : !sede.horariosUrl ? (
              <p className="mt-6 text-sm leading-7 text-white/75">
                Actualmente no hay horarios disponibles.
              </p>
            ) : null}

            {sede.horariosUrl && (
              <a
                href={sede.horariosUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-white/75 transition-colors duration-200 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transition-none"
              >
                Consultar horarios actualizados
                <span aria-hidden="true">↗</span>
              </a>
            )}
          </section>
        </div>

        {/* Solo escudos: sin nombres visibles, tarjetas ni bordes */}
        <section className="border-b border-white/15 py-10 md:py-12">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/75">
            Cofradías con sede canónica aquí
          </h2>

          {cofradiasConEscudo.length > 0 ? (
            <ul className="mt-8 flex flex-wrap gap-8">
              {cofradiasConEscudo.map((cofradia) => (
                <li key={cofradia.id}>
                  <Link
                    to={`/cofradias/${cofradia.slug}`}
                    title={cofradia.nombre}
                    aria-label={`Ver cofradía: ${cofradia.nombre}`}
                    className="flex min-h-24 min-w-24 items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                  >
                    <img
                      src={cofradia.escudoUrl!}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className="max-h-20 max-w-20 object-contain"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-6 text-sm leading-7 text-white/75">
              {cofradiasVinculadas.length > 0
                ? "Los escudos de estas cofradías todavía no están disponibles."
                : "Actualmente no hay cofradías vinculadas a esta sede canónica."}
            </p>
          )}
        </section>

        <nav aria-label="Navegación de sedes canónicas" className="mt-6">
          <Link
            to="/sedescanonicas"
            className="inline-flex min-h-11 items-center gap-3 text-sm font-medium text-white/75 transition-colors duration-200 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transition-none"
          >
            <span aria-hidden="true">←</span>
            Volver a sedes canónicas
          </Link>
        </nav>
      </div>
    </main>
  );
}
