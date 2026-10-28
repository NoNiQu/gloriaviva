import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router";

import { cultosCards } from "~/data/cultos_cards";
import { cofradias } from "~/data/cofradia";
import type { CultoCardData } from "~/types/culto_card";

/* ==========================================
   CARRUSEL DE CULTOS · DINÁMICO

   Fotografías (AVIF):
   app/assets/carrusel/desktop/<id>.avif
   app/assets/carrusel/movil/<id>.avif

   Por ejemplo: remedios.avif

   También se admite el ID de la cofradía cuando tiene
   varios cultos: estrella-octubre.avif tiene preferencia
   sobre estrella.avif. Si no existe una foto del carrusel,
   se mantiene el color de la cofradía, sin cargar imágenes
   de las tarjetas de Cultos.

   Los meses y las fechas se obtienen de cultos_cards.ts.
   Para un nuevo año, hay que actualizar allí los cultos
   variables; este componente no inventa sus fechas.
========================================== */

const desktopModules = import.meta.glob("/app/assets/carrusel/desktop/*.avif", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

const mobileModules = import.meta.glob("/app/assets/carrusel/movil/*.avif", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

const MESES = [
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
] as const;

const SLIDE_DURATION = 6000;
const FADE_DURATION = 1000;

function extraerIdArchivo(path: string): string {
  return (path.split("/").pop() ?? "").replace(/\.avif$/i, "").toLowerCase();
}

const imagenesDesktop = new Map(
  Object.entries(desktopModules).map(([path, url]) => [
    extraerIdArchivo(path),
    url,
  ]),
);

const imagenesMovil = new Map(
  Object.entries(mobileModules).map(([path, url]) => [
    extraerIdArchivo(path),
    url,
  ]),
);

function buscarImagen(
  imagenes: Map<string, string>,
  card: CultoCardData,
): string | undefined {
  // Primero una foto exclusiva del culto; si no existe, la de su cofradía.
  const ids = [String(card.id), card.cofradiaId, card.advocacionId];

  for (const id of ids) {
    if (!id) continue;
    const encontrada = imagenes.get(id.toLowerCase());
    if (encontrada) return encontrada;
  }

  return undefined;
}

function perteneceAlMes(card: CultoCardData, nombreMes: string): boolean {
  const buscado = nombreMes.toUpperCase();
  return (
    card.mes.toUpperCase() === buscado ||
    card.meses?.some((mes) => mes.toUpperCase() === buscado) === true
  );
}

function indiceMesEnToledo(): number {
  // Intl permite que la elección del mes siga el calendario de Toledo,
  // aunque una persona consulte la web desde otro huso horario.
  const mes = new Intl.DateTimeFormat("es-ES", {
    timeZone: "Europe/Madrid",
    month: "long",
  })
    .format(new Date())
    .toUpperCase();

  return Math.max(
    0,
    MESES.findIndex((item) => item.nombre === mes),
  );
}

function mesQueMostrar(indiceActual: number): number | null {
  // Mes actual si tiene cultos. Si no, siguiente mes con cultos.
  // La búsqueda es circular, para no dejar la Home sin carrusel.
  for (
    let desplazamiento = 0;
    desplazamiento < MESES.length;
    desplazamiento++
  ) {
    const indice = (indiceActual + desplazamiento) % MESES.length;
    if (
      cultosCards.some((card) => perteneceAlMes(card, MESES[indice].nombre))
    ) {
      return indice;
    }
  }

  return null;
}

type Diapositiva = {
  id: string;
  nombre: string;
  tipoCofradia: string;
  subnombre?: string;
  fecha: string;
  colorFondo: string;
  posicionFoto: string;
  desktopSrc?: string;
  mobileSrc?: string;
};

function obtenerTipoCofradia(card: CultoCardData): string {
  // Los cultos adicionales pueden tener un ID distinto del de su cofradía.
  const idCofradia = card.cofradiaId ?? card.advocacionId ?? String(card.id);
  const tipo = cofradias.find((item) => item.id === idCofradia)?.tipo;

  switch (tipo) {
    case "devocion-popular":
      return "Devoción popular";
    case "gloria":
      return "Gloria";
    case "penitencia":
      return "Penitencia";
    case "dos-tipos":
      return "Penitencia y Gloria";
    default:
      // Una celebración extraordinaria puede no tener ficha propia.
      return card.etiquetaSuperior ?? "Celebración";
  }
}

function obtenerDiapositivas(nombreMes: string): Diapositiva[] {
  return cultosCards
    .filter((card) => perteneceAlMes(card, nombreMes))
    .map((card, ordenOriginal) => ({ card, ordenOriginal }))
    .sort(
      (a, b) =>
        (a.card.diaInicioPorMes?.[nombreMes] ?? a.card.diaInicio) -
          (b.card.diaInicioPorMes?.[nombreMes] ?? b.card.diaInicio) ||
        a.ordenOriginal - b.ordenOriginal,
    )
    .map(({ card }) => {
      // Las dos resoluciones deben salir exclusivamente de app/assets/carrusel/.
      // Si solo hay una variante AVIF, se aprovecha en ambos tamaños.
      const desktopSrc =
        buscarImagen(imagenesDesktop, card) ??
        buscarImagen(imagenesMovil, card);
      const mobileSrc = buscarImagen(imagenesMovil, card) ?? desktopSrc;

      return {
        id: String(card.id),
        nombre: card.nombre,
        tipoCofradia: obtenerTipoCofradia(card),
        subnombre: card.subnombre ?? undefined,
        fecha: card.fecha,
        colorFondo: card.colorFondo,
        posicionFoto: card.imagePosition ?? "50% 50%",
        desktopSrc,
        mobileSrc,
      };
    });
}

// Selecciona la resolución que realmente necesita el dispositivo.
// Solo se llama desde efectos en el navegador (no durante SSR).
function fuenteParaPantalla(diapositiva: Diapositiva): string | undefined {
  const esMovil = window.matchMedia("(max-width: 1023px)").matches;
  return esMovil
    ? (diapositiva.mobileSrc ?? diapositiva.desktopSrc)
    : (diapositiva.desktopSrc ?? diapositiva.mobileSrc);
}

export function ProximosCultos() {
  const [mesActual, setMesActual] = useState(indiceMesEnToledo);
  const [indiceActivo, setIndiceActivo] = useState(0);
  const [indiceAnterior, setIndiceAnterior] = useState<number | null>(null);
  const [movimientoReducido, setMovimientoReducido] = useState(false);
  const [pausaManual, setPausaManual] = useState(false);
  const [pausaPorRaton, setPausaPorRaton] = useState(false);
  const [pausaPorFoco, setPausaPorFoco] = useState(false);
  const pausado = pausaManual || pausaPorRaton || pausaPorFoco;
  // La primera foto aparece con un fundido al terminar de cargarse.
  // No mostramos una fotografía a medio decodificar.
  const [fotosCargadas, setFotosCargadas] = useState<Set<string>>(
    () => new Set(),
  );

  // El mes se actualiza sin necesidad de recargar la página si permanece
  // abierta durante un cambio de mes.
  useEffect(() => {
    const actualizarMes = () => setMesActual(indiceMesEnToledo());
    actualizarMes();

    const intervalo = window.setInterval(actualizarMes, 60_000);
    return () => window.clearInterval(intervalo);
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const actualizarPreferencia = () => setMovimientoReducido(media.matches);
    actualizarPreferencia();
    media.addEventListener("change", actualizarPreferencia);
    return () => media.removeEventListener("change", actualizarPreferencia);
  }, []);

  const indiceMesVisible = useMemo(() => mesQueMostrar(mesActual), [mesActual]);
  const mesVisible = indiceMesVisible === null ? null : MESES[indiceMesVisible];

  const diapositivas = useMemo(
    () => (mesVisible ? obtenerDiapositivas(mesVisible.nombre) : []),
    [mesVisible],
  );

  // Al pasar a otro mes, empezar por la primera celebración.
  useEffect(() => {
    setIndiceActivo(0);
    setIndiceAnterior(null);
  }, [indiceMesVisible]);

  // La primera imagen puede haberse cargado ANTES de que React hidrate el HTML
  // del servidor. En ese caso se pierde onLoad y el <picture> queda oculto.
  // Comprobamos también las imágenes ya cargadas: sirve para la primera foto
  // y para las siguientes, si llegan desde la caché o la precarga.
  useEffect(() => {
    if (!mesVisible || diapositivas.length === 0) return;

    const indice = Math.min(indiceActivo, diapositivas.length - 1);
    const idFoto = `${mesVisible.slug}-${diapositivas[indice].id}`;
    const imagen = document.getElementById(`imagen-carrusel-${idFoto}`);

    if (!(imagen instanceof HTMLImageElement)) return;
    if (!imagen.complete || imagen.naturalWidth === 0) return;

    let cancelado = false;
    const mostrarImagen = () => {
      if (cancelado) return;
      setFotosCargadas((anteriores) => {
        if (anteriores.has(idFoto)) return anteriores;
        const siguientes = new Set(anteriores);
        siguientes.add(idFoto);
        return siguientes;
      });
    };

    // Una imagen descargada puede seguir pendiente de decodificación.
    // El fundido arranca al terminarla, evitando un salto en pantalla.
    void imagen.decode().then(mostrarImagen, mostrarImagen);

    return () => {
      cancelado = true;
    };
  }, [indiceActivo, diapositivas, mesVisible]);

  // Precargamos la PRÓXIMA diapositiva en segundo plano mientras el visitante
  // contempla la actual. Solo se solicita la variante necesaria (móvil/desktop).
  useEffect(() => {
    if (diapositivas.length < 2 || movimientoReducido) return;

    const siguiente = diapositivas[(indiceActivo + 1) % diapositivas.length];
    const src = fuenteParaPantalla(siguiente);
    if (!src) return;

    const imagen = new Image();
    imagen.decoding = "async";
    imagen.src = src;
    // Decodificar con antelación evita un salto al pasar a la siguiente foto.
    void imagen.decode().catch(() => {});
  }, [indiceActivo, diapositivas, movimientoReducido]);

  useEffect(() => {
    if (movimientoReducido || pausado || diapositivas.length < 2) return;

    let cancelado = false;
    const temporizador = window.setTimeout(() => {
      const siguiente = diapositivas[(indiceActivo + 1) % diapositivas.length];
      const src = fuenteParaPantalla(siguiente);

      const avanzar = () => {
        if (cancelado) return;
        setIndiceAnterior(indiceActivo);
        setIndiceActivo((indiceActivo + 1) % diapositivas.length);
      };

      if (!src) {
        avanzar(); // Sin fotografía: mostrar únicamente el color de la cofradía.
        return;
      }

      const imagen = new Image();
      imagen.decoding = "async";
      imagen.src = src;
      if (imagen.complete && imagen.naturalWidth > 0) {
        avanzar();
      } else {
        // Si la descarga tarda, esperamos antes de cambiar el texto y el color.
        // Si falla, no bloqueamos el carrusel: permanece el fondo de color.
        void imagen.decode().then(avanzar, avanzar);
      }
    }, SLIDE_DURATION);

    return () => {
      cancelado = true;
      window.clearTimeout(temporizador);
    };
  }, [indiceActivo, diapositivas, movimientoReducido, pausado]);

  useEffect(() => {
    if (indiceAnterior === null) return;

    const temporizador = window.setTimeout(
      () => setIndiceAnterior(null),
      FADE_DURATION + 80,
    );
    return () => window.clearTimeout(temporizador);
  }, [indiceAnterior, indiceActivo]);

  if (!mesVisible || diapositivas.length === 0) return null;

  const indiceSeguro = Math.min(indiceActivo, diapositivas.length - 1);
  const actual = diapositivas[indiceSeguro];
  const enlaceMes = `/cultos/${mesVisible.slug}`;
  const enlaceCulto = `${enlaceMes}#culto-${encodeURIComponent(actual.id)}`;
  const etiquetaCulto = `Saber más sobre ${actual.nombre}${actual.subnombre ? `, ${actual.subnombre}` : ""}`;
  const enlaceSecundario = (
    <Link
      to={enlaceMes}
      className="absolute inset-x-0 top-full mt-2 inline-flex min-h-8 items-center justify-center text-center text-sm leading-6 text-white/85 underline decoration-white/50 underline-offset-4 transition-colors hover:text-white hover:decoration-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
    >
      Ver todos los cultos de {mesVisible.nombre.toLowerCase()}
    </Link>
  );
  const indicesFotografia = [indiceAnterior, indiceSeguro].filter(
    (indice): indice is number =>
      indice !== null && indice < diapositivas.length,
  );
  const indicesUnicos = [...new Set(indicesFotografia)];

  return (
    <section
      aria-labelledby="proximos-cultos-titulo"
      aria-roledescription="carrusel"
      aria-label={`Cultos de ${mesVisible.nombre.toLowerCase()}`}
      onMouseEnter={() => setPausaPorRaton(true)}
      onMouseLeave={() => setPausaPorRaton(false)}
      onFocusCapture={() => setPausaPorFoco(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget))
          setPausaPorFoco(false);
      }}
      className="relative isolate h-svh min-h-175 overflow-hidden text-white lg:min-h-190"
      style={{ backgroundColor: actual.colorFondo }}
    >
      {diapositivas.length > 1 && (
        <button
          type="button"
          disabled={movimientoReducido}
          onClick={() => setPausaManual((anterior) => !anterior)}
          aria-label={
            movimientoReducido
              ? "Avance automático desactivado por tu preferencia de movimiento reducido"
              : pausaManual
                ? "Reanudar el avance automático del carrusel"
                : "Pausar el avance automático del carrusel"
          }
          title={
            movimientoReducido
              ? "El avance automático está desactivado por tu preferencia de movimiento reducido"
              : undefined
          }
          className="absolute right-6 top-6 z-30 inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-full border border-white/40 bg-black/70 px-4 py-2 text-sm text-white transition-colors hover:bg-black/90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white disabled:cursor-default sm:right-8 sm:top-8"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-4 w-4"
          >
            {pausaManual && !movimientoReducido ? (
              <path d="m8 5 11 7-11 7V5Z" />
            ) : (
              <path d="M6 5h4v14H6V5Zm8 0h4v14h-4V5Z" />
            )}
          </svg>
          {movimientoReducido ? "Pausado" : pausaManual ? "Reanudar" : "Pausar"}
        </button>
      )}

      {/* Cada diapositiva tiene SU propio color, foto y degradado.
          Así, al cambiar de hermandad, la transición funde el conjunto
          y no cambia bruscamente la tonalidad sobre una foto anterior. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {indicesUnicos.map((indice) => {
          const diapositiva = diapositivas[indice];
          const idFoto = `${mesVisible.slug}-${diapositiva.id}`;

          // Color sólido hasta el 40 % (zona del texto).
          // El degradado se extiende suavemente hasta el 72 % para evitar
          // que se perciba la transición entre color y fotografía.
          // La foto sigue comenzando por debajo del color (22 %).
          const gradienteEscritorio = `linear-gradient(to right,
            ${diapositiva.colorFondo} 0%,
            ${diapositiva.colorFondo} 40%,
            ${diapositiva.colorFondo}F5 44%,
            ${diapositiva.colorFondo}D9 48%,
            ${diapositiva.colorFondo}AD 52%,
            ${diapositiva.colorFondo}7A 56%,
            ${diapositiva.colorFondo}46 60%,
            ${diapositiva.colorFondo}18 65%,
            ${diapositiva.colorFondo}00 72%)`;

          return (
            <div
              key={`${mesVisible.slug}-${diapositiva.id}`}
              className={[
                "absolute inset-0",
                "transition-opacity duration-1000 ease-in-out",
                "motion-reduce:transition-none",
                indice === indiceAnterior
                  ? "z-10 opacity-0"
                  : "z-0 opacity-100",
              ].join(" ")}
              style={{ backgroundColor: diapositiva.colorFondo }}
            >
              {/* Fotografía a pantalla completa en móvil. En escritorio
                  invade la columna de color por debajo del degradado, para
                  que nunca aparezca una línea vertical de separación. */}
              {diapositiva.desktopSrc && (
                <picture
                  className={[
                    "absolute inset-0 block lg:left-[22%]",
                    "transition-opacity duration-700 ease-out motion-reduce:transition-none",
                    fotosCargadas.has(idFoto) ? "opacity-100" : "opacity-0",
                  ].join(" ")}
                >
                  {diapositiva.mobileSrc && (
                    <source
                      media="(max-width: 1023px)"
                      srcSet={diapositiva.mobileSrc}
                    />
                  )}
                  <img
                    id={`imagen-carrusel-${idFoto}`}
                    src={diapositiva.desktopSrc}
                    alt=""
                    loading="eager"
                    fetchPriority={indice === indiceSeguro ? "high" : "auto"}
                    decoding="async"
                    onLoad={() => {
                      setFotosCargadas((anteriores) => {
                        if (anteriores.has(idFoto)) return anteriores;
                        const siguientes = new Set(anteriores);
                        siguientes.add(idFoto);
                        return siguientes;
                      });
                    }}
                    className="h-full w-full object-cover"
                    style={{ objectPosition: diapositiva.posicionFoto }}
                  />
                </picture>
              )}

              {/* Escritorio: color sólido hasta el 40 %, fundido hasta el 72 %. */}
              <div
                className="absolute inset-0 hidden lg:block"
                style={{ background: gradienteEscritorio }}
              />
            </div>
          );
        })}
      </div>

      {/* Móvil: oscurecimiento original para leer el título sobre la foto. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-black/20 lg:hidden"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-linear-to-b from-black/35 via-black/5 to-black/80 lg:hidden"
      />

      {/* Diseño escritorio: los tres bloques en la columna de color. */}
      <div className="relative z-20 hidden h-full w-[55%] flex-col justify-between px-10 pb-22 pt-28 lg:flex xl:w-[47%] xl:px-[5.6vw]">
        <h2 id="proximos-cultos-titulo" className="flex flex-col items-start">
          <span className="text-[clamp(2.3rem,3.4vw,4rem)] leading-none tracking-tight lg:max-xl:text-[clamp(2.5rem,3.7vw,4.35rem)]">
            Cultos de
          </span>
          <span className="mt-4 text-[clamp(3.1rem,5.2vw,7.5rem)] leading-[0.95] tracking-[-0.055em] lg:max-xl:text-[clamp(3.35rem,5.65vw,8.15rem)]">
            {mesVisible.nombre}
          </span>
        </h2>

        <div className="max-w-full py-12 [--escala-info:1.11]">
          <p className="mb-[calc(1.5rem*var(--escala-info))] text-sm font-semibold uppercase tracking-[0.22em] text-white/80 md:text-[calc(0.875rem*var(--escala-info))] lg:max-xl:text-[calc(0.95rem*var(--escala-info)*1.25)]">
            {actual.tipoCofradia}
          </p>
          <h3 className="max-w-full text-[calc(clamp(3.2rem,4.6vw,6.7rem)*var(--escala-info))] leading-[1.05] tracking-[-0.045em] wrap-anywhere lg:max-xl:text-[calc(clamp(3.5rem,5vw,7.3rem)*var(--escala-info)*1.25)]">
            {actual.nombre}
          </h3>
          {actual.subnombre && (
            <p className="mt-[calc(0.75rem*var(--escala-info))] text-[calc(clamp(1.2rem,2vw,2rem)*var(--escala-info))] leading-tight tracking-[0.02em] lg:max-xl:text-[calc(clamp(1.3rem,2.15vw,2.2rem)*var(--escala-info))]">
              {actual.subnombre}
            </p>
          )}
          <p className="mt-[calc(1.75rem*var(--escala-info))] text-[calc(clamp(1.2rem,1.75vw,1.9rem)*var(--escala-info))] leading-snug tracking-[0.015em] lg:max-xl:text-[calc(clamp(1.3rem,1.9vw,2.1rem)*var(--escala-info)*1.25)]">
            {actual.fecha}
          </p>
        </div>

        <div className="relative flex w-full max-w-105 flex-col self-start">
          <Link
            to={enlaceCulto}
            aria-label={etiquetaCulto}
            className="inline-flex min-h-16 w-full max-w-105 items-center justify-center self-start rounded-2xl border border-[#eee9dc] bg-[#eee9dc] px-6 py-4 text-center text-[1.12rem] leading-tight tracking-wide text-[#141414] transition-colors duration-200 hover:border-white hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transition-none"
          >
            Saber más
          </Link>
          {enlaceSecundario}
        </div>
      </div>

      {/* Diseño móvil anterior: título centrado arriba y CTA en la zona inferior. */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-20 flex justify-center px-5 pt-20 text-center sm:pt-24 md:pt-30 lg:hidden">
        <h2
          id="proximos-cultos-titulo-movil"
          className="flex flex-col items-center"
        >
          <span className="text-[2.5rem] leading-none tracking-[-0.03em] sm:text-[2.8rem] md:text-[3.2rem] md:max-lg:text-[3.5rem]">
            Cultos
          </span>
          <span className="mt-2 text-[clamp(3rem,11vw,6rem)] leading-[0.88] tracking-[-0.045em] sm:mt-3 md:max-lg:text-[clamp(3.25rem,12vw,6.5rem)]">
            {mesVisible.nombre}
          </span>
        </h2>
      </div>

      <div className="absolute inset-x-0 bottom-24 z-20 flex justify-center px-6 sm:bottom-14 md:bottom-16 lg:hidden">
        <div className="relative flex w-full max-w-md flex-col">
          <Link
            to={enlaceCulto}
            aria-label={etiquetaCulto}
            className="inline-flex min-h-14 w-full max-w-md items-center justify-center rounded-2xl border border-[#eee9dc] bg-[#eee9dc] px-8 py-3 text-center text-base tracking-[0.04em] text-[#080807] transition-colors duration-200 hover:border-white hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transition-none sm:min-h-16 sm:text-lg"
          >
            Saber más
          </Link>
          {enlaceSecundario}
        </div>
      </div>
    </section>
  );
}
