import { useEffect, useState } from "react";
import { Link } from "react-router";

type CarouselImage = {
  desktopSrc: string;
  mobileSrc: string;
};

const septemberDesktopModules = import.meta.glob(
  "/app/assets/carrusel/septiembre/desktop/*.webp",
  {
    eager: true,
    query: "?url",
    import: "default",
  },
) as Record<string, string>;

const septemberMobileModules = import.meta.glob(
  "/app/assets/carrusel/septiembre/movil/*.webp",
  {
    eager: true,
    query: "?url",
    import: "default",
  },
) as Record<string, string>;

const getFileName = (path: string) => {
  return path.split("/").pop() ?? path;
};

const mobileImagesByFileName = new Map(
  Object.entries(septemberMobileModules).map(([path, src]) => [
    getFileName(path),
    src,
  ]),
);

const SEPTEMBER_IMAGES: CarouselImage[] = Object.entries(
  septemberDesktopModules,
)
  .sort(([pathA], [pathB]) =>
    pathA.localeCompare(pathB, undefined, {
      numeric: true,
      sensitivity: "base",
    }),
  )
  .map(([path, desktopSrc]) => {
    const fileName = getFileName(path);

    return {
      desktopSrc,
      mobileSrc: mobileImagesByFileName.get(fileName) ?? desktopSrc,
    };
  });

const SLIDE_DURATION = 6500;

export function ProximosCultos() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updateMotionPreference = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };

    updateMotionPreference();

    mediaQuery.addEventListener("change", updateMotionPreference);

    return () => {
      mediaQuery.removeEventListener("change", updateMotionPreference);
    };
  }, []);

  useEffect(() => {
    if (prefersReducedMotion || SEPTEMBER_IMAGES.length <= 1) {
      return;
    }

    const interval = window.setInterval(() => {
      setCurrentIndex((current) => (current + 1) % SEPTEMBER_IMAGES.length);
    }, SLIDE_DURATION);

    return () => {
      window.clearInterval(interval);
    };
  }, [prefersReducedMotion]);

  return (
    <section
      aria-labelledby="cultos-septiembre-title"
      className="relative h-svh min-h-190 overflow-hidden bg-black text-white"
    >
      {/* Fotografías */}
      <div className="absolute inset-0" aria-hidden="true">
        {SEPTEMBER_IMAGES.map(({ desktopSrc, mobileSrc }, index) => (
          <picture
            key={desktopSrc}
            className={[
              "absolute inset-0 block h-full w-full",
              "transition-opacity duration-1000 ease-in-out",
              "motion-reduce:transition-none",
              index === currentIndex ? "opacity-100" : "opacity-0",
            ].join(" ")}
          >
            <source media="(max-width: 767px)" srcSet={mobileSrc} />

            <img
              src={desktopSrc}
              alt=""
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
              className="h-full w-full object-cover"
            />
          </picture>
        ))}
      </div>

      {/* Oscurecimiento general */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-black/20"
      />

      {/* Gradiente */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-linear-to-b from-black/35 via-black/5 to-black/80"
      />

      {/* Título */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 flex justify-center px-5 pt-20 text-center sm:px-6 sm:pt-24 md:pt-30 lg:pt-28 xl:pt-30">
        <h2 id="cultos-septiembre-title" className="flex flex-col items-center">
          <span className="text-[2.5rem] leading-none tracking-[-0.03em] sm:text-[2.8rem] md:text-[3.2rem] lg:text-[2.9rem] xl:text-[3.15rem]">
            Cultos
          </span>

          <span
            className="
              mt-2
              text-[3.4rem]
              leading-[0.88]
              tracking-[-0.045em]
              sm:mt-3
              sm:text-[4.75rem]
              md:text-[5.8rem]
              lg:mt-2
              lg:text-[5.75rem]
              lg:leading-[0.9]
              lg:tracking-[-0.04em]
              xl:text-[6.5rem]
              2xl:text-[7rem]
            "
          >
            SEPTIEMBRE
          </span>
        </h2>
      </div>

      {/* Botones inferiores */}
      <div className="absolute inset-x-0 bottom-24 z-10 flex justify-center px-6 sm:bottom-14 md:bottom-16">
        <div className="flex w-full max-w-2xl flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row sm:gap-8 lg:gap-10">
          <Link
            to="/cultos/septiembre"
            className="
              inline-flex
              min-h-14
              w-full
              items-center
              justify-center
              rounded-2xl
              border
              border-white
              bg-white
              px-7
              py-3
              text-base
              tracking-[0.08em]
              text-black
              transition-colors
              duration-200
              hover:bg-white
              hover:text-black
              focus-visible:outline-2
              focus-visible:outline-offset-4
              focus-visible:outline-white
              motion-reduce:transition-none
              sm:w-auto
              sm:px-8
              sm:text-base
              sm:tracking-[0.04em]
              lg:min-h-16
              lg:min-w-74
              lg:border-[#eee9dc]
              lg:bg-[#eee9dc]
              lg:px-10
              lg:py-4
              lg:text-[1.18rem]
              lg:leading-none
              lg:tracking-wide
              lg:text-[#080807]
              lg:hover:border-[#d8d2c4]
              lg:hover:bg-[#d8d2c4]
              lg:hover:text-[#080807]
              xl:min-w-76
              xl:text-[1.22rem]
            "
          >
            CULTOS DE SEPTIEMBRE
          </Link>

          <Link
            to="/cultos/todos"
            className="
              hidden
              sm:inline-flex
              min-h-14
              w-full
              items-center
              justify-center
              rounded-2xl
              border
              border-white
              bg-white
              px-7
              py-3
              text-sm
              tracking-[0.04em]
              text-black
              transition-colors
              duration-200
              hover:bg-white
              hover:text-black
              focus-visible:outline-2
              focus-visible:outline-offset-4
              focus-visible:outline-white
              motion-reduce:transition-none
              sm:w-auto
              sm:px-8
              sm:text-base
              lg:min-h-16
              lg:min-w-74
              lg:border-[#eee9dc]
              lg:bg-[#eee9dc]
              lg:px-10
              lg:py-4
              lg:text-[1.18rem]
              lg:leading-none
              lg:tracking-wide
              lg:text-[#080807]
              lg:hover:border-[#d8d2c4]
              lg:hover:bg-[#d8d2c4]
              lg:hover:text-[#080807]
              xl:min-w-76
              xl:text-[1.22rem]
            "
          >
            TODOS LOS CULTOS
          </Link>
        </div>
      </div>
    </section>
  );
}
