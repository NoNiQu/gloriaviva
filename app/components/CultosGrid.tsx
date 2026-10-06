import { CultoCard } from "./CultoCard";
import type { CultoCardData } from "../types/culto_card";

type CultosGridProps = {
  cards: CultoCardData[];
  priorizarPrimera?: boolean;
};

export function CultosGrid({
  cards,
  priorizarPrimera = true,
}: CultosGridProps) {
  /*
   * Ordenamos primero por día.
   *
   * Si dos cultos empiezan el mismo día, mantenemos el orden
   * original de cultos_cards.ts.
   *
   * Esto permite decidir manualmente casos como:
   * Salud → Guadalupe.
   */
  const cardsOrdenadas = cards
    .map((card, index) => ({
      card,
      ordenOriginal: index,
    }))
    .sort(
      (a, b) =>
        a.card.diaInicio - b.card.diaInicio ||
        a.ordenOriginal - b.ordenOriginal,
    )
    .map(({ card }) => card);

  const totalCards = cardsOrdenadas.length;

  const ultimaFilaTieneUnaTablet = totalCards % 2 === 1;

  const ultimaFilaTieneUnaDesktop = totalCards % 3 === 1;
  const ultimaFilaTieneDosDesktop = totalCards % 3 === 2;

  return (
    <section
      aria-label="Cultos del mes"
      className="
        grid
        grid-cols-1
        gap-8
        sm:grid-cols-2
        xl:grid-cols-6
      "
    >
      {cardsOrdenadas.map((card, index) => {
        const esUltimaCard = index === totalCards - 1;

        const esPrimeraDeLasDosUltimas =
          ultimaFilaTieneDosDesktop && index === totalCards - 2;

        const esSegundaDeLasDosUltimas =
          ultimaFilaTieneDosDesktop && index === totalCards - 1;

        return (
          <div
            key={card.id}
            className={[
              "sm:col-span-1 xl:col-span-2",

              /*
               * TABLET
               * Si queda una sola tarjeta en la última fila,
               * ocupa las dos columnas pero mantiene el ancho
               * visual de una tarjeta y queda centrada.
               */
              ultimaFilaTieneUnaTablet && esUltimaCard
                ? "sm:col-span-2 sm:mx-auto sm:w-[calc(50%-1rem)]"
                : "",

              /*
               * DESKTOP
               * Si queda una sola tarjeta, se coloca
               * en las dos columnas centrales.
               */
              ultimaFilaTieneUnaDesktop && esUltimaCard
                ? "xl:col-start-3 xl:col-span-2 xl:mx-0 xl:w-auto"
                : "",

              /*
               * DESKTOP
               * Si quedan dos tarjetas, centramos
               * ambas en la última fila.
               */
              esPrimeraDeLasDosUltimas
                ? "xl:col-start-2 xl:mx-0 xl:w-auto"
                : "",

              esSegundaDeLasDosUltimas
                ? "xl:col-start-4 xl:mx-0 xl:w-auto"
                : "",
            ].join(" ")}
          >
            <CultoCard
              card={card}
              prioridad={priorizarPrimera && index === 0}
            />
          </div>
        );
      })}
    </section>
  );
}
