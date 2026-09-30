import { Link } from "react-router";

export function GloriasToledo() {
  return (
    <section className="bg-white text-black">
      <div className="mx-auto max-w-360 px-6 pt-20 pb-16 md:px-10 md:py-28 lg:flex lg:min-h-svh lg:flex-col lg:justify-center lg:px-10 lg:py-18">
        {/* Introducción */}
        <div className="grid gap-16 md:gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 lg:px-10">
          <div>
            <h2 className="max-w-4xl text-[2.6rem] font-normal leading-[1.02] tracking-[-0.03em] md:text-6xl md:leading-[0.98]">
              Devoción que
              <br />
              permanece viva
            </h2>
          </div>

          <div className="max-w-xl self-end">
            <div className="space-y-5 text-base leading-7 tracking-wider text-black/75 md:text-lg md:leading-8">
              <p>
                Las glorias de Toledo acompañan el calendario de la ciudad
                durante todo el año. Barrios, parroquias y comunidades mantienen
                vivas devociones transmitidas de generación en generación.
              </p>

              <p>
                Romerías, cultos y procesiones llenan de nuevo las calles,
                mostrando otra forma de descubrir Toledo a través de su
                tradición, su historia y su religiosidad popular.
              </p>
            </div>
          </div>
        </div>

        {/* Explorar */}
        <div className="mt-16 grid gap-16 md:mt-24 md:grid-cols-3 md:gap-3 lg:mt-28">
          <Link
            to="/cofradias"
            className="group relative flex min-h-92 flex-col overflow-hidden rounded-2xl p-9 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black md:min-h-80 md:p-9 lg:px-8 lg:py-12"
          >
            <span
              aria-hidden="true"
              className="absolute inset-0 origin-bottom-right scale-0 bg-black transition-transform duration-450ms ease-out group-hover:scale-100 group-focus-visible:scale-100"
            />

            <span
              aria-hidden="true"
              className="absolute bottom-0 left-1/2 z-20 h-px w-[70%] -translate-x-1/2 bg-black/15 transition-colors duration-500 group-hover:bg-white/15 group-focus-visible:bg-white/15 md:bottom-auto md:left-auto md:right-0 md:top-1/2 md:h-[70%] md:w-px md:translate-x-0 md:-translate-y-1/2"
            />

            <h3 className="relative z-10 text-4xl font-normal leading-none tracking-[-0.03em] transition-colors duration-500 group-hover:text-white group-focus-visible:text-white md:text-5xl xl:whitespace-nowrap">
              Cofradías
            </h3>

            <p className="relative z-10 mt-10 text-base leading-7 tracking-wider text-black/75 transition-colors duration-500 group-hover:text-white/75 group-focus-visible:text-white/75 md:mt-8">
              Conoce las hermandades y cofradías de gloria de Toledo, su
              historia, sus titulares y las devociones que mantienen vivas.
            </p>

            <div className="relative z-10 mt-auto self-end pt-14 text-right text-sm tracking-wider transition-colors duration-500 group-hover:text-white group-focus-visible:text-white md:pt-10">
              Explorar cofradías
            </div>
          </Link>

          <Link
            to="/cultos"
            className="group relative flex min-h-92 flex-col overflow-hidden rounded-2xl p-9 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black md:min-h-80 md:p-9 lg:px-8 lg:py-12"
          >
            <span
              aria-hidden="true"
              className="absolute inset-0 origin-bottom-right scale-0 bg-black transition-transform duration-450ms ease-out group-hover:scale-100 group-focus-visible:scale-100"
            />

            <span
              aria-hidden="true"
              className="absolute bottom-0 left-1/2 z-20 h-px w-[70%] -translate-x-1/2 bg-black/15 transition-colors duration-500 group-hover:bg-white/15 group-focus-visible:bg-white/15 md:bottom-auto md:left-auto md:right-0 md:top-1/2 md:h-[70%] md:w-px md:translate-x-0 md:-translate-y-1/2"
            />

            <h3 className="relative z-10 text-4xl font-normal leading-none tracking-[-0.03em] transition-colors duration-500 group-hover:text-white group-focus-visible:text-white md:text-5xl xl:whitespace-nowrap">
              Cultos
            </h3>

            <p className="relative z-10 mt-10 text-base leading-7 tracking-wider text-black/75 transition-colors duration-500 group-hover:text-white/75 group-focus-visible:text-white/75 md:mt-8">
              Consulta novenas, triduos, funciones, fiestas y otros cultos
              celebrados a lo largo del año por las hermandades de gloria de
              Toledo.
            </p>

            <div className="relative z-10 mt-auto self-end pt-14 text-right text-sm tracking-wider transition-colors duration-500 group-hover:text-white group-focus-visible:text-white md:pt-10">
              Ver cultos
            </div>
          </Link>

          <Link
            to="/sedescanonicas"
            className="group relative flex min-h-92 flex-col overflow-hidden rounded-2xl p-9 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black md:min-h-80 md:p-9 lg:px-8 lg:py-12"
          >
            <span
              aria-hidden="true"
              className="absolute inset-0 origin-bottom-right scale-0 bg-black transition-transform duration-450ms ease-out group-hover:scale-100 group-focus-visible:scale-100"
            />

            <h3 className="relative z-10 text-4xl font-normal leading-none tracking-[-0.03em] transition-colors duration-500 group-hover:text-white group-focus-visible:text-white md:text-5xl xl:whitespace-nowrap">
              Sedes canónicas
            </h3>

            <p className="relative z-10 mt-10 text-base leading-7 tracking-wider text-black/75 transition-colors duration-500 group-hover:text-white/75 group-focus-visible:text-white/75 md:mt-8">
              Descubre los templos vinculados a las hermandades y los lugares en
              los que se conserva y celebra cada devoción.
            </p>

            <div className="relative z-10 mt-auto self-end pt-14 text-right text-sm tracking-wider transition-colors duration-500 group-hover:text-white group-focus-visible:text-white md:pt-10">
              Ver sedes
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
