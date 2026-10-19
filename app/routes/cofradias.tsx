import { Link } from "react-router";
import type { Route } from "./+types/cofradias";
import { cofradias } from "~/data/cofradia";
import { cultosCards } from "~/data/cultos_cards";
import type { TipoCofradia } from "~/types/cofradia";

/* ==========================================
   SEO
========================================== */

export function meta() {
  return [
    {
      title: "Cofradías | Gloria Viva",
    },
    {
      name: "description",
      content:
        "Conoce las cofradías, hermandades y devociones populares de gloria de Toledo.",
    },
  ];
}

/* ==========================================
   LOADER
========================================== */

export function loader() {
  return { cofradias };
}

const ordenMeses = new Map(
  [
    "ENERO",
    "FEBRERO",
    "MARZO",
    "ABRIL",
    "MAYO",
    "JUNIO",
    "JULIO",
    "AGOSTO",
    "SEPTIEMBRE",
    "OCTUBRE",
    "NOVIEMBRE",
    "DICIEMBRE",
  ].map((mes, indice) => [mes, indice]),
);

function ordenarPorFechaDeCultos(
  primera: (typeof cofradias)[number],
  segunda: (typeof cofradias)[number],
) {
  const fechaOrden = (cofradia: (typeof cofradias)[number]) => {
    const ids = cofradia.cultosIds?.length
      ? cofradia.cultosIds
      : [cofradia.cultosId ?? cofradia.id];

    return Math.min(
      ...ids.map((id) => {
        const culto = cultosCards.find((item) => String(item.id) === id);
        if (!culto) return Number.MAX_SAFE_INTEGER;

        const mes = ordenMeses.get(culto.mes);
        return mes === undefined
          ? Number.MAX_SAFE_INTEGER
          : mes * 32 + culto.diaInicio;
      }),
    );
  };

  return fechaOrden(primera) - fechaOrden(segunda);
}

function nombreTipo(tipo: TipoCofradia) {
  switch (tipo) {
    case "gloria":
      return "Gloria";
    case "penitencia":
      return "Penitencia";
    case "devocion-popular":
      return "Devoción popular";
    case "dos-tipos":
      return "Penitencia y Gloria";
    default:
      return "Cofradía";
  }
}

/* ==========================================
   PÁGINA
========================================== */

export default function CofradiasPage({ loaderData }: Route.ComponentProps) {
  const { cofradias } = loaderData;
  const cofradiasOrdenadas = [...cofradias].sort(ordenarPorFechaDeCultos);

  return (
    <main className="min-h-svh bg-white text-black">
      <div className="mx-auto w-full max-w-360 px-6 pb-24 pt-50 md:px-10 md:pb-32 lg:px-30">
        {/* ==================================
            ENCABEZADO
        ================================== */}

        <header className="mb-14 text-center md:mb-20">
          <h1 className="text-5xl leading-none md:text-7xl">
            Cofradías
          </h1>
        </header>

        {/* ==================================
            LISTADO
        ================================== */}

        {cofradias.length === 0 ? (
          <p className="text-center text-base text-black/75">
            No hay cofradías disponibles.
          </p>
        ) : (
          <div
            className={
              cofradiasOrdenadas.length === 1
                ? "mx-auto grid w-full max-w-120 grid-cols-1"
                : "grid grid-cols-1 gap-y-8 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-16 lg:grid-cols-3 lg:gap-x-14 lg:gap-y-20"
            }
          >
            {cofradiasOrdenadas.map((cofradia) => (
              <Link
                key={cofradia.id}
                to={`/cofradias/${cofradia.slug}`}
                aria-label={`Conocer ${cofradia.nombre}${
                  cofradia.subnombre ? `, ${cofradia.subnombre}` : ""
                }`}
                className="group block text-center focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#263D63]"
              >
                <article className="mx-auto w-full max-w-120">
                  <div className="relative flex justify-center">
                    <div className="relative flex h-88 w-full items-end justify-center overflow-visible sm:h-100 lg:h-108">
                      {cofradia.logoUrl ? (
                        <>
                          {/* Logotipo original */}
                          <img
                            src={cofradia.logoUrl}
                            alt=""
                            loading="lazy"
                            decoding="async"
                            className="relative z-10 h-full w-full object-contain"
                          />

                          {/* El dorado se revela de arriba abajo al pasar el cursor. */}
                          {cofradia.logoDoradoUrl && (
                            <div
                              aria-hidden="true"
                              className="pointer-events-none absolute inset-0 z-10 [clip-path:inset(0_0_100%_0)] transition-[clip-path] duration-700 ease-in-out group-hover:[clip-path:inset(0_0_0_0)] group-focus-visible:[clip-path:inset(0_0_0_0)] motion-reduce:transition-none"
                            >
                              <img
                                src={cofradia.logoDoradoUrl}
                                alt=""
                                loading="lazy"
                                decoding="async"
                                className="h-full w-full object-contain"
                              />
                            </div>
                          )}
                        </>
                      ) : (
                        <div
                          aria-hidden="true"
                          className="relative z-10 flex h-48 w-48 items-center justify-center rounded-full border border-black/15 text-6xl text-black/40 sm:h-56 sm:w-56"
                        >
                          {cofradia.nombreCorto.charAt(0)}
                        </div>
                      )}
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-20 w-full bg-linear-to-t from-[#F8F7F3] via-[#F8F7F3]/92 to-transparent sm:h-22"
                      />
                    </div>
                  </div>

                  <div className="relative z-30 -mt-14 sm:-mt-16">
                    <div className="mx-auto max-w-76 px-4 py-4 sm:max-w-84 sm:py-5">
                      <p className="text-[2rem] leading-none tracking-[-0.03em] text-black sm:text-[2.35rem]">
                        {cofradia.nombreCorto || cofradia.nombre}
                      </p>
                      <p className="mt-3 uppercase text-lg leading-snug tracking-wider text-black/80 sm:text-[1.20rem]">
                        {nombreTipo(cofradia.tipo)}
                      </p>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
