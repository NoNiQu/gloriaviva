import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import type { Route } from "./+types/cofradias.$slug";

import { CofradiaHero } from "~/components/CofradiaHero";
import { cofradias } from "~/data/cofradia";
import { cultosCards } from "~/data/cultos_cards";

import type {
  RedesSociales,
  TipoCofradia,
  TitularData,
} from "~/types/cofradia";

/* ==========================================
   TIPOS AUXILIARES
========================================== */

type RedSocial = keyof RedesSociales;

type ImagenAmpliada = {
  src: string;
  alt: string;
};

const nombresRedes: Record<RedSocial, string> = {
  web: "Sitio web",
  instagram: "Instagram",
  facebook: "Facebook",
  X: "X",
  tiktok: "TikTok",
  youtube: "YouTube",
};

function nombreTipo(tipo: TipoCofradia) {
  switch (tipo) {
    case "devocion-popular":
      return "Devoción popular";
    case "gloria":
      return "Hermandad de Gloria";
    case "penitencia":
      return "Hermandad de Penitencia";
    case "dos-tipos":
      return "Hermandad de Penitencia y Gloria";
    default:
      return "Cofradía";
  }
}

/* ==========================================
   ICONOS REDES SOCIALES
========================================== */

function IconoRed({ tipo }: { tipo: RedSocial }) {
  const comun = {
    "aria-hidden": true as const,
    className: "h-5 w-5",
  };

  switch (tipo) {
    case "instagram":
      return (
        <svg
          {...comun}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        </svg>
      );

    case "facebook":
      return (
        <svg {...comun} viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.5 21v-8h2.8l.4-3h-3.2V8.1c0-.9.3-1.5 1.6-1.5H17V4a23 23 0 0 0-2.5-.1c-2.5 0-4.2 1.5-4.2 4.3V10H7.5v3h2.8v8h3.2Z" />
        </svg>
      );

    case "tiktok":
      return (
        <svg {...comun} viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 2h-3v13.1a3.1 3.1 0 1 1-2.7-3.1V9a6.1 6.1 0 1 0 5.7 6.1V8.2A8.3 8.3 0 0 0 21 10V7a5.1 5.1 0 0 1-5-5Z" />
        </svg>
      );

    case "youtube":
      return (
        <svg
          {...comun}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <rect x="2" y="5" width="20" height="14" rx="4" />
          <path d="m10 9 5 3-5 3V9Z" />
        </svg>
      );

    case "X":
      return (
        <svg {...comun} viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.901 1.153h3.68l-8.04 9.188L24 22.847h-7.406l-5.8-7.584-6.64 7.584H.47l8.6-9.83L0 1.153h7.594l5.243 6.932zm-1.29 19.49h2.039L6.486 3.237H4.298z" />
        </svg>
      );

    default:
      return (
        <svg
          {...comun}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
        </svg>
      );
  }
}

/* ==========================================
   LOADER
========================================== */

export function loader({ params }: Route.LoaderArgs) {
  const cofradia = cofradias.find((item) => item.slug === params.slug);

  if (!cofradia) {
    throw new Response("Cofradía no encontrada", {
      status: 404,
    });
  }

  const colorCofradia =
    cultosCards.find(
      (culto) =>
        String(culto.id) ===
        (cofradia.cultosIds?.[0] ?? cofradia.cultosId ?? cofradia.id),
    )?.colorFondo ?? "#263D63";

  return {
    cofradia,
    colorCofradia,
  };
}

/* ==========================================
   SEO
========================================== */

export function meta({ loaderData }: Route.MetaArgs) {
  if (!loaderData?.cofradia) {
    return [
      {
        title: "Cofradía no encontrada | Gloria Viva",
      },
    ];
  }

  const { nombre, subnombre, sedeCanonica } = loaderData.cofradia;

  const titulo = subnombre ? `${nombre} — ${subnombre}` : nombre;

  return [
    {
      title: `${titulo} | Gloria Viva`,
    },
    {
      name: "description",
      content: `Historia e imágenes de ${titulo}, ${sedeCanonica}, Toledo.`,
    },
  ];
}

/* ==========================================
   COMPONENTE: TITULAR
========================================== */

interface SeccionTitularProps {
  titular: TitularData;
  mostrarGaleria: boolean;
  esPrimero: boolean;
  esUltimo: boolean;
  onAmpliar: (imagen: ImagenAmpliada) => void;
}

function SeccionTitular({
  titular,
  mostrarGaleria,
  esPrimero,
  esUltimo,
  onAmpliar,
}: SeccionTitularProps) {
  // Solo se utiliza la fotografía propia del titular.
  const foto = titular.fotoUrl;

  return (
    <section
      aria-labelledby={`titular-${titular.id}`}
      className="bg-white text-black"
    >
      <div
        className={`mx-auto w-full max-w-360 px-6 md:px-10 lg:px-30 ${
          esPrimero ? "pt-20 md:pt-24 lg:pt-28" : "pt-10 md:pt-12 lg:pt-20"
        } ${esUltimo ? "pb-16 md:pb-20 lg:pb-24" : "pb-4 md:pb-6 lg:pb-8"}`}
      >
        {/* Fotografía e información */}
        <div className="grid lg:grid-cols-[0.42fr_0.58fr]">
          {/* Fotografía principal */}
          <div className="relative min-h-100 overflow-hidden bg-black/5 lg:min-h-110">
            {foto ? (
              <img
                src={foto}
                alt={titular.nombre}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover"
              />
            ) : (
              <div className="flex min-h-100 items-center justify-center px-6 lg:min-h-110">
                <p className="text-sm text-black/50">
                  Fotografía del titular próximamente
                </p>
              </div>
            )}
          </div>

          {/* Información del titular */}
          <div className="flex flex-col justify-center py-12 lg:py-10 lg:pl-16">
            <h2
              id={`titular-${titular.id}`}
              className="max-w-3xl text-4xl leading-[1.06] tracking-[-0.03em] md:text-5xl lg:text-6xl"
            >
              {titular.nombre}
            </h2>

            {/* Datos */}
            <dl className="mt-10 space-y-8">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-black/55">
                  {titular.anio !== null ? "Año" : "Siglo"}
                </dt>

                <dd className="mt-3 text-xl">
                  {titular.anio ?? titular.siglo ?? "Por confirmar"}
                </dd>
              </div>

              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-black/55">
                  Autor
                </dt>

                <dd className="mt-3 text-xl">
                  {titular.autor ?? "Por confirmar"}
                </dd>
              </div>

              {titular.tipoAndas && (
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-black/55">
                    Tipo de andas
                  </dt>

                  <dd className="mt-3 text-xl">{titular.tipoAndas}</dd>
                </div>
              )}
            </dl>

            {/* Datos de la talla */}
            {titular.datosTalla && (
              <div className="mt-10 border-t border-black/15 pt-7">
                <p className="max-w-3xl text-base leading-8 text-black/80 md:text-lg md:leading-9">
                  {titular.datosTalla}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Galería */}
        {mostrarGaleria && titular.galeria.length > 0 && (
          <div className="mt-12 border-t border-black/15 pt-10">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {titular.galeria.map((src, index) => {
                const alt = `Fotografía ${index + 1} de ${titular.nombre}`;

                return (
                  <button
                    key={`${titular.id}-${src}`}
                    type="button"
                    onClick={() => onAmpliar({ src, alt })}
                    aria-label={`Ampliar ${alt}`}
                    className="relative aspect-2/3 cursor-pointer overflow-hidden bg-black/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
                  >
                    <img
                      src={src}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

/* ==========================================
   PÁGINA PRINCIPAL
========================================== */

export default function CofradiaPage({ loaderData }: Route.ComponentProps) {
  const { cofradia, colorCofradia } = loaderData;

  const [imagenAmpliada, setImagenAmpliada] = useState<ImagenAmpliada | null>(
    null,
  );

  const dialogRef = useRef<HTMLDialogElement>(null);

  /* ==========================================
     VISOR DE IMÁGENES
  ========================================== */

  useEffect(() => {
    if (!imagenAmpliada) return;

    const dialog = dialogRef.current;

    if (!dialog) return;

    const overflowAnterior = document.body.style.overflow;

    if (!dialog.open) {
      dialog.showModal();
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = overflowAnterior;

      if (dialog.open) {
        dialog.close();
      }
    };
  }, [imagenAmpliada]);

  /* ==========================================
     PORTADAS
  ========================================== */

  const portadaDesktop = cofradia.portadaDesktopUrl ?? cofradia.portadaMovilUrl;

  const portadaMovil = cofradia.portadaMovilUrl ?? portadaDesktop;

  /* ==========================================
     REDES SOCIALES
  ========================================== */

  const redes = (
    Object.entries(cofradia.redes) as Array<[RedSocial, string | null]>
  ).filter(
    (entrada): entrada is [RedSocial, string] =>
      typeof entrada[1] === "string" && entrada[1].trim().length > 0,
  );

  /* ==========================================
     FECHAS HISTÓRICAS
  ========================================== */

  const fechas: Array<{
    etiqueta: string;
    valor: number;
  }> = [];

  if (cofradia.anioFundacion !== null) {
    fechas.push({
      etiqueta: "Fundación",
      valor: cofradia.anioFundacion,
    });
  }

  if (cofradia.anioRefundacion !== null) {
    fechas.push({
      etiqueta: "Refundación",
      valor: cofradia.anioRefundacion,
    });
  }

  if (cofradia.referenciaHistorica !== null) {
    fechas.push({
      etiqueta: "Referencia histórica",
      valor: cofradia.referenciaHistorica,
    });
  }

  const mostrarGalerias = cofradia.titulares.length < 3;

  return (
    <main>
      {/* ==========================================
          HERO 1 - PORTADA
      ========================================== */}

      {portadaDesktop && portadaMovil && (
        <CofradiaHero
          nombre={cofradia.nombre}
          imagenDesktop={portadaDesktop}
          imagenMovil={portadaMovil}
        />
      )}

      {/* ==========================================
          HERO 2 - HISTORIA
      ========================================== */}

      <section
        id="historia-cofradia"
        aria-labelledby="cofradia-titulo"
        className="relative isolate flex min-h-svh items-center overflow-hidden bg-[#263D63] text-white"
      >
        {/* Color de fondo de la cofradía */}
        <svg
          aria-hidden="true"
          viewBox="0 0 1 1"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full"
        >
          <rect x="0" y="0" width="1" height="1" fill={colorCofradia} />
        </svg>

        {/* Contenido centrado verticalmente */}
        <div className="relative mx-auto w-full max-w-360 px-6 py-16 md:px-10 md:py-20 lg:px-30">
          {/* Encabezado */}
          <header className="flex flex-col items-center text-center">
            {cofradia.escudoUrl && (
              <img
                src={cofradia.escudoUrl}
                alt=""
                loading="lazy"
                decoding="async"
                className="max-h-36 max-w-36 object-contain md:max-h-40"
              />
            )}

            <h1
              id="cofradia-titulo"
              className={`max-w-5xl text-4xl leading-[1.07] tracking-[-0.03em] md:text-5xl lg:text-6xl ${
                cofradia.escudoUrl ? "mt-7" : ""
              }`}
            >
              {cofradia.nombre}
            </h1>

            {/* Clasificación */}
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.24em] text-white/85 md:text-sm">
              {nombreTipo(cofradia.tipo)}
            </p>
          </header>

          {/* Datos e historia */}
          <div className="mt-12 grid border-y border-white/25 lg:mt-16 lg:grid-cols-[0.42fr_0.58fr]">
            {/* Datos */}
            <aside
              aria-label="Datos de la cofradía"
              className="border-b border-white/25 py-10 lg:border-b-0 lg:border-r lg:py-12 lg:pr-16"
            >
              <dl className="space-y-9">
                {fechas.length > 0 ? (
                  fechas.map((fecha) => (
                    <div key={fecha.etiqueta}>
                      <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                        {fecha.etiqueta}
                      </dt>

                      <dd className="mt-3 text-2xl tracking-[-0.02em] md:text-3xl">
                        {fecha.valor}
                      </dd>
                    </div>
                  ))
                ) : (
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                      Fundación
                    </dt>

                    <dd className="mt-3 text-xl">Por confirmar</dd>
                  </div>
                )}

                {/* Sede */}
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                    Sede canónica
                  </dt>

                  <dd className="mt-3 text-xl leading-snug md:text-2xl">
                    {cofradia.sedeCanonica}
                  </dd>
                </div>
              </dl>

              {/* Redes sociales */}
              <div className="mt-10">
                <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                  Redes sociales
                </h2>

                {redes.length > 0 ? (
                  <div className="mt-5 flex flex-wrap gap-3">
                    {redes.map(([tipo, url]) => (
                      <a
                        key={tipo}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={nombresRedes[tipo]}
                        title={nombresRedes[tipo]}
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 text-white transition-colors duration-200 hover:border-white hover:bg-white hover:text-[#263D63] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                      >
                        <IconoRed tipo={tipo} />
                      </a>
                    ))}
                  </div>
                ) : (
                  <p className="mt-5 text-sm text-white/85">
                    No tiene redes sociales disponibles.
                  </p>
                )}
              </div>
            </aside>

            {/* Historia */}
            <section
              aria-labelledby="historia-titulo"
              className="py-10 lg:py-12 lg:pl-16"
            >
              <h2
                id="historia-titulo"
                className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70"
              >
                Historia
              </h2>

              <p className="mt-7 max-w-3xl text-base leading-8 text-white/95 md:text-lg md:leading-9">
                {cofradia.historia || "Información histórica próximamente."}
              </p>
            </section>
          </div>
        </div>
      </section>

      {/* ==========================================
          HERO 3 - TITULARES
      ========================================== */}

      <div className="bg-white text-black">
        {cofradia.titulares.map((titular, index) => (
          <SeccionTitular
            key={titular.id}
            titular={titular}
            mostrarGaleria={mostrarGalerias}
            esPrimero={index === 0}
            esUltimo={index === cofradia.titulares.length - 1}
            onAmpliar={setImagenAmpliada}
          />
        ))}

        {cofradia.fotosCedidas === true && (
          <section
            aria-label="Agradecimiento por la cesión de fotografías"
            className="mx-auto max-w-360 px-6 md:px-10 lg:px-30"
          >
            <div className="border-t border-black/15 py-10">
              <p className="text-center text-lg leading-relaxed text-black/80">
                Gracias a {cofradia.fotoQuien || "quienes colaboraron"} por
                {" ceder las fotografías"}
                {cofradia.fotosSeccion &&
                  cofradia.fotosSeccion !== "todo" &&
                  ` de la ${cofradia.fotosSeccion}`}
                . Estoy muy agradecido por su generosidad y apoyo.
              </p>
            </div>
          </section>
        )}

        {/* Volver a cofradías */}
        <nav
          aria-label="Navegación de cofradías"
          className="mx-auto max-w-360 px-6 pb-16 md:px-10 md:pb-20 lg:px-30"
        >
          <div className="border-t border-black/15 pt-7">
            <Link
              to="/cofradias"
              className="inline-flex min-h-11 items-center gap-3 text-sm tracking-[0.03em] text-black/75 transition-colors hover:text-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
            >
              <span aria-hidden="true">←</span>
              Volver a cofradías
            </Link>
          </div>
        </nav>
      </div>

      {/* ==========================================
          VISOR DE IMÁGENES
      ========================================== */}

      {imagenAmpliada && (
        <dialog
          ref={dialogRef}
          onClose={() => setImagenAmpliada(null)}
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              event.currentTarget.close();
            }
          }}
          aria-label="Imagen ampliada"
          className="fixed inset-0 m-auto h-svh max-h-none w-screen max-w-none border-0 bg-black/95 p-4 text-white backdrop:bg-black/95 md:p-8"
        >
          <div
            className="relative flex h-full items-center justify-center"
            onClick={() => dialogRef.current?.close()}
          >
            <button
              type="button"
              autoFocus
              onClick={() => dialogRef.current?.close()}
              aria-label="Cerrar imagen ampliada"
              className="absolute right-0 top-0 z-10 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/40 bg-black text-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              ×
            </button>

            <img
              src={imagenAmpliada.src}
              alt={imagenAmpliada.alt}
              onClick={(event) => event.stopPropagation()}
              className="max-h-full max-w-full object-contain"
            />
          </div>
        </dialog>
      )}
    </main>
  );
}
