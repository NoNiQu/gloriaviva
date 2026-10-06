import { Link, useParams } from "react-router";

import { CultosGrid } from "../components/CultosGrid";
import { cultosCards } from "../data/cultos_cards";

type Mes = {
  nombre: string;
  slug: string;
};

type BotonMesProps = {
  mes?: Mes;
  direccion: "anterior" | "siguiente";
  disponible: boolean;
  escritorio?: boolean;
};

const meses: Mes[] = [
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

function mesTieneCultos(mes?: Mes) {
  if (!mes) {
    return false;
  }

  return cultosCards.some(
    (card) => card.mes.toLowerCase() === mes.nombre.toLowerCase(),
  );
}

function BotonMes({
  mes,
  direccion,
  disponible,
  escritorio = false,
}: BotonMesProps) {
  if (!mes) {
    return <span aria-hidden="true" />;
  }

  const texto =
    direccion === "anterior" ? `← ${mes.nombre}` : `${mes.nombre} →`;

  const clasesBase = `
    flex
    items-center
    justify-center
    rounded-2xl
    border
    px-4
    py-4
    text-center
    leading-none
  `;

  const clasesTamano = escritorio
    ? "min-h-16 min-w-48 px-8 text-lg"
    : "min-h-16 w-full text-base";

  if (!disponible) {
    return (
      <span
        tabIndex={0}
        aria-disabled="true"
        aria-label={`${mes.nombre}. Mes no disponible`}
        className={`
          group
          relative
          ${clasesBase}
          ${clasesTamano}
          cursor-pointer
          border-black/10
          bg-black/2
          text-black/25
          focus-visible:outline-2
          focus-visible:outline-offset-4
          focus-visible:outline-black/30
        `}
      >
        {texto}

        <span
          role="tooltip"
          className="
            pointer-events-none
            absolute
            -top-11
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
    );
  }

  return (
    <Link
      to={`/cultos/${mes.slug}`}
      className={`
        ${clasesBase}
        ${clasesTamano}
        border-black
        transition-colors
        hover:bg-black
        hover:text-white
        focus-visible:outline-2
        focus-visible:outline-offset-4
        focus-visible:outline-black
      `}
      aria-label={`Ver cultos de ${mes.nombre.toLowerCase()}`}
    >
      {texto}
    </Link>
  );
}

export function meta({
  params,
}: {
  params: {
    slug?: string;
  };
}) {
  if (params.slug === "todos") {
    return [
      {
        title: "Todos los cultos | Gloria Viva",
      },
      {
        name: "description",
        content:
          "Consulta todos los cultos y procesiones de las cofradías y devociones de gloria de Toledo.",
      },
    ];
  }

  const mes = meses.find((item) => item.slug === params.slug);

  if (!mes) {
    return [
      {
        title: "Cultos | Gloria Viva",
      },
      {
        name: "description",
        content:
          "Consulta los cultos y procesiones de las cofradías y devociones de gloria de Toledo.",
      },
    ];
  }

  const nombreMes = mes.nombre.charAt(0) + mes.nombre.slice(1).toLowerCase();

  return [
    {
      title: `Cultos de ${nombreMes} | Gloria Viva`,
    },
    {
      name: "description",
      content: `Consulta los cultos y procesiones del mes de ${nombreMes.toLowerCase()} de las cofradías y devociones de gloria de Toledo.`,
    },
  ];
}

export default function CultosMesPage() {
  const { slug } = useParams();

  const mostrarTodos = slug === "todos";

  const indiceMesActual = meses.findIndex((mes) => mes.slug === slug);

  const mesActual = indiceMesActual >= 0 ? meses[indiceMesActual] : undefined;

  const mesAnterior =
    indiceMesActual > 0 ? meses[indiceMesActual - 1] : undefined;

  const mesSiguiente =
    indiceMesActual >= 0 && indiceMesActual < meses.length - 1
      ? meses[indiceMesActual + 1]
      : undefined;

  const anteriorDisponible = mesTieneCultos(mesAnterior);
  const siguienteDisponible = mesTieneCultos(mesSiguiente);

  if (!mostrarTodos && !mesActual) {
    return (
      <main className="mx-auto min-h-screen max-w-7xl px-5 pb-20 pt-48 lg:pt-50">
        <div className="text-center">
          <h1 className="text-5xl leading-none md:text-7xl">
            Mes no encontrado
          </h1>

          <p className="mt-6">El mes seleccionado no existe.</p>

          <Link
            to="/cultos"
            className="
              mt-10
              inline-flex
              min-h-14
              items-center
              justify-center
              rounded-2xl
              bg-black
              px-8
              py-4
              text-lg
              text-white
              transition-opacity
              hover:opacity-80
              focus-visible:outline-2
              focus-visible:outline-offset-4
              focus-visible:outline-black
            "
          >
            Volver a Cultos
          </Link>
        </div>
      </main>
    );
  }

  if (mostrarTodos) {
    const primerMesConCultos = meses.find((mes) => mesTieneCultos(mes))?.slug;

    return (
      <main className="mx-auto min-h-screen max-w-7xl px-5 pb-20 pt-48 lg:pt-50">
        <header className="mb-16 text-center lg:mb-20">
          <h1
            className="
              text-4xl
              leading-none
              md:text-5xl
              lg:text-7xl
            "
          >
            Todos los Cultos
          </h1>
        </header>

        <div className="space-y-24">
          {meses.map((mes) => {
            const cardsDelMes = cultosCards.filter(
              (card) => card.mes.toLowerCase() === mes.nombre.toLowerCase(),
            );

            if (cardsDelMes.length === 0) {
              return null;
            }

            return (
              <section key={mes.slug} aria-labelledby={`cultos-${mes.slug}`}>
                <h2
                  id={`cultos-${mes.slug}`}
                  className="
                    mb-15
                    text-center
                    text-4xl
                    leading-none
                    md:text-5xl
                  "
                >
                  {mes.nombre}
                </h2>

                <CultosGrid
                  cards={cardsDelMes}
                  priorizarPrimera={mes.slug === primerMesConCultos}
                />
              </section>
            );
          })}
        </div>

        <nav
          aria-label="Volver al listado de cultos"
          className="mt-20 flex justify-center"
        >
          <Link
            to="/cultos"
            className="
              inline-flex
              min-h-16
              items-center
              justify-center
              rounded-2xl
              border
              border-black
              px-10
              py-4
              text-center
              text-lg
              transition-colors
              hover:bg-black
              hover:text-white
              focus-visible:outline-2
              focus-visible:outline-offset-4
              focus-visible:outline-black
            "
          >
            VOLVER A CULTOS
          </Link>
        </nav>
      </main>
    );
  }

  const cardsDelMes = cultosCards.filter(
    (card) => card.mes.toLowerCase() === mesActual!.nombre.toLowerCase(),
  );

  return (
    <main className="mx-auto min-h-screen max-w-7xl px-5 pb-20 pt-48 lg:pt-50">
      <header className="mb-12 text-center lg:mb-20">
        <h1 className="text-3xl leading-none lg:text-5xl">Cultos</h1>

        <h2 className="mt-2 text-4xl leading-none lg:mt-4 lg:text-7xl">
          {mesActual!.nombre}
        </h2>
      </header>

      {cardsDelMes.length > 0 ? (
        <CultosGrid cards={cardsDelMes} priorizarPrimera />
      ) : (
        <div className="py-20 text-center">
          <p className="text-lg">No hay cultos publicados para este mes.</p>
        </div>
      )}

      <nav aria-label="Navegación entre meses" className="mt-16 lg:mt-20">
        <div className="grid grid-cols-2 gap-3 lg:hidden">
          <BotonMes
            mes={mesAnterior}
            direccion="anterior"
            disponible={anteriorDisponible}
          />

          <BotonMes
            mes={mesSiguiente}
            direccion="siguiente"
            disponible={siguienteDisponible}
          />

          <Link
            to="/cultos"
            className="
              col-span-2
              flex
              min-h-16
              w-full
              items-center
              justify-center
              rounded-2xl
              bg-black
              px-6
              py-4
              text-center
              text-base
              leading-none
              text-white
              transition-opacity
              hover:opacity-80
              focus-visible:outline-2
              focus-visible:outline-offset-4
              focus-visible:outline-black
            "
          >
            VOLVER A CULTOS
          </Link>
        </div>

        <div
          className="
            hidden
            grid-cols-[1fr_auto_1fr]
            items-center
            gap-8
            lg:grid
          "
        >
          <div className="flex justify-start">
            <BotonMes
              mes={mesAnterior}
              direccion="anterior"
              disponible={anteriorDisponible}
              escritorio
            />
          </div>

          <Link
            to="/cultos"
            className="
              inline-flex
              min-h-16
              min-w-52
              items-center
              justify-center
              rounded-2xl
              bg-black
              px-8
              py-4
              text-center
              text-lg
              text-white
              transition-opacity
              hover:opacity-80
              focus-visible:outline-2
              focus-visible:outline-offset-4
              focus-visible:outline-black
            "
          >
            VOLVER A CULTOS
          </Link>

          <div className="flex justify-end">
            <BotonMes
              mes={mesSiguiente}
              direccion="siguiente"
              disponible={siguienteDisponible}
              escritorio
            />
          </div>
        </div>
      </nav>
    </main>
  );
}
