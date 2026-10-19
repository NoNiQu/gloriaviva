import { Link } from "react-router";
import type { Route } from "./+types/sedescanonicas";
import { sedesCanonicas } from "~/data/sedes_canonicas";

/* ==========================================
   SEO
========================================== */

export function meta() {
  return [
    { title: "Sedes Canónicas | Gloria Viva" },
    {
      name: "description",
      content:
        "Descubre las sedes canónicas de las cofradías y hermandades recogidas en Gloria Viva, guía independiente de las glorias de Toledo.",
    },
  ];
}

export function loader() {
  return { sedes: sedesCanonicas };
}

/* ==========================================
   SEDES CANÓNICAS · LISTADO
========================================== */

export default function SedesCanonicasPage({
  loaderData,
}: Route.ComponentProps) {
  const { sedes } = loaderData;

  return (
    <main className="min-h-svh bg-[#F8F7F3] text-black">
      <div className="mx-auto w-full max-w-360 px-6 pb-24 pt-50 md:px-10 md:pb-32 lg:px-30">
        <header className="mb-14 text-center md:mb-20">
          <h1 className="text-5xl font-normal leading-none tracking-[0.02em] md:text-7xl">
            Sedes Canónicas
          </h1>
        </header>

        {sedes.length === 0 ? (
          <p className="text-center tracking-wider text-black/75">
            No hay sedes canónicas disponibles.
          </p>
        ) : (
          <ul>
            {sedes.map((sede) => (
              <li key={sede.id}>
                <Link
                  to={`/sedescanonicas/${sede.slug}`}
                  className="group relative isolate block overflow-hidden border-b border-black/20 text-black transition-[color,border-color,border-radius] duration-500 ease-out hover:duration-300 hover:rounded-2xl hover:border-transparent hover:text-white focus-visible:rounded-2xl focus-visible:border-transparent focus-visible:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black motion-reduce:transition-none"
                >
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 z-0 origin-bottom-right scale-0 rounded-2xl bg-[#263D63] transition-transform duration-500 ease-out group-hover:scale-100 group-hover:duration-300 group-focus-visible:scale-100 motion-reduce:transition-none"
                  />
                  <div className="relative z-10 flex min-h-35 items-center justify-between gap-6 px-5 py-9 md:min-h-40 md:px-8 lg:px-10">
                    <div>
                      <h2 className="text-2xl leading-tight tracking-wide md:text-3xl lg:text-[2.1rem]">
                        {sede.nombre}
                      </h2>
                      <p className="mt-3 text-base leading-relaxed tracking-[0.035em] text-black/90 transition-colors duration-500 ease-out group-hover:text-white group-hover:duration-300 group-focus-visible:text-white md:text-lg motion-reduce:transition-none">
                        {sede.direccion}
                      </p>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
