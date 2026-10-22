import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Link } from "react-router";
import type { Route } from "./+types/cofradias.$slug";

import { CofradiaHero } from "~/components/CofradiaHero";
import { cofradias } from "~/data/cofradia";
import { cultosCards } from "~/data/cultos_cards";
import { cultosDetalle } from "~/data/cultos_detalle";

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
   NOMBRES DE LAS CELEBRACIONES
   La mayoría proceden de cultos_detalle.ts.
   Estos nombres concretan los títulos genéricos
   como «Cultos» y «Solemnes Cultos».
========================================== */

const nombresCelebraciones: Record<string, string> = {
  angustias: "Cultos y Función Principal",
  misericordia: "Cultos y Función Solemne",
  remedios: "Fiesta Principal",
  salud: "Natividad de la Virgen",
  alcazar: "Triduo y Fiesta Principal",
  consuelo: "Cultos y Función Principal",
  guia: "Triduo y Festividad de la Guía",
  amparo: "Cultos y Función Principal",
  jeronimo: "Vísperas y Santa Misa",
};

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

  // Una cofradía puede tener varios cultos en meses distintos.
  // Relacionamos las tarjetas por cofradía y por los IDs explícitos del culto,
  // sin recuperar celebraciones de otras advocaciones.
  const idsCultos = new Set<string>([
    cofradia.cultosId ?? "",
    ...(cofradia.cultosIds ?? []),
  ]);

  const ordenMeses = [
    "ENERO",
    "FEBRERO",
    "MARZO",
    "ABRIL",
    "MAYO",
    "JUNIO",
    "JULIO",
    "AGOSTO",
    "SEPTIEMBRE",
    "OCTUBRE",
    "NOVIEMBRE",
    "DICIEMBRE",
  ];

  const cultosDeCofradia = cultosCards
    .filter(
      (card) =>
        card.cofradiaId === cofradia.id ||
        idsCultos.has(card.cultoId ?? String(card.id)) ||
        idsCultos.has(String(card.id)),
    )
    .sort(
      (a, b) =>
        ordenMeses.indexOf(a.mes.toUpperCase()) -
          ordenMeses.indexOf(b.mes.toUpperCase()) || a.diaInicio - b.diaInicio,
    )
    .map((card) => {
      const idCulto = card.cultoId ?? String(card.id);
      const detalle = cultosDetalle.find(
        (item) =>
          item.id === idCulto || (!item.id && item.advocacionId === idCulto),
      );

      return {
        id: String(card.id),
        festividad:
          nombresCelebraciones[String(card.id)] ??
          detalle?.titulo ??
          `Cultos de ${card.mes.toLowerCase()}`,
        fecha: card.fecha,
        mes: card.mes,
      };
    });

  return {
    cofradia,
    colorCofradia,
    cultosDeCofradia,
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
  onAmpliar: (galeria: ImagenAmpliada[], indice: number) => void;
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
  const imagenesGaleria = titular.galeria.map((src, index) => ({
    src,
    alt: `Fotografía ${index + 1} de ${titular.nombre}`,
  }));

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
                const alt = imagenesGaleria[index].alt;

                return (
                  <button
                    key={`${titular.id}-${src}`}
                    type="button"
                    onClick={() => onAmpliar(imagenesGaleria, index)}
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
  const { cofradia, colorCofradia, cultosDeCofradia } = loaderData;

  const [galeriaAmpliada, setGaleriaAmpliada] = useState<{
    imagenes: ImagenAmpliada[];
    indice: number;
  } | null>(null);

  const dialogRef = useRef<HTMLDialogElement>(null);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);
  const imagenAmpliada = galeriaAmpliada?.imagenes[galeriaAmpliada.indice];
  const visorAbierto = galeriaAmpliada !== null;

  /* ==========================================
     VISOR DE IMÁGENES
  ========================================== */

  useEffect(() => {
    if (!visorAbierto) return;

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
  }, [visorAbierto]);

  function cambiarImagen(direccion: -1 | 1) {
    setGaleriaAmpliada((actual) => {
      if (!actual) return actual;

      return {
        ...actual,
        indice:
          (actual.indice + direccion + actual.imagenes.length) %
          actual.imagenes.length,
      };
    });
  }

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

  const mostrarGalerias =
    cofradia.fotosGaleria !== false && cofradia.titulares.length < 3;

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

            {cofradia.coronada === true && (
              <p className="mt-3 max-w-5xl text-4xl leading-[1.07] tracking-[-0.03em] md:text-5xl lg:text-6xl">
                Coronada
              </p>
            )}

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

                {cofradia.coronada === true && cofradia.coronadaFecha && (
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                      Fecha de coronación
                    </dt>

                    <dd className="mt-3 text-xl leading-snug md:text-2xl">
                      {cofradia.coronadaFecha}
                    </dd>
                  </div>
                )}
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
            onAmpliar={(imagenes, indice) =>
              setGaleriaAmpliada({ imagenes, indice })
            }
          />
        ))}

        {cofradia.fotosCedidas === true && (
          <section
            aria-label="Agradecimiento por la cesión de fotografías"
            className="mx-auto max-w-360 px-6 md:px-10 lg:px-30"
          >
            <div className="border-t border-black/15 py-10">
              <p className="text-center text-lg leading-relaxed text-black/80">
                Gracias {cofradia.fotoQuien || "quienes colaboraron"} por
                {" ceder las fotografías"}
                {cofradia.fotosSeccion &&
                  cofradia.fotosSeccion !== "todo" &&
                  ` de la ${cofradia.fotosSeccion}`}
                . Estoy muy agradecido por su generosidad y apoyo.
              </p>
            </div>
          </section>
        )}

        {/* ==========================================
            CULTOS DE LA COFRADÍA
            Cada celebración enlaza a su tarjeta por la cara principal.
        ========================================== */}
        {cultosDeCofradia.length > 0 && (
          <section
            aria-labelledby="cultos-cofradia-titulo"
            className="mx-auto max-w-360 px-6 pb-14 pt-3 md:px-10 md:pb-20 md:pt-5 lg:px-30"
          >
            <div className="border-t border-black/15 pt-12 md:pt-16">
              <header className="mx-auto max-w-3xl text-center">
                <h2
                  id="cultos-cofradia-titulo"
                  className="text-4xl leading-none tracking-[-0.03em] md:text-5xl lg:text-6xl"
                >
                  Cultos
                </h2>
                <p className="mt-5 text-base leading-relaxed text-black/65 md:mt-6 md:text-lg">
                  Celebraciones de {cofradia.nombre}
                </p>
              </header>

              <ul
                style={{ "--cultos-hover": colorCofradia } as CSSProperties}
                className={`mx-auto mt-10 grid gap-5 md:mt-14 md:gap-6 ${
                  cultosDeCofradia.length === 1
                    ? "max-w-xl"
                    : "max-w-5xl md:grid-cols-2"
                }`}
              >
                {cultosDeCofradia.map((culto) => (
                  <li key={culto.id} className="min-w-0">
                    <Link
                      to={`/cultos/${culto.mes.toLowerCase()}#culto-${encodeURIComponent(culto.id)}`}
                      aria-label={`Ver ${culto.festividad}, ${culto.fecha}`}
                      className="group flex h-full min-h-56 flex-col justify-between rounded-2xl border border-black/15 px-7 py-8 text-black transition-colors duration-200 hover:border-(--cultos-hover) hover:bg-(--cultos-hover) hover:text-white focus-visible:border-(--cultos-hover) focus-visible:bg-(--cultos-hover) focus-visible:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--cultos-hover) md:min-h-60 md:px-9 md:py-9"
                    >
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-black/75 md:text-base group-hover:text-white/75 group-focus-visible:text-white/75">
                          {culto.mes}
                        </p>
                        <h3 className="mt-6 text-3xl leading-[1.15] tracking-tight md:text-4xl">
                          {culto.festividad}
                        </h3>
                        <p className="mt-5 text-base leading-relaxed text-black/75 group-hover:text-white/85 group-focus-visible:text-white/85 md:text-lg">
                          {culto.fecha}
                        </p>
                      </div>
                      <span className="mt-10 inline-flex items-center gap-2 text-base font-semibold uppercase tracking-widest md:text-lg">
                        Ver cultos
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
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

      {imagenAmpliada && galeriaAmpliada && (
        <dialog
          ref={dialogRef}
          onClose={() => setGaleriaAmpliada(null)}
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              event.currentTarget.close();
            }
          }}
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft") {
              event.preventDefault();
              cambiarImagen(-1);
            } else if (event.key === "ArrowRight") {
              event.preventDefault();
              cambiarImagen(1);
            }
          }}
          aria-label="Imagen ampliada"
          className="fixed inset-0 m-auto h-svh max-h-none w-screen max-w-none border-0 bg-black/95 p-4 text-white backdrop:bg-black/95 md:p-8"
        >
          <div className="relative flex h-full flex-col items-center justify-center">
            <button
              type="button"
              autoFocus
              onClick={() => dialogRef.current?.close()}
              aria-label="Cerrar imagen ampliada"
              className="absolute right-0 top-0 z-10 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/40 bg-black text-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              ×
            </button>

            <div className="flex min-h-0 max-h-full max-w-full items-center justify-center gap-3 md:gap-5">
              {galeriaAmpliada.imagenes.length > 1 && (
                <button
                  type="button"
                  onClick={() => cambiarImagen(-1)}
                  aria-label="Ver imagen anterior"
                  className="hidden h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full border border-white/40 bg-black text-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:flex"
                >
                  ‹
                </button>
              )}

              <img
                src={imagenAmpliada.src}
                alt={imagenAmpliada.alt}
                onTouchStart={(event) => {
                  const touch = event.touches[0];
                  touchStartRef.current = {
                    x: touch.clientX,
                    y: touch.clientY,
                  };
                }}
                onTouchEnd={(event) => {
                  const inicio = touchStartRef.current;
                  touchStartRef.current = null;
                  if (!inicio || galeriaAmpliada.imagenes.length < 2) return;

                  const touch = event.changedTouches[0];
                  const diferenciaX = touch.clientX - inicio.x;
                  const diferenciaY = touch.clientY - inicio.y;

                  if (
                    Math.abs(diferenciaX) > 50 &&
                    Math.abs(diferenciaX) > Math.abs(diferenciaY)
                  ) {
                    cambiarImagen(diferenciaX < 0 ? 1 : -1);
                  }
                }}
                className="min-h-0 max-h-[calc(100%-3.5rem)] max-w-full touch-pan-y object-contain md:max-h-full md:max-w-[calc(100vw-14rem)]"
              />

              {galeriaAmpliada.imagenes.length > 1 && (
                <button
                  type="button"
                  onClick={() => cambiarImagen(1)}
                  aria-label="Ver imagen siguiente"
                  className="hidden h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full border border-white/40 bg-black text-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:flex"
                >
                  ›
                </button>
              )}
            </div>

            {galeriaAmpliada.imagenes.length > 1 && (
              <div className="flex w-full max-w-full shrink-0 items-center justify-between px-3 pt-3 md:hidden">
                <button
                  type="button"
                  onClick={() => cambiarImagen(-1)}
                  aria-label="Ver imagen anterior"
                  className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/40 bg-black text-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={() => cambiarImagen(1)}
                  aria-label="Ver imagen siguiente"
                  className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/40 bg-black text-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  ›
                </button>
              </div>
            )}
          </div>
        </dialog>
      )}
    </main>
  );
}
