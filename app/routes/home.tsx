import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    {
      title: "Gloria Viva",
    },
    {
      name: "description",
      content:
        "Gloria Viva, guía independiente y no oficial de las cofradías, hermandades y devociones de gloria de Toledo. Web en construcción.",
    },
  ];
}

export default function Home() {
  return (
    <main className="min-h-svh bg-black text-white">
      <section className="mx-auto flex min-h-svh max-w-360 flex-col items-center justify-center px-6 py-14 text-center md:px-10 md:py-18 lg:px-20 lg:py-20">
        <div className="flex flex-col items-center">
          <h1>
            <img
              src="/logoWeb.png"
              alt="Gloria Viva — Glorias de Toledo"
              className="h-auto w-64 object-contain sm:w-72 md:w-80 lg:w-96"
            />
          </h1>

          <p className="mt-10 text-xs font-semibold uppercase tracking-[0.24em] text-white/70 md:mt-12 md:text-sm">
            Esta web está en construcción
          </p>
        </div>

        <div className="mt-28 flex flex-col items-center md:mt-32 lg:mt-36">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-white/55">
            Volver a Entre Silencios
          </p>

          <a
            href="https://entresilencios.vercel.app/"
            aria-label="Volver a Entre Silencios"
            className="group inline-flex focus-visible:outline-2 focus-visible:outline-offset-6 focus-visible:outline-white"
          >
            <img
              src="/Logo_WEB.png"
              alt="Entre Silencios — Semana Santa Toledo"
              className="h-auto w-64 object-contain opacity-80 transition-opacity duration-300 group-hover:opacity-100 md:w-100"
            />
          </a>
        </div>
      </section>
    </main>
  );
}
