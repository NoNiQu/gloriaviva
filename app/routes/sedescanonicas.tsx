import { Link } from "react-router";

export function meta() {
  return [
    {
      title: "Sedes Canónicas | Gloria Viva",
    },
    {
      name: "description",
      content:
        "Sección de sedes canónicas de las cofradías y hermandades de gloria de Toledo en proceso de construcción.",
    },
  ];
}

export default function SedesCanonicasPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-5 pb-16 pt-45">
      <section className="text-center">
        <h1 className="text-5xl leading-none tracking-[-0.03em] md:text-7xl">
          Sedes Canónicas
        </h1>

        <p className="mt-7 text-base tracking-wider md:text-lg">
          Esta página está en proceso de construcción.
        </p>

        <Link
          to="/"
          className="
            mt-10
            inline-flex
            min-h-14
            items-center
            justify-center
            rounded-2xl
            border
            border-black
            px-8
            py-3
            text-base
            tracking-[0.04em]
            transition-colors
            duration-200
            hover:bg-black
            hover:text-white
            focus-visible:outline-2
            focus-visible:outline-offset-4
            focus-visible:outline-black
          "
        >
          VOLVER A LA HOME
        </Link>
      </section>
    </main>
  );
}
