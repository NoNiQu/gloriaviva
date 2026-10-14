import { Link } from "react-router";
import type { Route } from "./+types/cofradias";
import { cofradias } from "~/data/cofradia";

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

/* ==========================================
   PÁGINA
========================================== */

export default function CofradiasPage({ loaderData }: Route.ComponentProps) {
  const { cofradias } = loaderData;

  const unicaCofradia = cofradias.length === 1;

  return (
    <main className="min-h-svh bg-[#F8F7F3] text-black">
      <div className="mx-auto w-full max-w-360 px-6 pb-24 pt-32 md:px-10 md:pb-32 md:pt-40 lg:px-30">
        {/* ==================================
            ENCABEZADO
        ================================== */}

        <header className="mb-14 text-center md:mb-20">
          <h1 className="text-5xl font-normal leading-[1.05] tracking-[-0.03em] md:text-6xl lg:text-7xl">
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
              unicaCofradia
                ? "mx-auto grid w-full max-w-120 grid-cols-1"
                : "grid grid-cols-1 gap-y-8 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-16 lg:grid-cols-3 lg:gap-x-14 lg:gap-y-20"
            }
          >
            {cofradias.map((cofradia) => (
              <Link
                key={cofradia.id}
                to={`/cofradias/${cofradia.slug}`}
                aria-label={`Conocer ${cofradia.nombre}${
                  cofradia.subnombre ? `, ${cofradia.subnombre}` : ""
                }`}
                className="group block text-center focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#263D63]"
              >
                {/* ==================================
                    CARD
                ================================== */}

                <article className="mx-auto w-full max-w-120">
                  {/* Imagen */}
                  <div className="relative flex justify-center">
                    <div className="relative flex h-88 w-full items-end justify-center overflow-visible sm:h-100 lg:h-108">
                      {cofradia.logoUrl ? (
                        <img
                          src={cofradia.logoUrl}
                          alt=""
                          loading="lazy"
                          decoding="async"
                          className="relative z-10 h-full w-full object-contain"
                        />
                      ) : (
                        <div
                          aria-hidden="true"
                          className="relative z-10 flex h-48 w-48 items-center justify-center rounded-full border border-black/15 text-6xl text-black/40 sm:h-56 sm:w-56"
                        >
                          {cofradia.nombreCorto.charAt(0)}
                        </div>
                      )}

                      {/* Degradado curvo inferior */}
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-20 w-full bg-linear-to-t from-[#F8F7F3] via-[#F8F7F3]/92 to-transparent sm:h-22"
                      />
                    </div>
                  </div>

                  {/* Bloque de texto */}
                  <div className="relative z-30 -mt-14 sm:-mt-16">
                    <div className="mx-auto max-w-76 px-4 py-4 sm:max-w-84 sm:py-5">
                      <p className="text-[2rem] leading-none tracking-[-0.03em] text-black sm:text-[2.35rem]">
                        {cofradia.nombreCorto || cofradia.nombre}
                      </p>

                      {cofradia.subnombre && (
                        <p className="mt-3 text-lg leading-snug tracking-[0.015em] text-black/78 sm:text-[1.35rem]">
                          {cofradia.subnombre}
                        </p>
                      )}

                      <span className="mt-4 block text-sm tracking-[0.04em] text-black/60 sm:hidden">
                        Saber más…
                      </span>
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
