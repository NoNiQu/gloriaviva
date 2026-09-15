import { InformationPageLayout } from "~/components/layout/InformationPageLayout";

const questions = [
  {
    question: "¿Es una página oficial?",
    answer:
      "No. Gloria Viva no representa oficialmente a ninguna hermandad, cofradía, parroquia, comunidad religiosa, institución pública ni entidad organizadora.",
  },
  {
    question: "¿Te han pagado?",
    answer: "No :)",
  },
  {
    question: "¿Cuál es el objetivo del proyecto?",
    answer:
      "Gloria Viva ha sido desarrollado como parte de un portfolio personal de diseño y desarrollo web, pero también busca convertirse en una guía útil, clara y accesible para conocer las cofradías, hermandades y devociones de gloria de Toledo capital.",
  },
  {
    question: "¿La información está siempre actualizada?",
    answer:
      "Se procura mantener actualizados los cultos, procesiones, horarios, festividades y demás datos. Sin embargo, pueden producirse cambios de última hora por motivos organizativos, meteorológicos o de otra naturaleza.",
  },
  {
    question: "¿Dónde debo comprobar los cambios de última hora?",
    answer:
      "Antes de asistir a un culto, procesión o cualquier otro acto debes consultar los canales oficiales de la hermandad, cofradía, parroquia o entidad organizadora correspondiente.",
  },
  {
    question: "¿Cómo se calculan las fechas de los cultos y festividades?",
    answer:
      "Depende de cada celebración. Algunas tienen una fecha fija y otras se determinan mediante reglas relativas a una festividad, un día de la semana o un periodo concreto. Gloria Viva calcula esas fechas según la información definida para cada culto o celebración.",
  },
  {
    question: "¿Puedo comunicar un error?",
    answer:
      "Sí. Puedes utilizar la página de contacto para comunicar datos incorrectos, cambios de horario, enlaces que no funcionen o cualquier otra incidencia.",
  },
  {
    question: "¿Puedo enviar fotografías o información?",
    answer:
      "Puedes proponer material o información mediante el correo de contacto. Su publicación dependerá de que pueda comprobarse su procedencia, exactitud y autorización de uso.",
  },
  {
    question: "¿Gloria Viva utiliza cookies?",
    answer:
      "Actualmente la web no utiliza cookies de analítica, publicidad, personalización ni seguimiento.",
  },
] as const;

export function meta() {
  return [
    {
      title: "FAQs | Gloria Viva",
    },
    {
      name: "description",
      content:
        "Respuestas a las preguntas frecuentes sobre Gloria Viva y la información publicada.",
    },
  ];
}

export default function FaqPage() {
  return (
    <InformationPageLayout title="FAQs">
      <section aria-labelledby="about-faq">
        <div className="border-b border-black/15 pb-14 lg:pb-20">
          <h2
            id="about-faq"
            className="text-center text-5xl font-normal tracking-tight text-black lg:text-10xl"
          >
            ¿Qué es Gloria Viva?
          </h2>

          <div className="mt-15 space-y-5 text-base leading-7 text-black/75 lg:mt-15 lg:text-lg lg:leading-8">
            <p>
              Gloria Viva es una guía independiente y no oficial dedicada a las
              cofradías, hermandades y devociones de gloria de Toledo capital.
            </p>

            <p>
              Gloria Viva nace como un proyecto personal con el que desarrollar
              y mostrar mis habilidades de diseño y desarrollo web dentro de mi
              portfolio. La web reúne y organiza información sobre cofradías y
              hermandades, cultos, procesiones, festividades, horarios, sedes,
              titulares y otros elementos relacionados con las glorias de
              Toledo. Y si, además, sirve de ayuda a quienes buscan consultar
              esta información de forma clara y ordenada, mucho mejor.
            </p>
          </div>
        </div>
      </section>

      <section
        aria-label="Listado de preguntas frecuentes"
        className="pt-14 lg:pt-20"
      >
        <div className="grid items-start gap-x-8 gap-y-5 md:grid-cols-2 lg:grid-cols-3">
          {questions.map((item) => (
            <details
              key={item.question}
              className="group border-b border-black/15"
            >
              <summary className="flex min-h-24 cursor-pointer list-none items-center justify-between gap-6 py-6 text-left text-base font-medium leading-6 text-black marker:hidden focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black">
                <span>{item.question}</span>

                <span
                  aria-hidden="true"
                  className="relative block h-5 w-5 shrink-0"
                >
                  <span className="absolute left-0 top-1/2 h-px w-5 -translate-y-1/2 bg-black" />

                  <span className="absolute left-1/2 top-0 h-5 w-px -translate-x-1/2 bg-black transition-all duration-200 group-open:rotate-90 group-open:opacity-0" />
                </span>
              </summary>

              <p className="pb-6 pr-8 text-sm leading-6 text-black/75">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </section>
    </InformationPageLayout>
  );
}
