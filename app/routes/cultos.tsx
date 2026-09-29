import { Link } from "react-router";

import { cultosCards } from "../data/cultos_cards";

const meses = [
  { nombre: "ENERO", slug: "enero" },
  { nombre: "FEBRERO", slug: "febrero" },
  { nombre: "MARZO", slug: "marzo" },
  { nombre: "ABRIL", slug: "abril" },
  { nombre: "MAYO", slug: "mayo" },
  { nombre: "JUNIO", slug: "junio" },
  { nombre: "JULIO", slug: "julio" },
  { nombre: "AGOSTO", slug: "agosto" },
  { nombre: "SEPTIEMBRE", slug: "septiembre" },
  { nombre: "OCTUBRE", slug: "octubre" },
  { nombre: "NOVIEMBRE", slug: "noviembre" },
  { nombre: "DICIEMBRE", slug: "diciembre" },
];

export function meta() {
  return [
    {
      title: "Cultos | Gloria Viva",
    },
    {
      name: "description",
      content:
        "Consulta los cultos de las cofradías y devociones de gloria de Toledo organizados por meses.",
    },
  ];
}

export default function CultosPage() {
  return (
    <main className="mx-auto min-h-screen max-w-7xl px-5 pb-20 pt-50">
      <header className="mb-16 text-center">
        <h1 className="text-5xl leading-none md:text-7xl">Cultos</h1>
      </header>

      <nav aria-label="Cultos por meses">
        <ul
          className="
            grid
            grid-cols-2
            gap-5
            sm:grid-cols-3
            lg:grid-cols-4
          "
        >
          {meses.map((mes) => {
            const tieneCultos = cultosCards.some(
              (card) => card.mes.toLowerCase() === mes.nombre.toLowerCase(),
            );

            const nombreMes =
              mes.nombre.charAt(0) + mes.nombre.slice(1).toLowerCase();

            return (
              <li key={mes.slug}>
                {tieneCultos ? (
                  <Link
                    to={`/cultos/${mes.slug}`}
                    aria-label={`Cultos de ${nombreMes}`}
                    className="
                      group
                      relative
                      flex
                      min-h-28
                      items-center
                      justify-center
                      rounded-3xl
                      border
                      border-black/20
                      px-4
                      py-6
                      text-center
                      text-xl
                      transition-colors
                      duration-200
                      hover:bg-black
                      hover:text-white
                      focus-visible:outline-2
                      focus-visible:outline-offset-4
                      focus-visible:outline-black
                      md:text-2xl
                    "
                  >
                    {mes.nombre}

                    <span
                      role="tooltip"
                      className="
                        pointer-events-none
                        absolute
                        -bottom-10
                        left-1/2
                        z-20
                        -translate-x-1/2
                        whitespace-nowrap
                        rounded-xl
                        bg-black
                        px-3
                        py-2
                        text-sm
                        text-white
                        opacity-0
                        transition-opacity
                        duration-200
                        group-hover:opacity-100
                        group-focus-visible:opacity-100
                      "
                    >
                      Cultos de {nombreMes}
                    </span>
                  </Link>
                ) : (
                  <span
                    tabIndex={0}
                    aria-disabled="true"
                    aria-label={`${nombreMes}. Mes no disponible`}
                    className="
                      group
                      relative
                      flex
                      min-h-28
                      cursor-pointer
                      items-center
                      justify-center
                      rounded-3xl
                      border
                      border-black/10
                      bg-black/2
                      px-4
                      py-6
                      text-center
                      text-xl
                      text-black/25
                      focus-visible:outline-2
                      focus-visible:outline-offset-4
                      focus-visible:outline-black/30
                      md:text-2xl
                    "
                  >
                    {mes.nombre}

                    <span
                      role="tooltip"
                      className="
                        pointer-events-none
                        absolute
                        -bottom-10
                        left-1/2
                        z-20
                        -translate-x-1/2
                        whitespace-nowrap
                        rounded-xl
                        bg-black
                        px-3
                        py-2
                        text-sm
                        text-white
                        opacity-0
                        transition-opacity
                        duration-200
                        group-hover:opacity-100
                        group-focus:opacity-100
                      "
                    >
                      Mes no disponible
                    </span>
                  </span>
                )}
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="mt-15 flex justify-center">
        <Link
          to="/cultos/todos"
          className="
            inline-flex
            min-h-15
            items-center
            justify-center
            rounded-2xl
            bg-black
            px-15
            py-5
            text-center
            text-xl
            text-white
            transition-opacity
            duration-200
            hover:opacity-80
            focus-visible:outline-2
            focus-visible:outline-offset-4
            focus-visible:outline-black
          "
        >
          VER TODOS LOS CULTOS
        </Link>
      </div>
    </main>
  );
}
