import { useState } from "react";

import { cultosDetalle } from "../data/cultos_detalle";
import { procesionesDetalle } from "../data/procesiones_detalle";

import type { CultoCardData } from "../types/culto_card";

type CultoCardProps = {
  card: CultoCardData;
  prioridad?: boolean;
};

type VistaCard = "principal" | "cultos" | "procesion" | "credito";

const titleSizeClasses = {
  small: "text-[clamp(2.8rem,12.2cqw,5.4rem)]",
  medium: "text-[clamp(4rem,16.5cqw,7.4rem)]",
  large: "text-[clamp(4.8rem,20cqw,9rem)]",
};

export function CultoCard({ card, prioridad = false }: CultoCardProps) {
  const [vista, setVista] = useState<VistaCard>("principal");

  const {
    id,
    nombre,
    subnombre,
    fecha,
    imagenUrl,
    imagenMovilUrl,
    imagenAlt,
    colorFondo,
    etiquetaSuperior,
    titleSize = "medium",
    imagePosition = "50% 50%",
    creditoFoto,
  } = card;

  const advocacionId = String(id);

  const culto = cultosDetalle.find(
    (item) => item.advocacionId === advocacionId,
  );

  const procesiones = procesionesDetalle.filter(
    (item) => item.advocacionId === advocacionId,
  );

  const tieneProcesion = procesiones.length > 0;

  const gradient = `linear-gradient(
    to bottom,
    transparent 51%,
    ${colorFondo}00 57%,
    ${colorFondo}80 70%,
    ${colorFondo} 80%,
    ${colorFondo} 100%
  )`;

  return (
    <article
      className="
        relative
        aspect-9/16
        w-full
        overflow-hidden
        rounded-[3rem]
        @container
      "
      style={{
        backgroundColor: colorFondo,
      }}
    >
      {vista === "principal" ? (
        <>
          <picture className="absolute inset-0 block h-full w-full">
            {imagenMovilUrl && (
              <source media="(max-width: 767px)" srcSet={imagenMovilUrl} />
            )}

            <img
              src={imagenUrl}
              alt={imagenAlt}
              loading={prioridad ? "eager" : "lazy"}
              fetchPriority={prioridad ? "high" : "auto"}
              decoding="async"
              className="
                h-full
                w-full
                object-cover
              "
              style={{
                objectPosition: imagePosition,
              }}
            />
          </picture>

          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background: gradient,
            }}
          />

          {creditoFoto && (
            <button
              type="button"
              onClick={() => setVista("credito")}
              aria-label={`Ver crédito de la fotografía de ${nombre}`}
              className="
                absolute
                right-[5%]
                top-[3.5%]
                z-30
                flex
                h-[clamp(3rem,11cqw,4.2rem)]
                w-[clamp(3rem,11cqw,4.2rem)]
                cursor-pointer
                items-center
                justify-center
                rounded-full
                text-white
                transition-opacity
                duration-200
                hover:opacity-80
                focus-visible:outline-2
                focus-visible:outline-offset-4
                focus-visible:outline-white
              "
              style={{
                backgroundColor: colorFondo,
                border: "1px solid rgba(255,255,255,0.18)",
                boxShadow: "0 10px 26px rgba(0,0,0,0.18)",
              }}
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-[47%] w-[47%]"
              >
                <path d="M4.75 7.75h3l1.35-2h5.8l1.35 2h3A2.75 2.75 0 0 1 22 10.5v6.75A2.75 2.75 0 0 1 19.25 20H4.75A2.75 2.75 0 0 1 2 17.25V10.5a2.75 2.75 0 0 1 2.75-2.75Z" />
                <circle cx="12" cy="13.5" r="3.5" />
              </svg>
            </button>
          )}

          {etiquetaSuperior && (
            <p
              className="
                absolute
                left-1/2
                top-[5.5%]
                z-20
                -translate-x-1/2
                whitespace-nowrap
                text-[clamp(1.3rem,6cqw,2.2rem)]
                uppercase
                leading-none
                text-white
              "
              style={{
                fontFamily: '"Gloock", Georgia, serif',
              }}
            >
              {etiquetaSuperior}
            </p>
          )}

          <div
            className="
              absolute
              inset-x-0
              bottom-0
              z-20
              flex
              flex-col
              px-[7%]
              pb-[8%]
            "
          >
            <h3
              className={`
                ${titleSizeClasses[titleSize]}
                translate-y-[-10%]
                text-center
                leading-[0.82]
                tracking-[-0.055em]
                text-white
              `}
              style={{
                fontFamily: '"Gloock", Georgia, serif',
              }}
            >
              {nombre}{" "}
              {subnombre && (
                <span
                  className="mt-2 block text-4xl"
                  style={{
                    letterSpacing: "0.02em",
                  }}
                >
                  {subnombre}
                </span>
              )}
            </h3>

            <p
              className="
                mt-[5.5%]
                whitespace-nowrap
                text-center
                text-[clamp(1.4rem,6.2cqw,2.6rem)]
                leading-none
                text-white
              "
              style={{
                fontFamily: '"Gloock", Georgia, serif',
              }}
            >
              {fecha}
            </p>

            <div
              className={[
                "mt-[10%] grid gap-[6%]",
                tieneProcesion ? "grid-cols-2" : "grid-cols-1",
              ].join(" ")}
            >
              <button
                type="button"
                onClick={() => setVista("cultos")}
                className="
                  flex
                  min-h-13
                  cursor-pointer
                  items-center
                  justify-center
                  rounded-2xl
                  bg-white
                  px-4
                  py-3
                  text-center
                  text-[clamp(1.32rem,5.6cqw,2.15rem)]
                  font-normal
                  leading-none
                  tracking-[-0.01em]
                  text-black
                  transition-opacity
                  hover:opacity-90
                  focus-visible:outline
                  focus-visible:outline-offset-4
                  focus-visible:outline-white
                "
                style={{
                  fontFamily: '"Gloock", Georgia, serif',
                }}
                aria-label={`Ver cultos de ${nombre}`}
              >
                CULTOS
              </button>

              {tieneProcesion && (
                <button
                  type="button"
                  onClick={() => setVista("procesion")}
                  className="
                    flex
                    min-h-13
                    cursor-pointer
                    items-center
                    justify-center
                    rounded-2xl
                    bg-white
                    px-4
                    py-3
                    text-center
                    text-[clamp(1.32rem,5.6cqw,2.15rem)]
                    font-normal
                    leading-none
                    tracking-[-0.01em]
                    text-black
                    transition-opacity
                    hover:opacity-90
                    focus-visible:outline
                    focus-visible:outline-offset-4
                    focus-visible:outline-white
                  "
                  style={{
                    fontFamily: '"Gloock", Georgia, serif',
                  }}
                  aria-label={`Ver procesión de ${nombre}`}
                >
                  PROCESIÓN
                </button>
              )}
            </div>
          </div>
        </>
      ) : (
        <div
          className="
            absolute
            inset-0
            flex
            flex-col
            px-[8%]
            pb-[8%]
            pt-[8%]
            text-white
          "
          style={{
            backgroundColor: colorFondo,
          }}
        >
          <p
            className="
              absolute
              top-[5.5%]
              z-20
              left-1/2
              -translate-x-1/2
              text-center
              text-[clamp(1rem,4cqw,1.4rem)]
              uppercase
              tracking-widest
            "
            style={{
              fontFamily: '"Gloock", Georgia, serif',
            }}
          >
            {nombre}
          </p>

          <button
            type="button"
            onClick={() => setVista("principal")}
            aria-label={`Cerrar información de ${nombre}`}
            className="
              absolute
              right-[5%]
              top-[3.5%]
              z-30
              flex
              h-[clamp(3rem,11cqw,4.2rem)]
              w-[clamp(3rem,11cqw,4.2rem)]
              cursor-pointer
              items-center
              justify-center
              text-white
              transition-opacity
              duration-200
              hover:opacity-70
              focus-visible:outline-2
              focus-visible:outline-offset-4
              focus-visible:outline-white
            "
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="h-[58%] w-[58%]"
            >
              <path d="M6 6l12 12" />
              <path d="M18 6L6 18" />
            </svg>
          </button>

          <div
            className="
              mt-[18%]
              min-h-0
              flex-1
              overflow-y-auto
              overscroll-contain
              pr-2
            "
          >
            {vista === "credito" && creditoFoto ? (
              <div
                className="
                  flex
                  min-h-full
                  flex-col
                  items-center
                  px-[4%]
                  pb-[9%]
                  pt-[6%]
                  text-center
                "
              >
                <div
                  className="
                    flex
                    flex-1
                    translate-y-[-6%]
                    flex-col
                    items-center
                    justify-center
                  "
                >
                  <p
                    className="
                      text-[clamp(1rem,4.4cqw,1.4rem)]
                      uppercase
                      tracking-[0.14em]
                      text-white/70
                    "
                  >
                    Foto cedida por
                  </p>

                  {creditoFoto.logoUrl ? (
                    <img
                      src={creditoFoto.logoUrl}
                      alt={
                        creditoFoto.logoAlt ?? `Logo de ${creditoFoto.nombre}`
                      }
                      loading="lazy"
                      decoding="async"
                      className="
                        mt-[7%]
                        max-h-[clamp(7rem,35cqw,13rem)]
                        max-w-[70%]
                        object-contain
                      "
                    />
                  ) : (
                    <p
                      className="
                        mt-[10%]
                        max-w-[90%]
                        text-[clamp(2rem,9cqw,4rem)]
                        leading-none
                        tracking-[-0.035em]
                      "
                      style={{
                        fontFamily: '"Gloock", Georgia, serif',
                      }}
                    >
                      {creditoFoto.nombre}
                    </p>
                  )}
                </div>

                <p
                  className="
                    mb-[20%]
                    mt-auto
                    max-w-[90%]
                    text-center
                    text-[clamp(1.12rem,4.7cqw,1.52rem)]
                    leading-relaxed
                    text-white/82
                  "
                  style={{
                    fontFamily: '"Gloock", Georgia, serif',
                  }}
                >
                  Muchas gracias por colaborar en el proyecto
                </p>
              </div>
            ) : vista === "cultos" && culto ? (
              <div>
                <header className="text-center">
                  <h3
                    className="
                      text-[clamp(2.6rem,11cqw,4.8rem)]
                      leading-none
                    "
                    style={{
                      fontFamily: '"Gloock", Georgia, serif',
                    }}
                  >
                    {culto.titulo}
                  </h3>

                  {culto.subtitulo && (
                    <p className="mt-3 text-[clamp(1rem,4cqw,1.4rem)] leading-snug">
                      {culto.subtitulo}
                    </p>
                  )}
                </header>

                <div className="mt-[10%] space-y-8">
                  {culto.bloques.map((bloque) => (
                    <section key={bloque.id}>
                      {bloque.titulo && (
                        <h4
                          className="
                            text-[clamp(1.35rem,5.5cqw,2rem)]
                            leading-tight
                          "
                          style={{
                            fontFamily: '"Gloock", Georgia, serif',
                          }}
                        >
                          {bloque.titulo}
                        </h4>
                      )}

                      <p
                        className={`
                          text-[clamp(1.05rem,4.3cqw,1.5rem)]
                          leading-snug
                          ${bloque.titulo ? "mt-2" : ""}
                        `}
                        style={{
                          fontFamily: '"Gloock", Georgia, serif',
                        }}
                      >
                        {bloque.fecha}
                      </p>

                      <div className="mt-3 space-y-2">
                        {bloque.lineas.map((linea) => (
                          <p
                            key={linea}
                            className="
                              text-[clamp(0.95rem,3.8cqw,1.3rem)]
                              leading-relaxed
                            "
                          >
                            {linea}
                          </p>
                        ))}
                      </div>
                    </section>
                  ))}
                </div>

                {culto.nota && (
                  <p
                    className="
                      mt-8
                      border-t
                      border-white/25
                      pt-5
                      text-[clamp(0.9rem,3.7cqw,1.25rem)]
                      leading-relaxed
                    "
                  >
                    {culto.nota}
                  </p>
                )}
              </div>
            ) : vista === "procesion" && tieneProcesion ? (
              <div>
                <header className="text-center">
                  <h3
                    className="
                      text-[clamp(2.6rem,11cqw,4.8rem)]
                      leading-none
                    "
                    style={{
                      fontFamily: '"Gloock", Georgia, serif',
                    }}
                  >
                    Procesión
                  </h3>
                </header>

                <div className="mt-[10%] space-y-10">
                  {procesiones.map((procesion) => (
                    <section
                      key={procesion.id}
                      className="
                        border-b
                        border-white/25
                        pb-9
                        last:border-b-0
                        last:pb-0
                      "
                    >
                      <h4
                        className="
                          text-[clamp(1.5rem,6cqw,2.2rem)]
                          leading-tight
                        "
                        style={{
                          fontFamily: '"Gloock", Georgia, serif',
                        }}
                      >
                        {procesion.nombre}
                      </h4>

                      <div className="mt-4 space-y-2">
                        <p className="text-[clamp(1rem,4cqw,1.35rem)]">
                          {procesion.fecha}
                        </p>

                        {procesion.horaTexto ? (
                          <p className="text-[clamp(0.95rem,3.8cqw,1.25rem)]">
                            {procesion.horaTexto}
                          </p>
                        ) : procesion.hora ? (
                          <p className="text-[clamp(0.95rem,3.8cqw,1.25rem)]">
                            {procesion.hora} h
                          </p>
                        ) : null}

                        {procesion.salida && (
                          <p className="text-[clamp(0.95rem,3.8cqw,1.25rem)] leading-relaxed">
                            <span
                              style={{
                                fontFamily: '"Gloock", Georgia, serif',
                              }}
                            >
                              Salida:
                            </span>{" "}
                            {procesion.salida}
                          </p>
                        )}
                      </div>

                      {procesion.recorrido.length > 0 && (
                        <div className="mt-6">
                          <h5
                            className="
                              text-[clamp(1.1rem,4.5cqw,1.5rem)]
                            "
                            style={{
                              fontFamily: '"Gloock", Georgia, serif',
                            }}
                          >
                            Recorrido
                          </h5>

                          <p
                            className="
                              mt-2
                              text-[clamp(0.9rem,3.6cqw,1.2rem)]
                              leading-relaxed
                            "
                          >
                            {procesion.recorrido.join(" → ")}
                          </p>
                        </div>
                      )}

                      {procesion.nota && (
                        <p
                          className="
                            mt-6
                            text-[clamp(0.9rem,3.6cqw,1.2rem)]
                            leading-relaxed
                          "
                        >
                          {procesion.nota}
                        </p>
                      )}
                    </section>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      )}
    </article>
  );
}
