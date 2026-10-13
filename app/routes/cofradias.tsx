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
          <p className="text-center text-base text-black">
            No hay cofradías disponibles.
          </p>
        ) : (
          <div
            className={
              unicaCofradia
                ? "mx-auto grid w-full max-w-96 grid-cols-1"
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

                <article className="mx-auto w-full max-w-96">
                  {/* Imagen */}
                  <div className="relative flex justify-center">
                    <div className="relative flex h-68 w-full items-end justify-center overflow-visible sm:h-80 lg:h-88">
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
                          className="relative z-10 flex h-48 w-48 items-center justify-center rounded-full border border-[#263D63]/15 text-6xl text-black sm:h-56 sm:w-56"
                        >
                          {cofradia.nombreCorto.charAt(0)}
                        </div>
                      )}

                      {/* Degradado curvo inferior */}
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-x-8 bottom-0 z-20 h-18 rounded-t-[999px] bg-linear-to-t from-[#F8F7F3] via-[#F8F7F3]/92 to-transparent sm:inset-x-10 sm:h-20"
                      />
                    </div>
                  </div>

                  {/* Bloque de texto */}
                  <div className="relative z-30 -mt-8 sm:-mt-10">
                    <div className="mx-auto max-w-76 px-4 py-3 sm:max-w-84 sm:py-4">
                      <p className="text-[2.1rem] leading-none tracking-[-0.03em] text-black sm:text-[2.4rem]">
                        {cofradia.nombreCorto || cofradia.nombre}
                      </p>

                      {cofradia.subnombre && (
                        <p className="mt-3 text-[1.2rem] leading-snug tracking-[0.015em] text-black sm:text-[1.3rem]">
                          {cofradia.subnombre}
                        </p>
                      )}
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
