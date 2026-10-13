
import type { CofradiaData } from "../types/cofradia";

const carmenPath = "/cofradias/devocion/carmen_carmelitas";

export const cofradias: CofradiaData[] = [
  {
    id: "carmen-carmelitas",
    slug: "carmen-carmelitas",

    nombre: "Nuestra Señora del Carmen",
    nombreCorto: "Carmen",
    subnombre: "Padres Carmelitas",

    sedeCanonica: "Convento del Espíritu Santo",
    tipo: "devocion-popular",

    anioFundacion: null,
    anioRefundacion: null,
    referenciaHistorica: 1932,

    historia:
      "La devoción a Nuestra Señora del Carmen está vinculada a los Carmelitas Descalzos, establecidos en Toledo en 1586. Tras abandonar su convento en 1835, la comunidad religiosa regresó en 1893. En 1932 se documenta la participación de la Venerable Orden Tercera, cofrades y devotos en los cultos dedicados a la Virgen. En 2012 se bendijo la imagen actual y se recuperó su procesión por las calles del casco histórico, después de más de cincuenta años sin celebrarse.",

    escudoUrl:
      "/escudos/desktop/devocion/carmen_carmelitas.png",

    escudoMovilUrl:
      "/escudos/movil/devocion/carmen_carmelitas.png",

    logoUrl: `${carmenPath}/logo.avif`,

    portadaDesktopUrl: `${carmenPath}/portada.avif`,
    portada2kUrl: `${carmenPath}/portada_2k.avif`,
    portadaMovilUrl: `${carmenPath}/portadamovil.avif`,

    titulares: [
      {
        id: "carmen-carmelitas-titular",
        nombre: "Nuestra Señora del Carmen",
        advocacion: "Virgen del Carmen",
        esVirgen: true,

        anio: 2012,
        siglo: "XXI",
        autor: "Antonio Bernal Redondo",
        tipoAndas: "Andas",

        datosTalla:
          "Obra del escultor cordobés Antonio Bernal Redondo, fue realizada en 2012 y bendecida el 16 de julio de ese año por el arzobispo Braulio Rodríguez Plaza. Representa a la Virgen sedente con el Niño Jesús sobre su rodilla izquierda, portando el cetro y el escapulario. La corona de plata sobredorada es obra del orfebre Emilio León.",

        fotoUrl: `${carmenPath}/titular.avif`,
        galeria: [
          `${carmenPath}/galeria1.avif`,
          `${carmenPath}/galeria2.avif`,
          `${carmenPath}/galeria3.avif`,
          `${carmenPath}/galeria4.avif`,
        ],
      },
    ],

    cultosId: "carmen-carmelitas",
    procesionId: "carmen-carmelitas-principal",

    redes: {
      web: null,
      instagram:
        "https://www.instagram.com/stma.virgendelcarmentoledo/",
      facebook: null,
      tiktok: null,
      youtube: null,
    },
  },
];
