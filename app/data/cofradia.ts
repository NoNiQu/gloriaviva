
import type { CofradiaData } from "../types/cofradia";

const carmenPath = "/cofradias/devocion/carmen_carmelitas";

const guiaPath = "/cofradias/gloria/guia";
const estrellaPath = "/cofradias/gloria/estrella";
const alegriaPath = "/cofradias/gloria/alegria";
const esperanzaPath = "/cofradias/gloria/esperanza";
const pazPath = "/cofradias/gloria/paz";
const carmenPathGloria = "/cofradias/gloria/carmen";

const doloresPath = "/cofradias/penitencia/dolores";
const misericordiaPath = "/cofradias/penitencia/misericordia";
const angustiasPath = "/cofradias/penitencia/angustias";
const salvadorPath = "/cofradias/penitencia/salvador";
const amparoPath = "/cofradias/penitencia/amparo";

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
      X: null,
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
      X: null,
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
      X: null,
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
      instagram: "https://www.instagram.com/virgendelaalegriatoledo/",
      facebook: "https://www.facebook.com/virgendelaalegria.toledo.7/",
      X: null,
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
      web: "https://santoencuentro.es",
      instagram: "https://www.instagram.com/santo_encuentro/",
      facebook: null,
      X: "https://x.com/santo_encuentro",
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
      instagram: "https://www.instagram.com/misericordiacaridad.cof/",
      facebook: null,
      X: null,
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
        tipoAndas: "Costal",

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
      instagram: "https://www.instagram.com/h.borriquita_angustias_toledo/",
      facebook: "https://www.facebook.com/p/Hermandad-de-las-Angustias-y-Borriquita-de-Toledo-100087111602198/",
      X: "https://x.com/AngustiasToledo",
      tiktok: null,
      youtube: null,
    },
  },

  
  /* ==========================================
     NUESTRA SEÑORA DE LA ESPERANZA
     COFRADÍA DE GLORIA
  ========================================== */

  {
    id: "esperanza",
    slug: "esperanza",

    nombre: "Nuestra Señora de la Esperanza",
    nombreCorto: "Esperanza",
    subnombre: "La Morenita de San Cipriano",

    sedeCanonica: "Iglesia de San Cipriano",
    tipo: "gloria",

    anioFundacion: null,
    anioRefundacion: null,
    referenciaHistorica: 1200,

    historia:
      "La Cofradía de Nuestra Señora de la Esperanza, constituida en el siglo XVII, custodia una antigua talla románica venerada anteriormente como Nuestra Señora del Destierro. Según la tradición, la Procesión del Voto recuerda el final de una epidemia hacia el año 1200. En 1676 aparece documentada la advocación de la Esperanza. Desde San Cipriano mantiene las procesiones del Voto y de la Octava. La Virgen recibió la coronación canónica el 8 de junio de 1952 en la plaza de Zocodover.",

    escudoUrl: "/escudos/desktop/gloria/esperanza.png",
    escudoMovilUrl: "/escudos/movil/gloria/esperanza.png",

    logoUrl: `${esperanzaPath}/logo.avif`,

    portadaDesktopUrl: `${esperanzaPath}/portada.avif`,
    portada2kUrl: `${esperanzaPath}/portada_2k.avif`,
    portadaMovilUrl: `${esperanzaPath}/portadamovil.avif`,

    titulares: [
      {
        id: "esperanza-titular",
        nombre: "Nuestra Señora de la Esperanza",
        advocacion: "Virgen de la Esperanza",
        esVirgen: true,

        anio: null,
        siglo: "XI",
        autor: "Anónimo",
        tipoAndas: "Andas",

        datosTalla:
          "Talla románica anónima del siglo XI, de unos 50 centímetros de altura, que representa a la Virgen entronizada con el Niño Jesús. Entre finales del siglo XVI y comienzos del XVII fue adaptada como imagen de vestir, desplazando al Niño a su costado izquierdo. Restaurada en 2007, recuperó su policromía medieval. Se muestra sin mantos de noviembre a abril y revestida de mayo a octubre.",

        fotoUrl: `${esperanzaPath}/titular.avif`,

        galeria: [
          `${esperanzaPath}/galeria1.avif`,
          `${esperanzaPath}/galeria2.avif`,
          `${esperanzaPath}/galeria3.avif`,
          `${esperanzaPath}/galeria4.avif`,
        ],
      },
    ],

    cultosId: "esperanza",
    procesionId: "esperanza-voto",

    redes: {
      web: "https://virgendelaesperanzatoledo.es",
      instagram: "https://www.instagram.com/cofradiaesperanzatoledo/",
      facebook:
        "https://www.facebook.com/people/Virgen-De-La-Esperanza-De-Toledo/pfbid0V7FF9VP1vmtypj4BPek1TjDsjR3tkL2agwzK3bbqdDzqPzwcUCLPhu794LuMeNfyl/?ref=bookmarks",
      X: null,
      tiktok: null,
      youtube: null,
    },
  },

  
  /* ==========================================
     NUESTRA SEÑORA DEL CARMEN
     SAN ANDRÉS
     COFRADÍA DE GLORIA
  ========================================== */

  {
    id: "carmen-san-andres",
    slug: "carmen-san-andres",

    nombre: "Nuestra Señora del Carmen",
    nombreCorto: "Carmen",
    subnombre: "San Andrés",

    sedeCanonica: "Parroquia de San Andrés",
    tipo: "gloria",

    anioFundacion: null,
    anioRefundacion: 2011,
    referenciaHistorica: null,

    historia:
      "La Cofradía de Nuestra Señora del Carmen fue fundada en 1711 en la parroquia de San Andrés, con sus primeros estatutos firmados por el deán de la Catedral, Pedro de Herrera. Sus orígenes están vinculados a la antigua Cofradía de Ánimas de la parroquia, posteriormente integrada en la corporación carmelitana. El 1 de julio de 2011 fue erigida canónicamente de nuevo, aprobándose sus estatutos durante el episcopado de Braulio Rodríguez Plaza. Desde entonces mantiene los cultos de julio y la tradicional procesión de la Virgen por las calles de Toledo.",

    escudoUrl: "/escudos/desktop/gloria/carmen.png",
    escudoMovilUrl: "/escudos/movil/gloria/carmen.png",

    logoUrl: `${carmenPathGloria}/logo.avif`,

    portadaDesktopUrl: `${carmenPathGloria}/portada.avif`,
    portada2kUrl: `${carmenPathGloria}/portada_2k.avif`,
    portadaMovilUrl: `${carmenPathGloria}/portadamovil.avif`,

    titulares: [
      {
        id: "carmen-san-andres-titular",
        nombre: "Nuestra Señora del Carmen",
        advocacion: "Virgen del Carmen",
        esVirgen: true,

        anio: null,
        siglo: "XVIII",
        autor: "Anónimo",
        tipoAndas: "Costal",

        datosTalla:
          "Imagen de talla completa realizada en madera policromada durante el siglo XVIII, de autoría desconocida. Representa a la Virgen del Carmen con el Niño Jesús y conserva su policromía histórica, recuperada parcialmente durante las restauraciones efectuadas en 2014 y 2015 en el taller de Gloria Loarce. La intervención permitió descubrir los colores originales bajo sucesivas capas de repintes. La imagen recibe culto en la parroquia de San Andrés y procesiona sobre andas durante las celebraciones del mes de julio.",

        fotoUrl: `${carmenPathGloria}/titular.avif`,

        galeria: [
          `${carmenPathGloria}/galeria1.avif`,
          `${carmenPathGloria}/galeria2.avif`,
          `${carmenPathGloria}/galeria3.avif`,
          `${carmenPathGloria}/galeria4.avif`,
        ],
      },
    ],

    cultosId: "carmen-san-andres",
    procesionId: "carmen-san-andres-principal",

    redes: {
      web: null,
      instagram: "https://www.instagram.com/carmen_san_andres_toledo/",
      facebook: null,
      X: null,
      tiktok: null,
      youtube: null,
    },
  },

  /* ==========================================
     NUESTRA SEÑORA DE LA PAZ
     SAN ANDRÉS
     HERMANDAD DE GLORIA
  ========================================== */

  {
    id: "paz",
    slug: "paz",

    nombre: "Nuestra Señora de la Paz",
    nombreCorto: "Paz",
    subnombre: "San Andrés",

    sedeCanonica: "Iglesia de San Andrés",
    tipo: "gloria",

    anioFundacion: 1607,
    anioRefundacion: null,
    referenciaHistorica: null,

    historia:
      "La devoción a Nuestra Señora de la Paz está vinculada a la parroquia de San Andrés, donde, según la tradición, se veneraba una imagen trasladada desde la Catedral en 1496. La Hermandad fue erigida en 1607 por el cardenal Bernardo de Sandoval y Rojas. En 1732, los ocho cofrades que permanecían activos impulsaron su revitalización y la reforma de sus estatutos. La corporación conserva su festividad de enero y celebra su fiesta principal en Pentecostés, con una tradicional procesión por las calles del barrio.",

    escudoUrl: "/escudos/desktop/gloria/paz.png",
    escudoMovilUrl: "/escudos/movil/gloria/paz.png",
    logoUrl: `${pazPath}/logo.avif`,

    portadaDesktopUrl: `${pazPath}/portada.avif`,
    portada2kUrl: `${pazPath}/portada_2k.avif`,
    portadaMovilUrl: `${pazPath}/portadamovil.avif`,

    titulares: [
      {
        id: "paz-titular",
        nombre: "Nuestra Señora de la Paz",
        advocacion: "Virgen de la Paz",
        esVirgen: true,

        anio: null,
        siglo: "XX",
        autor: "Tomás Gimena",
        tipoAndas: "Andas",

        datosTalla:
          "La imagen actual es obra del escultor Tomás Gimena, aunque no se ha podido confirmar su fecha exacta de ejecución. Representa a la Virgen María sosteniendo al Niño Jesús. Se presenta revestida con manto bordado, corona y una gran ráfaga de rayos. La imagen recibe culto en la iglesia de San Andrés y protagoniza la tradicional procesión de Pentecostés, que recorre las calles del barrio y mantiene los vínculos históricos de la Hermandad con las comunidades religiosas de su entorno.",

        fotoUrl: `${pazPath}/titular.avif`,
        galeria: [
          `${pazPath}/galeria1.avif`,
          `${pazPath}/galeria2.avif`,
          `${pazPath}/galeria3.avif`,
          `${pazPath}/galeria4.avif`,
        ],
      },
    ],

    cultosId: "paz",
    procesionId: "paz-principal",

    redes: {
      web: null,
      instagram: "https://www.instagram.com/hermandadpaztoledo/",
      facebook: "https://www.facebook.com/virgendelapaztoledo/?ref=NONE_xav_ig_profile_page_web",
      X: null,
      tiktok: null,
      youtube: null,
    },
  },

  
  /* ==========================================
     SANTÍSIMO CRISTO DEL CALVARIO
     Y NUESTRA SEÑORA DEL ROSARIO
     COFRADÍA DE PENITENCIA
  ========================================== */

  {
    id: "calvario",
    slug: "calvario",

    nombre:
      "Santísimo Cristo del Calvario y Nuestra Señora del Rosario",
    nombreCorto: "Calvario y Rosario",

    sedeCanonica: "Iglesia del Salvador",
    tipo: "penitencia",

    anioFundacion: 1729,
    anioRefundacion: null,
    referenciaHistorica: null,

    historia:
      "Los primeros estatutos conocidos de la Cofradía fueron aprobados en 1729. El Cristo de la Fe, origen de la actual advocación del Calvario, recibió culto inicialmente en la antigua ermita del Calvario y posteriormente en San Cipriano, desde donde procesionó en 1925. En 1951 la corporación trasladó su sede a la iglesia del Salvador. Desde 1990 participa en la Semana Santa únicamente el Viernes Santo. En 2015 se aprobaron nuevos estatutos que establecieron su actual denominación junto a Nuestra Señora del Rosario.",

    escudoUrl: "/escudos/desktop/penitencia/calvario.png",
    escudoMovilUrl: "/escudos/movil/penitencia/calvario.png",
    logoUrl: `${salvadorPath}/logo.avif`,

    portadaDesktopUrl: `${salvadorPath}/portada.avif`,
    portada2kUrl: `${salvadorPath}/portada_2k.avif`,
    portadaMovilUrl: `${salvadorPath}/portadamovil.avif`,

    titulares: [
      {
        id: "calvario-titular",
        nombre: "Santísimo Cristo del Calvario",
        advocacion: "Cristo de la Fe",
        esVirgen: false,

        anio: null,
        siglo: "XVII",
        autor: "Anónimo",
        tipoAndas: "Andas",

        datosTalla:
          "Crucificado de autoría anónima, realizado en el siglo XVII y venerado históricamente bajo la advocación del Cristo de la Fe. Se distingue por el empleo de cabello natural y la pronunciada inclinación de su cuerpo sobre la cruz. Procesiona sobre una carroza de madera con decoración estofada en oro, acompañada por cuatro faroles de tradición toledana.",

        fotoUrl: `${salvadorPath}/calvario/titular.avif`,
        galeria: [
          `${salvadorPath}/calvario/galeria1.avif`,
          `${salvadorPath}/calvario/galeria2.avif`,
          `${salvadorPath}/calvario/galeria3.avif`,
          `${salvadorPath}/calvario/galeria4.avif`,
        ],
      },

      {
        id: "rosario-titular",
        nombre: "Nuestra Señora del Rosario",
        advocacion: "Virgen del Rosario",
        esVirgen: true,

        anio: null,
        siglo: "XVIII",
        autor: "Anónimo",
        tipoAndas: "Andas",

        datosTalla:
          "Dolorosa de vestir de autor desconocido, fechada en el siglo XVIII y restaurada durante el siglo XX. Entre sus elementos más característicos destacan el manto de color granate bordado en oro y los atributos dorados de la corona y el puñal. Procesiona sobre una carroza decorada con motivos estofados en plata.",

        fotoUrl: `${salvadorPath}/rosario/titular.avif`,
        galeria: [
          `${salvadorPath}/rosario/galeria1.avif`,
          `${salvadorPath}/rosario/galeria2.avif`,
          `${salvadorPath}/rosario/galeria3.avif`,
          `${salvadorPath}/rosario/galeria4.avif`,
        ],
      },
    ],

    cultosId: "calvario",
    procesionId: "calvario-principal",

    redes: {
      web: null,
      instagram: null,
      facebook: null,
      X: null,
      tiktok: null,
      youtube: null,
    },
  },


];
