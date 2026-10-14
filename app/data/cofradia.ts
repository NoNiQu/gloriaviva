
import type { CofradiaData } from "../types/cofradia";

const carmenPath = "/cofradias/devocion/carmen_carmelitas";

const guiaPath = "/cofradias/gloria/guia";
const estrellaPath = "/cofradias/gloria/estrella";
const alegriaPath = "/cofradias/gloria/alegria";

const doloresPath = "/cofradias/penitencia/dolores";
const misericordiaPath = "/cofradias/penitencia/misericordia";
const angustiasPath = "/cofradias/penitencia/angustias";

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

  /* ==========================================
     NUESTRA SEÑORA DE LA ALEGRÍA
  ========================================== */

  {
    id: "alegria",
    slug: "alegria",

    nombre: "Nuestra Señora de la Alegría",
    nombreCorto: "Alegría",

    sedeCanonica: "Parroquia de San Andrés",
    tipo: "dos-tipos",

    anioFundacion: 1747,
    anioRefundacion: null,
    referenciaHistorica: null,

    historia:
      "La Hermandad de Nuestra Señora de la Alegría nació en la parroquia de San Cristóbal y sus orígenes se sitúan en el siglo XVIII. Tras distintos cambios de sede, a finales del siglo XIX quedó establecida en la iglesia de San Andrés. En 1982 se incorporó a la Semana Santa de Toledo organizando la procesión del encuentro entre Jesús Resucitado y su Madre. Desde entonces ambas imágenes recorren itinerarios distintos antes de reunirse en la Plaza del Ayuntamiento y regresar juntas a San Andrés.",

    escudoUrl: "/escudos/desktop/gloria/alegria.png",
    escudoMovilUrl:"/escudos/movil/gloria/alegria.png",
    logoUrl: `${alegriaPath}/logo.avif`,

    portadaDesktopUrl: `${alegriaPath}/portada.avif`,
    portada2kUrl: `${alegriaPath}/portada_2k.avif`,
    portadaMovilUrl: `${alegriaPath}/portadamovil.avif`,

    titulares: [
      {
        id: "alegria-titular",
        nombre: "Nuestra Señora de la Alegría",
        advocacion: "Virgen de la Alegría",
        esVirgen: true,

        anio: null,
        siglo: "XVII",
        autor: "Anónimo",
        tipoAndas: "Andas",

        datosTalla:
          "Imagen mariana tallada y policromada, de autoría anónima, fechada en el siglo XVII. Representa a la Virgen María encinta y conserva una singular iconografía vinculada a la Expectación. Porta un Niño Jesús policromado de época posterior, fechado en el siglo XVIII, y procesiona sobre andas de madera tallada.",
        fotoUrl: `${alegriaPath}/titular.avif`,
        galeria: [
          `${alegriaPath}/galeria1.avif`,
          `${alegriaPath}/galeria2.avif`,
          `${alegriaPath}/galeria3.avif`,
          `${alegriaPath}/galeria4.avif`,
        ],
      },
    ],

    cultosId: "alegria",
    procesionId: "alegria-principal",

    redes: {
      web: null,
      instagram: null,
      facebook: null,
      tiktok: null,
      youtube: null,
    },
  },

  /* ==========================================
     NUESTRA SEÑORA DE LOS DOLORES
     HERMANDAD DEL SANTO ENCUENTRO
  ========================================== */

  {
    id: "dolores",
    slug: "dolores",

    nombre: "Nuestra Señora de los Dolores",
    nombreCorto: "Dolores",

    sedeCanonica: "Parroquia de Santiago el Mayor",
    tipo: "penitencia",

    anioFundacion: 1731,
    anioRefundacion: null,
    referenciaHistorica: null,

    historia:
      "La Hermandad y Esclavitud fue fundada en 1731 en el convento de los Trinitarios Descalzos. Tras el incendio del edificio durante la Guerra de la Independencia, en 1813 las imágenes fueron trasladadas y la corporación quedó vinculada a la parroquia de San Isidoro. Desde 1842 se estableció en Santiago el Mayor. En 1953 comenzó la procesión conocida como Santo Encuentro, concebida como un Vía Crucis y convertida con el tiempo en una de las citas características de la Semana Santa de Toledo.",

    escudoUrl: `/escudos/desktop/penitencia/santo_encuentro.png`,
    escudoMovilUrl: `/escudos/movil/penitencia/santo_encuentro.png`,
    logoUrl: `${doloresPath}/logo.avif`,

    portadaDesktopUrl: `${doloresPath}/portada.avif`,
    portada2kUrl: `${doloresPath}/portada_2k.avif`,
    portadaMovilUrl: `${doloresPath}/portadamovil.avif`,

    titulares: [
      {
        id: "dolores-titular",
        nombre: "Nuestra Señora de los Dolores",
        advocacion: "Virgen de los Dolores",
        esVirgen: true,

        anio: 2023,
        siglo: "XXI",
        autor: "Juan Carlos Arango Palacios",
        tipoAndas: "Andas",

        datosTalla:
          "Virgen dolorosa de candelero para vestir, tallada en madera de cedro y policromada al óleo por Juan Carlos Arango Palacios. La imagen, de 160 centímetros de altura y brazos articulados, fue incorporada como titular de la Hermandad en 2023.",

        fotoUrl: `${doloresPath}/titular.avif`,
        galeria: [
          `${doloresPath}/galeria1.avif`,
          `${doloresPath}/galeria2.avif`,
          `${doloresPath}/galeria3.avif`,
          `${doloresPath}/galeria4.avif`,
        ],
      },
    ],

    cultosId: "dolores",
    procesionId: "dolores-rosario-matutino",

    redes: {
      web: null,
      instagram: null,
      facebook: null,
      tiktok: null,
      youtube: null,
    },
  },

  /* ==========================================
     SANTÍSIMO CRISTO DE LA MISERICORDIA
  ========================================== */

  {
    id: "misericordia",
    slug: "misericordia",

    nombre: "Santísimo Cristo de la Misericordia",
    nombreCorto: "Misericordia",

    sedeCanonica: "Parroquia de Santa Leocadia",
    tipo: "penitencia",

    anioFundacion: null,
    anioRefundacion: 1989,
    referenciaHistorica: null,

    historia:
      "La Hermandad tiene sus orígenes en el siglo XVII y sus primeras Ordenanzas conocidas fueron aprobadas en 1656. En 1733 una bula del papa Clemente XII permitió también la incorporación de mujeres. Tras desaparecer a comienzos del siglo XX, fue recuperada en 1989 por un grupo de jóvenes y sus nuevos Estatutos se aprobaron ese mismo año. El Cristo de la Misericordia volvió a procesionar en 1990 y María Santísima de la Caridad se incorporó al cortejo en 1998, quedando la corporación vinculada a Santa Leocadia.",

    escudoUrl: `/escudos/desktop/penitencia/misericordia.png`,
    escudoMovilUrl: `/escudos/movil/penitencia/misericordia.png`,
    logoUrl: `${misericordiaPath}/logo.avif`,

    portadaDesktopUrl: `${misericordiaPath}/portada.avif`,
    portada2kUrl: `${misericordiaPath}/portada_2k.avif`,
    portadaMovilUrl: `${misericordiaPath}/portadamovil.avif`,

    titulares: [
      {
        id: "misericordia-titular",
        nombre: "Santísimo Cristo de la Misericordia",
        advocacion: "Cristo de la Misericordia",
        esVirgen: false,

        anio: null,
        siglo: "XVII",
        autor: "Anónimo",
        tipoAndas: "Tumbado",

        datosTalla:
          "Crucificado anónimo de escuela castellana del siglo XVII, de tamaño algo menor al natural y sujeto a la Cruz mediante cuatro clavos. Procesiona junto a María Santísima de la Caridad en un único paso de metal repujado.",

        fotoUrl: `${misericordiaPath}/titular.avif`,
        galeria: [
          `${misericordiaPath}/galeria1.avif`,
          `${misericordiaPath}/galeria2.avif`,
          `${misericordiaPath}/galeria3.avif`,
          `${misericordiaPath}/galeria4.avif`,
        ],
      },
    ],

    cultosId: "misericordia",
    procesionId: "misericordia-principal",

    redes: {
      web: null,
      instagram: null,
      facebook: null,
      tiktok: null,
      youtube: null,
    },
  },

  /* ==========================================
     NUESTRA SEÑORA DE LAS ANGUSTIAS
     HERMANDAD DE LAS ANGUSTIAS Y BORRIQUITA
  ========================================== */

  {
    id: "angustias",
    slug: "angustias",

    nombre: "Nuestra Señora de las Angustias",
    nombreCorto: "Angustias",

    sedeCanonica: "Parroquia Mozárabe de Santas Justa y Rufina",
    tipo: "penitencia",

    anioFundacion: null,
    anioRefundacion: 1989,
    referenciaHistorica: null,

    historia:
      "Las referencias históricas conservadas sitúan la fundación de la Cofradía de la Virgen de las Angustias en 1599, cuando tenía su sede en el Hospital de San Lázaro, y durante el reinado de Felipe II recibió el título de Real. Tras una larga etapa de menor actividad, un grupo de devotos reorganizó la Hermandad en 1988 y sus Estatutos fueron aprobados en 1989. En 2008 incorporó como titular a Cristo Rey en su entrada triunfal en Jerusalén, ampliando su presencia al Domingo de Ramos.",

    escudoUrl: "/escudos/desktop/penitencia/angustias.png",
    escudoMovilUrl: "/escudos/movil/penitencia/angustias.png",
    logoUrl: `${angustiasPath}/logo.avif`,

    portadaDesktopUrl: `${angustiasPath}/portada.avif`,
    portada2kUrl: `${angustiasPath}/portada_2k.avif`,
    portadaMovilUrl: `${angustiasPath}/portadamovil.avif`,

    titulares: [
      {
        id: "angustias-titular",
        nombre: "Nuestra Madre María Inmaculada en su Mayor Angustia y Piedad",
        advocacion: "Nuestra Señora de las Angustias",
        esVirgen: true,

        anio: 2009,
        siglo: "XXI",
        autor: "Antonio José Martínez Rodríguez",
        tipoAndas: "Carroza",

        datosTalla:
          "Conjunto de la Piedad presidido por la Virgen realizada en 2009 por Antonio José Martínez Rodríguez. Acoge sobre su regazo un antiguo Cristo yacente anónimo del siglo XVII. Procesiona sobre una carroza revestida de metal repujado y plateado, decorada con los apóstoles y escenas del Vía Crucis.",

        fotoUrl: `${angustiasPath}/titular.avif`,
        galeria: [
          `${angustiasPath}/galeria1.avif`,
          `${angustiasPath}/galeria2.avif`,
          `${angustiasPath}/galeria3.avif`,
          `${angustiasPath}/galeria4.avif`,
        ],
      },
    ],

    cultosId: "angustias",
    procesionId: "angustias-principal",

    redes: {
      web: null,
      instagram: null,
      facebook: null,
      tiktok: null,
      youtube: null,
    },
  },
];
