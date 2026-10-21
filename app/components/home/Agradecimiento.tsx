import { Link } from "react-router";

export function Agradecimientos() {
  return (
    <section
      aria-labelledby="agradecimientos-title"
      className="bg-[#263D63] text-white"
    >
      <div className="mx-auto max-w-360 px-6 py-14 md:px-10 md:py-20 lg:flex lg:min-h-svh lg:flex-col lg:justify-center lg:px-20 lg:py-16">
        {/* Agradecimientos */}
        <div className="mx-auto w-full max-w-5xl text-center">
          <h2
            id="agradecimientos-title"
            className="text-[2.6rem] font-normal leading-[1.02] tracking-[-0.03em] md:text-6xl md:leading-[0.98]"
          >
            Agradecimientos
          </h2>

          <div className="mx-auto mt-8 max-w-4xl space-y-4 text-[0.95rem] leading-7 tracking-wider text-white/75 md:mt-10 md:text-base md:leading-7">
            <p>
              Gloria Viva nació con la intención de reunir en un mismo lugar las
              cofradías, hermandades y devociones de gloria de Toledo y acercar
              su historia, sus cultos y sus tradiciones a todo aquel que quiera
              conocerlas.
            </p>

            <p>
              Gracias a todas las personas que han dedicado parte de su tiempo a
              compartir información, corregir errores, aportar fotografías o
              ayudarme a conocer mejor las distintas devociones de la ciudad.
            </p>

            <p>
              Y, especialmente, gracias a las hermandades, cofradías,
              parroquias, comunidades y personas que mantienen vivas estas
              tradiciones y permiten que sigan formando parte de la historia y
              de los barrios de Toledo.
            </p>

            <p className="pt-1 text-white">
              Gloria Viva también tiene un poco de vosotros.
            </p>
          </div>
        </div>

        {/* Beneplácito del Consejo Mayor: integrado en Agradecimientos */}
        <div className="mx-auto mt-16 w-full max-w-5xl border-y border-white/20 py-10 md:mt-20 md:py-14 lg:mt-24">
          <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-center sm:gap-10 lg:gap-14">
            {/* Escudo */}
            <div className="flex w-full shrink-0 items-center justify-center sm:w-40 lg:w-48">
              <img
                src="/gloria.png"
                alt="Escudo del Consejo Mayor de Hermandades y Cofradías de Gloria de Toledo"
                width={180}
                height={200}
                loading="lazy"
                decoding="async"
                className="block h-auto max-h-40 w-auto max-w-36 object-contain md:max-h-48 md:max-w-44"
              />
            </div>

            {/* Texto */}
            <div className="min-w-0 flex-1 text-center sm:text-left">
              <h3 className="text-[clamp(1.6rem,3vw,2.5rem)] leading-[1.2] tracking-tight">
                Con el beneplácito del Consejo Rector
              </h3>

              <p className="mt-5 text-base leading-8 tracking-[0.02em] text-white/85 md:text-lg">
                Gloria Viva cuenta con el beneplácito del Consejo Rector del
                Consejo Mayor de Hermandades y Cofradías de Gloria de la ciudad
                de Toledo.
              </p>
            </div>
          </div>
        </div>

        {/* Ayuda y enlaces */}
        <div className="mt-12 md:mt-16 lg:mt-20">
          <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-[1.15fr_0.85fr] md:gap-8">
            {/* Texto */}
            <div className="flex min-h-64 flex-col justify-center px-2 py-7 md:min-h-72 md:px-4 md:py-9 lg:px-6">
              <h3 className="text-3xl font-normal leading-[1.05] tracking-tight md:text-5xl">
                ¿Tienes alguna duda?
              </h3>

              <p className="mt-7 max-w-xl text-base leading-7 tracking-wider text-white/75 md:text-[1.05rem] md:leading-8">
                Si has encontrado algún error, quieres aportar información,
                fotografías o cualquier contenido relacionado con Gloria Viva,
                estaré encantado de leerte.
              </p>

              <p className="mt-4 max-w-xl text-base leading-7 tracking-wider text-white/75 md:text-[1.05rem] md:leading-8">
                También puedes consultar las preguntas frecuentes por si la
                respuesta que buscas ya está allí.
              </p>
            </div>

            {/* Botones */}
            <div className="grid content-center gap-5 md:gap-10">
              <Link
                to="/contacto"
                className="flex min-h-22 items-center justify-center rounded-2xl border border-white bg-white px-5 py-5 text-center text-xl font-normal leading-tight tracking-[0.03em] text-black transition-colors duration-300 hover:border-white/75 hover:bg-white/75 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:min-h-24 md:px-6 md:py-6 md:text-2xl lg:text-3xl"
              >
                Contacto
              </Link>

              <Link
                to="/faq"
                className="flex min-h-22 items-center justify-center rounded-2xl border border-white bg-white px-5 py-5 text-center text-xl font-normal leading-tight tracking-[0.03em] text-black transition-colors duration-300 hover:border-white/75 hover:bg-white/75 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:min-h-24 md:px-6 md:py-6 md:text-2xl lg:text-3xl"
              >
                <span className="max-w-full whitespace-normal wrap-break-word">
                  Preguntas frecuentes
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
