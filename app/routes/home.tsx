import type { Route } from "./+types/home";
import { HomeHero } from "~/components/home/HomeHero";
import { ProximosCultos } from "~/components/home/ProximosCultos";
import { GloriasToledo } from "~/components/home/GloriasToledo";
import { Agradecimientos } from "~/components/home/Agradecimiento";

export function meta({}: Route.MetaArgs) {
  return [
    {
      title: "Gloria Viva",
    },
    {
      name: "description",
      content:
        "Guía independiente y no oficial de las cofradías, hermandades y devociones de gloria de Toledo.",
    },
  ];
}

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <HomeHero />

      <ProximosCultos />

      <GloriasToledo />

      <Agradecimientos />

      <section
        aria-label="Gloria Viva"
        className="bg-[#263D63] px-6 pb-16 pt-10 text-white md:px-10 md:pb-20 lg:px-30 lg:pb-24"
      >
        <div className="mx-auto max-w-360 border-t border-white/15 pt-14 md:pt-18">
          <p className="mx-auto max-w-5xl text-center text-[2.6rem] font-normal leading-[1.02] tracking-[-0.03em] md:text-6xl md:leading-[0.98]">
            Entre barrios y devociones,
            <br />
            Toledo mantiene su gloria viva.
          </p>
        </div>
      </section>
    </main>
  );
}
