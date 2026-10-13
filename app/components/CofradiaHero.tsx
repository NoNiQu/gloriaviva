import type { CofradiaHeroProps } from "~/types/cofradia-hero";

export function CofradiaHero({
  nombre,
  imagenDesktop,
  imagenMovil,
}: CofradiaHeroProps) {
  // Compatible con las portadas .avif de Gloria Viva.
  const imagenDesktop2K = imagenDesktop.replace(
    /portada\.(avif|webp)$/i,
    "portada_2k.$1",
  );

  const scrollToContent = () => {
    const destino = document.getElementById("historia-cofradia");

    const reducirMovimiento = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    destino?.scrollIntoView({
      behavior: reducirMovimiento ? "auto" : "smooth",
      block: "start",
    });
  };

  return (
    <div
      id="cofradia-hero"
      className="relative h-svh min-h-190 overflow-hidden bg-black text-white md:h-screen"
    >
      {/* Imagen de fondo */}
      <picture className="absolute inset-0 block">
        {/* Móvil */}
        <source media="(max-width: 767px)" srcSet={imagenMovil} />

        {/* Escritorio: Full HD y 2K */}
        <source
          media="(min-width: 768px)"
          srcSet={
            imagenDesktop2K !== imagenDesktop
              ? `${imagenDesktop} 1920w, ${imagenDesktop2K} 2560w`
              : imagenDesktop
          }
          sizes="100vw"
        />

        <img
          src={imagenDesktop}
          alt={nombre}
          fetchPriority="high"
          loading="eager"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </picture>

      {/* Oscurecimiento */}
      <div aria-hidden="true" className="absolute inset-0 bg-black/20" />

      {/* Degradado */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-b from-black/30 via-black/5 to-black/70"
      />

      {/* Indicador de desplazamiento */}
      <button
        type="button"
        onClick={scrollToContent}
        aria-label="Explorar la cofradía"
        className="group absolute bottom-16 left-1/2 z-10 flex -translate-x-1/2 cursor-pointer flex-col items-center gap-3 text-white/80 transition-colors duration-300 hover:text-white focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:bottom-10"
      >
        <span className="whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.28em]">
          Explorar
        </span>

        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-4 w-4 transition-transform duration-300 motion-safe:group-hover:translate-y-1"
        >
          <path d="M12 17 5.5 9h13L12 17Z" fill="currentColor" />
        </svg>
      </button>
    </div>
  );
}
