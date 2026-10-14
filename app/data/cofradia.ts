
import type { CofradiaData } from "../types/cofradia";

const carmenPath = "/cofradias/devocion/carmen_carmelitas";
const guiaPath = "/cofradias/gloria/guia";
const estrellaPath = "/cofradias/gloria/estrella";

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

  /* ==========================================
     NUESTRA SEÑORA DE LA GUÍA
     HERMANDAD DE GLORIA
  ========================================== */

  {
    id: "guia",
    slug: "guia",

    nombre: "Nuestra Señora de la Guía",
    nombreCorto: "Guía",

    sedeCanonica: "Ermita de Nuestra Señora de la Guía",
    tipo: "gloria",

    anioFundacion: null,
    anioRefundacion: null,
    referenciaHistorica: 1598,

    historia:
      "La devoción a Nuestra Señora de la Guía se remonta a la antigua ermita de la Natividad, reedificada en 1598 gracias al impulso de Diego Rodríguez y de sus cofrades. Tras la destrucción del santuario durante la Guerra de la Independencia, la cofradía contribuyó a su reconstrucción, culminada en 1823. Vinculada al barrio de Santa Bárbara, la Real Hermandad mantiene la tradicional romería del 12 de octubre en los terrenos de la Academia de Infantería.",

    // Pendiente de incorporar las imágenes.
    escudoUrl: "/escudos/desktop/gloria/guia.png",
    escudoMovilUrl: "/escudos/movil/gloria/guia.png",
    logoUrl: `${guiaPath}/logo.avif`,

    portadaDesktopUrl: `${guiaPath}/portada.avif`,
    portada2kUrl: `${guiaPath}/portada_2k.avif`,
    portadaMovilUrl: `${guiaPath}/portadamovil.avif`,

    titulares: [
      {
        id: "guia-titular",
        nombre: "Nuestra Señora de la Guía",
        advocacion: "Virgen de la Guía",
        esVirgen: true,

        anio: null,
        siglo: "XIX",
        autor: "Anonimo",
        tipoAndas: "Andas",

        datosTalla:
          "La imagen actual es fruto de distintas reconstrucciones. La talla primitiva, atribuida a Carlos Tejado Venero a finales del siglo XVI, fue destruida durante la Guerra de la Independencia. En 1823 el marqués de Malpica costeó una nueva imagen, a la que, según la tradición, se incorporó el Niño Jesús anterior. La Virgen sufrió nuevos daños durante la Guerra Civil, conservándose al parecer la cabeza. El Niño porta una corneja con un farolillo, símbolo de la leyenda de la advocación.",

        fotoUrl: `${guiaPath}/titular.avif`,
        galeria: [
          `${guiaPath}/galeria1.avif`,
          `${guiaPath}/galeria2.avif`,
          `${guiaPath}/galeria3.avif`,
          `${guiaPath}/galeria4.avif`,
        ],
      },
    ],

    cultosId: "guia",
    procesionId: "guia-principal",

    redes: {
      web: null,
      instagram: null,
      facebook: null,
      tiktok: null,
      youtube: null,
    },
  },

  /* ==========================================
     NUESTRA SEÑORA DE LA ESTRELLA
     HERMANDAD DE GLORIA
  ========================================== */

  {
    id: "estrella",
    slug: "estrella",

    nombre: "Nuestra Señora de la Estrella",
    nombreCorto: "Estrella",

    sedeCanonica: "Ermita de Nuestra Señora de la Estrella",
    tipo: "gloria",

    anioFundacion: null,
    anioRefundacion: null,
    referenciaHistorica: 1498,

    historia:
      "La hermandad, vinculada al barrio toledano de Santiago del Arrabal, cuenta con referencias documentales desde 1498; sus constituciones fueron aprobadas en 1555. La ermita actual se construyó en 1611 según trazas de Juan Bautista Monegro, y la corporación recibió el título de Real en 1868. En 2015, Nuestra Señora de la Estrella fue coronada canónicamente en la Catedral Primada.",

    // Imágenes pendientes de preparar y confirmar.
    escudoUrl: "/escudos/desktop/gloria/estrella.png",
    escudoMovilUrl: "/escudos/movil/gloria/estrella.png",
    logoUrl: `${estrellaPath}/logo.avif`,

    portadaDesktopUrl: `${estrellaPath}/portada.avif`,
    portada2kUrl: `${estrellaPath}/portada_2k.avif`,
    portadaMovilUrl: `${estrellaPath}/portadamovil.avif`,

    titulares: [
      {
        id: "estrella-titular",
        nombre: "Nuestra Señora de la Estrella",
        advocacion: "Virgen de la Estrella",
        esVirgen: true,

        anio: null,
        siglo: null,
        autor: "Anónimo",
        tipoAndas: "Andas",

        datosTalla:
          "Imagen de vestir de 157 cm, con cabeza y manos talladas y brazos articulados. Sostiene al Niño Jesús, de 47,5 cm, que bendice y porta el orbe. El conjunto incluye una peana de plata realizada en 1823 por Tomás Díaz. Un documento acredita una intervención en el rostro y los ojos en 1808, aunque se desconoce el autor de la imagen original.",

        fotoUrl: `${estrellaPath}/titular.avif`,
        galeria: [
          `${estrellaPath}/galeria1.avif`,
          `${estrellaPath}/galeria2.avif`,
          `${estrellaPath}/galeria3.avif`,
          `${estrellaPath}/galeria4.avif`,
        ],
      },
    ],

    cultosId: "estrella",
    procesionId: "estrella-principal",

    redes: {
      web: "https://www.hermandadestrella.es",
      instagram: "https://www.instagram.com/hermandadestrella/",
      facebook: "https://www.facebook.com/hermandadestrellatoledo",
      tiktok: null,
      youtube: null,
    },

    fotosCedidas: true,
    fotoQuien: "Hermandad de Nuestra Señora de la Estrella",
    fotosLogo: `${estrellaPath}/fotoslogo.png`,

  },
];
