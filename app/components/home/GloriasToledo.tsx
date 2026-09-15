import { Link } from "react-router";

const sections = [
  {
    title: "Cofradías",
    description:
      "Conoce las hermandades y cofradías de gloria de Toledo, su historia, sus titulares y las devociones que mantienen vivas.",
    link: "/cofradias",
    action: "Explorar cofradías",
  },
  {
    title: "Cultos",
    description:
      "Consulta novenas, triduos, funciones, fiestas y otros cultos celebrados a lo largo del año por las hermandades toledanas.",
    link: "/cultos",
    action: "Ver cultos",
  },
  {
    title: "Procesiones",
    description:
      "Descubre las procesiones y romerías que recorren Toledo durante las distintas festividades y celebraciones de gloria.",
    link: "/procesiones",
    action: "Ver procesiones",
  },
  {
    title: "Sedes canónicas",
    description:
      "Descubre los templos vinculados a las hermandades y los lugares en los que se conserva y celebra cada devoción.",
    link: "/sedescanonicas",
    action: "Ver sedes",
  },
] as const;

export function GloriasToledo() {
  return (
    <section className="bg-white text-black">
      <div className="mx-auto max-w-360 px-6 py-20 md:px-10 md:py-28 lg:px-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div>
            <h2 className="max-w-4xl text-[2.6rem] font-normal leading-[1.02] tracking-[-0.03em] md:text-6xl md:leading-[0.98]">
              Devoción que
              <br />
              permanece viva
            </h2>
          </div>

          <div className="max-w-xl self-end">
            <div className="space-y-5 text-base leading-7 text-black/75 md:text-lg md:leading-8">
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

        <div className="mt-16 grid md:mt-24 md:grid-cols-2 lg:mt-28">
          {sections.map((section, index) => (
            <Link
              key={section.link}
              to={section.link}
              className={[
                "group relative flex min-h-92 flex-col overflow-hidden p-9",
                "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black",
                "md:min-h-96 md:p-10 lg:px-12 lg:py-12",
                index % 2 === 0 ? "md:border-r md:border-black/15" : "",
                index < 2 ? "border-b border-black/15" : "",
                index >= 2 ? "border-b border-black/15 md:border-b-0" : "",
              ].join(" ")}
            >
              <span
                aria-hidden="true"
                className="absolute inset-0 origin-bottom-right scale-0 bg-black transition-transform duration-450ms ease-out group-hover:scale-100 group-focus-visible:scale-100"
              />

              <h3 className="relative z-10 text-4xl font-normal leading-none tracking-[-0.03em] transition-colors duration-500 group-hover:text-white group-focus-visible:text-white md:text-5xl">
                {section.title}
              </h3>

              <p className="relative z-10 mt-10 max-w-xl text-base leading-7 text-black/75 transition-colors duration-500 group-hover:text-white/75 group-focus-visible:text-white/75">
                {section.description}
              </p>

              <div className="relative z-10 mt-auto self-end pt-14 text-right text-sm font-medium transition-colors duration-500 group-hover:text-white group-focus-visible:text-white">
                {section.action}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
