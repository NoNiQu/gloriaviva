import { Link } from "react-router";
import { CopyEmailButton } from "~/components/CopyEmailButton";

export function meta() {
  return [
    {
      title: "Contacto | Gloria Viva",
    },
    {
      name: "description",
      content:
        "Contacta con Gloria Viva para comunicar correcciones, propuestas o cuestiones relacionadas con el proyecto.",
    },
  ];
}

export default function ContactoPage() {
  return (
    <main className="relative min-h-screen bg-[#263D63] text-white">
      <div className="mx-auto flex min-h-screen max-w-360 flex-col justify-start px-5 pb-20 pt-32 sm:px-6 md:px-10 md:pb-20 md:pt-40 lg:justify-center lg:px-30">
        <div className="grid w-full gap-16 md:gap-16 lg:grid-cols-2 lg:items-stretch">
          {/* Columna izquierda */}
          <section className="mt-14 flex max-w-xl flex-col md:mt-0">
            <h1 className="text-5xl font-normal leading-none tracking-[-0.03em] md:text-7xl">
              Contacto
            </h1>

            <p className="mt-7 max-w-lg text-[15px] leading-6 tracking-[0.03em] text-white/75 md:mt-8 md:text-lg md:leading-8">
              Gloria Viva es una guía independiente y no oficial dedicada a las
              cofradías, hermandades y devociones de gloria de Toledo capital.
            </p>

            <Link
              to="/faq"
              className="
                mt-7
                inline-flex
                w-fit
                items-center
                gap-3
                text-[1.05em]
                tracking-[0.03em]
                text-white/75
                transition-colors
                duration-200
                hover:text-white
                focus-visible:outline-2
                focus-visible:outline-offset-4
                focus-visible:outline-white
                md:mt-8
              "
            >
              Preguntas frecuentes
              <span aria-hidden="true">→</span>
            </Link>

            <div className="mt-8 border-t border-white/15 pt-7 md:mt-10 md:pt-8">
              <p className="text-sm uppercase tracking-[0.18em] text-white/75">
                Puedes escribir para
              </p>

              <ul className="mt-6 space-y-4 text-sm leading-6 text-white/75">
                <li className="flex gap-4">
                  <span aria-hidden="true" className="text-white/75">
                    —
                  </span>
                  <span className="tracking-wide">
                    Comunicar información incorrecta o desactualizada.
                  </span>
                </li>

                <li className="flex gap-4">
                  <span aria-hidden="true" className="text-white/75">
                    —
                  </span>
                  <span className="tracking-wide">
                    Proponer información, fotografías o colaboraciones.
                  </span>
                </li>

                <li className="flex gap-4">
                  <span aria-hidden="true" className="text-white/75">
                    —
                  </span>
                  <span className="tracking-wide">
                    Solicitar la corrección o retirada de contenidos.
                  </span>
                </li>

                <li className="flex gap-4">
                  <span aria-hidden="true" className="text-white/75">
                    —
                  </span>
                  <span className="tracking-wide">
                    Consultar cuestiones sobre el diseño y desarrollo del
                    proyecto.
                  </span>
                </li>

                <li className="flex gap-4">
                  <span aria-hidden="true" className="text-white/75">
                    —
                  </span>
                  <span className="tracking-wide">
                    Cualquier otra cuestión relacionada con Gloria Viva que
                    quieras comunicar.
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* Tarjeta derecha */}
          <section className="h-full w-full bg-white px-6 py-8 text-[#263D63] sm:p-8 md:p-12 lg:p-14">
            <h2 className="text-5xl font-normal leading-none tracking-[-0.03em] md:text-6xl">
              ¿Hablamos?
            </h2>

            <p className="mt-6 text-[15px] leading-6 tracking-[0.03em] text-black/75 md:mt-8 md:text-lg md:leading-8">
              Estoy abierto a correcciones, propuestas y colaboraciones que
              ayuden a mejorar la guía y mantener su información útil y
              actualizada.
            </p>

            <div className="mt-8 md:mt-8">
              <CopyEmailButton />
            </div>

            <div className="mt-8 border-t border-black/15 pt-7 md:mt-8">
              <p className="text-[15px] leading-6 tracking-wider text-black/75">
                Gloria Viva no es un canal oficial de las hermandades,
                cofradías, parroquias ni de ninguna institución.
              </p>

              <p className="mt-4 text-[15px] leading-6 tracking-wider text-black/75">
                Para confirmar horarios, suspensiones o cambios de última hora,
                consulta siempre los canales oficiales de la entidad
                organizadora.
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
