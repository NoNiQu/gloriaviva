
import type { CofradiaData } from "../types/cofradia";

const carmenPath = "/cofradias/devocion/carmen_carmelitas";
const padrePioPath = "/cofradias/devocion/padre_pio";
const consueloPath = "/cofradias/devocion/consuelo";

const guiaPath = "/cofradias/gloria/guia";
const estrellaPath = "/cofradias/gloria/estrella";
const desamparadosPath = "/cofradias/gloria/desamparados";
const jeronimoPath = "/cofradias/gloria/jeronimo";
const alegriaPath = "/cofradias/gloria/alegria";
const esperanzaPath = "/cofradias/gloria/esperanza";
const pazPath = "/cofradias/gloria/paz";
const carmenPathGloria = "/cofradias/gloria/carmen";
const remediosPath = "/cofradias/gloria/remedios";
const saludSanClementePath = "/cofradias/gloria/salud_clemente";
const guadalupePath = "/cofradias/gloria/guadalupe";
const alcazarPath = "/cofradias/gloria/alcazar";
const sagrarioPath = "/cofradias/gloria/sagrario";

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
    logoDoradoUrl: `${carmenPath}/logodorado.avif`,

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
     SAN PÍO DE PIETRELCINA (PADRE PÍO)
     DEVOCIÓN POPULAR · IGLESIA DEL SALVADOR
  ========================================== */

  {
    id: "padre-pio",
    slug: "padre-pio",

    nombre: "San Pío de Pietrelcina",
    nombreCorto: "Padre Pío",

    sedeCanonica: "Iglesia del Salvador",
    tipo: "devocion-popular",

    // La devoción es anterior a 2025; ese año se bendijo la nueva talla
    // y se celebró su primera procesión pública en Toledo.
    anioFundacion: null,
    anioRefundacion: null,
    referenciaHistorica: 2025,

    historia:
      "La devoción a san Pío de Pietrelcina tiene presencia en la iglesia del Salvador de Toledo, filial de la parroquia de Santo Tomé, desde antes de la llegada de la imagen actual. En 2025 recibió un nuevo impulso con la bendición, el 21 de septiembre, de una talla realizada por el imaginero Ramón Cuenca Santo. El 23 de septiembre de ese año, festividad del santo capuchino, la imagen salió por primera vez en procesión por las calles de la feligresía. Los cultos y la procesión continuaron celebrándose en 2026.",

    // No se ha confirmado un escudo oficial propio de esta devoción.
    escudoUrl:
      "/escudos/desktop/devocion/padre-pio.png",

    escudoMovilUrl:
      "/escudos/movil/devocion/padre-pio.png",


    // Rutas previstas: los archivos deberán existir en /public.
    logoUrl: `${padrePioPath}/logo.avif`,
    logoDoradoUrl: `${padrePioPath}/logodorado.avif`,

    portadaDesktopUrl: `${padrePioPath}/portada.avif`,
    portada2kUrl: `${padrePioPath}/portada_2k.avif`,
    portadaMovilUrl: `${padrePioPath}/portadamovil.avif`,

    titulares: [
      {
        id: "padre-pio-titular",
        nombre: "San Pío de Pietrelcina",
        advocacion: "Padre Pío",
        esVirgen: false,

        anio: 2025,
        siglo: "XXI",
        autor: "Ramón Cuenca Santo",
        tipoAndas: "Andas",

        datosTalla:
          "Imagen de san Pío de Pietrelcina realizada en madera de cedro y policromada al óleo por el imaginero alicantino Ramón Cuenca Santo. Mide 140 centímetros de altura, presenta brazos articulados y puede revestirse con ornamentos litúrgicos. Su iconografía evoca al santo capuchino distribuyendo la comunión. Fue bendecida el 21 de septiembre de 2025 por el arzobispo Francisco Cerro Chaves y procesionó por primera vez dos días después sobre pequeñas andas.",

        fotoUrl: `${padrePioPath}/titular.avif`,
        galeria: [
          `${padrePioPath}/galeria1.avif`,
          `${padrePioPath}/galeria2.avif`,
          `${padrePioPath}/galeria3.avif`,
          `${padrePioPath}/galeria4.avif`,
        ],
      },
    ],

    cultosId: "padre-pio",
    procesionId: "padre-pio-principal",

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
     NUESTRA SEÑORA DEL CONSUELO
     DEVOCIÓN POPULAR · SANTOS JUSTO Y PASTOR
     ANTIGUA COFRADÍA EXTINGUIDA
  ========================================== */

  {
    id: "consuelo",
    slug: "consuelo",

    nombre: "Nuestra Señora del Consuelo",
    nombreCorto: "Consuelo",

    sedeCanonica: "Iglesia de los Santos Justo y Pastor",
    tipo: "devocion-popular",

    anioFundacion: null,
    anioRefundacion: null,
    referenciaHistorica: null,

    historia:
      "La devoción a Nuestra Señora del Consuelo está vinculada a la parroquia de los Santos Justo y Pastor de Toledo. En ella existió una cofradía dedicada a esta advocación mariana, hoy desaparecida, cuya presencia queda recogida en estudios sobre los antiguos archivos parroquiales de la ciudad. La imagen original también desapareció y la talla venerada actualmente es una réplica de aquella. Aunque la antigua corporación ya no existe, la devoción se mantiene viva en la parroquia, donde en mayo de 2026 se celebraron cultos en honor de la Virgen.",

    // No consta un escudo vigente de la antigua cofradía extinguida.
    escudoUrl:
      "/escudos/desktop/devocion/consuelo.png",

    escudoMovilUrl:
      "/escudos/movil/devocion/consuelo.png",

    // Imágenes previstas dentro de la carpeta de esta devoción.
    logoUrl: `${consueloPath}/logo.avif`,
    logoDoradoUrl: `${consueloPath}/logodorado.avif`,
    portadaDesktopUrl: `${consueloPath}/portada.avif`,
    portada2kUrl: `${consueloPath}/portada_2k.avif`,
    portadaMovilUrl: `${consueloPath}/portadamovil.avif`,

    titulares: [
      {
        id: "consuelo-titular",
        nombre: "Nuestra Señora del Consuelo",
        advocacion: "Virgen del Consuelo",
        esVirgen: true,

        anio: null,
        siglo: null,
        autor: null,
        tipoAndas: "No tiene",

        datosTalla:
          "La imagen que recibe culto en la iglesia de los Santos Justo y Pastor es una réplica de la antigua Virgen del Consuelo, cuya talla original desapareció. La advocación estuvo vinculada a una cofradía parroquial ya extinguida. No se ha confirmado documentalmente el autor ni la fecha de ejecución de la réplica actual.",

        fotoUrl: `${consueloPath}/titular.avif`,
        galeria: [
          `${consueloPath}/galeria1.avif`,
          `${consueloPath}/galeria2.avif`,
          `${consueloPath}/galeria3.avif`,
          `${consueloPath}/galeria4.avif`,
        ],
      },
    ],

    cultosId: "consuelo",
    procesionId: null,

    redes: {
      web: null,
      instagram: "https://www.instagram.com/ntra_sra_del_consuelo/",
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
    logoDoradoUrl: `${guiaPath}/logodorado.avif`,

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
     NUESTRA SEÑORA DE LOS DESAMPARADOS
     HERMANDAD ESCLAVITUD · SANTIAGO DEL ARRABAL
  ========================================== */

  {
    id: "desamparados",
    slug: "desamparados",

    nombre: "Nuestra Señora de los Desamparados",
    nombreCorto: "Desamparados",

    sedeCanonica: "Parroquia de Santiago el Mayor",
    tipo: "gloria",

    // 1392 corresponde a una tradición recogida siglos después,
    // no a una fundación documentalmente acreditada.
    anioFundacion: null,
    anioRefundacion: null,
    referenciaHistorica: 1392,

    historia:
      "La Hermandad Esclavitud de Nuestra Señora de los Desamparados pertenece a las antiguas corporaciones marianas del Arrabal de Toledo. Una tradición recogida en el siglo XVII sitúa sus orígenes en una aparición de la Virgen junto al Hospital de San Leonardo en 1392, aunque no existe confirmación documental contemporánea de ese relato. La cofradía aparece citada en el siglo XVI y estuvo vinculada a una ermita reconstruida en 1554 y nuevamente en 1587. En 1746 se aprobaron nuevas constituciones tras su unión con la Hermandad de Socorro de las Benditas Ánimas del Purgatorio. La antigua ermita sufrió graves daños y desapareció durante la Guerra Civil. Actualmente tiene su sede canónica en Santiago el Mayor, donde mantiene el culto a Nuestra Señora de los Desamparados.",

    // Rutas previstas para las imágenes que se incorporen a /public.
    escudoUrl: "/escudos/desktop/gloria/desamparados.png",
    escudoMovilUrl: "/escudos/movil/gloria/desamparados.png",
    logoUrl: `${desamparadosPath}/logo.avif`,
    logoDoradoUrl: `${desamparadosPath}/logodorado.avif`,

    portadaDesktopUrl: `${desamparadosPath}/portada.avif`,
    portada2kUrl: `${desamparadosPath}/portada_2k.avif`,
    portadaMovilUrl: `${desamparadosPath}/portadamovil.avif`,

    titulares: [
      {
        id: "desamparados-titular",
        nombre: "Nuestra Señora de los Desamparados",
        advocacion: "Virgen de los Desamparados",
        esVirgen: true,

        // No confundir la imagen actual con la talla histórica
        // documentada en la antigua ermita.
        anio: null,
        siglo: null,
        autor: null,
        tipoAndas: "Andas",

        datosTalla:
          "Imagen de Nuestra Señora de los Desamparados venerada por su Hermandad Esclavitud en la parroquia de Santiago el Mayor del Arrabal. La antigua cofradía poseyó una imagen de gran devoción en su ermita histórica, desaparecida tras los daños de 1936. No se dispone de una atribución o fecha de ejecución suficientemente contrastadas para la imagen que recibe culto actualmente.",

        fotoUrl: `${desamparadosPath}/titular.avif`,
        galeria: [
          `${desamparadosPath}/galeria1.avif`,
          `${desamparadosPath}/galeria2.avif`,
          `${desamparadosPath}/galeria3.avif`,
          `${desamparadosPath}/galeria4.avif`,
        ],
      },
    ],

    // Triduo y procesión del 18 al 20 de junio de 2026.
    cultosId: "desamparados",
    procesionId: "desamparados-principal",

    redes: {
      web: "https://santiagoelmayor.org/desamparados/",
      instagram: null,
      facebook: null,
      X: null,
      tiktok: null,
      youtube: null,
    },
  },

  /* ==========================================
     SAN JERÓNIMO
     HERMANDAD DE GLORIA · CIGARRALES DE TOLEDO
  ========================================== */

  {
    id: "jeronimo",
    slug: "jeronimo",

    nombre: "San Jerónimo",
    nombreCorto: "San Jerónimo",

    sedeCanonica: "Ermita de San Jerónimo",
    tipo: "gloria",

    // Hermandad Esclavitud de 1751, reorganizada en 1899.
    // No confundir la fecha de la ermita (1611) con la de la hermandad.
    anioFundacion: null,
    anioRefundacion: 1899,
    referenciaHistorica: null,

    historia:
      "La devoción a San Jerónimo en Toledo está ligada a la ermita de los Cigarrales, edificada por iniciativa del canónigo Jerónimo de Miranda en 1611 y consagrada al año siguiente para atender a los vecinos de la zona. En 1751 se fundó la Hermandad Esclavitud de San Jerónimo, reorganizada el 13 de marzo de 1899 como Cofradía de San Jerónimo, Confesor y Doctor, con una importante labor de asistencia a los hermanos. La ermita sufrió diversos daños a lo largo de su historia y fue rehabilitada en 2005 y 2006. La Hermandad mantiene la tradicional romería y los cultos en honor de su titular, celebrados en torno a su festividad de finales de septiembre y comienzos de octubre.",

    // Preparar las imágenes dentro de public/cofradias/gloria/jeronimo/.
    escudoUrl: "/escudos/desktop/gloria/jeronimo.png",
    escudoMovilUrl: "/escudos/movil/gloria/jeronimo.png",
    logoUrl: `${jeronimoPath}/logo.avif`,
    logoDoradoUrl: `${jeronimoPath}/logodorado.avif`,

    portadaDesktopUrl: `${jeronimoPath}/portada.avif`,
    portada2kUrl: `${jeronimoPath}/portada_2k.avif`,
    portadaMovilUrl: `${jeronimoPath}/portadamovil.avif`,

    titulares: [
      {
        id: "jeronimo-titular",
        nombre: "San Jerónimo",
        advocacion: "San Jerónimo",
        esVirgen: false,

        anio: null,
        siglo: null,
        autor: null,
        tipoAndas: "No tiene",

        datosTalla:
          "Imagen de San Jerónimo venerada en su ermita de los Cigarrales. Representa al santo penitente, arrodillado, con una cruz y una piedra, acompañado del león que tradicionalmente constituye uno de sus atributos iconográficos. La documentación histórica recoge la destrucción o desaparición de varias imágenes anteriores, incluida la perdida durante la Guerra Civil. No se ha confirmado documentalmente la autoría ni la fecha exacta de ejecución de la talla actual.",

        fotoUrl: `${jeronimoPath}/titular.avif`,
        galeria: [
          `${jeronimoPath}/galeria1.avif`,
          `${jeronimoPath}/galeria2.avif`,
          `${jeronimoPath}/galeria3.avif`,
          `${jeronimoPath}/galeria4.avif`,
        ],
      },
    ],

    cultosId: "jeronimo",
    // El cartel de 2026 no anuncia salida procesional.
    procesionId: null,

    redes: {
      web: null,
      instagram: null,
      facebook: null,
      X: null,
      tiktok: null,
      youtube: null,
    },

    fotosCedidas: true,
    fotoQuien: "al Consejo de hermandades y cofradías de Gloria de Toledo",
    fotosSeccion: "todo",
    fotosGaleria: false,

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
    logoDoradoUrl: `${estrellaPath}/logodorado.avif`,

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
        siglo: "XVI",
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

    // Novenario de junio y cultos del Mes del Rosario en octubre.
    cultosIds: ["estrella", "estrella-octubre"],

    redes: {
      web: "https://www.hermandadestrella.es",
      instagram: "https://www.instagram.com/hermandadestrella/",
      facebook: "https://www.facebook.com/hermandadestrellatoledo",
      X: null,
      tiktok: null,
      youtube: null,
    },

    fotosCedidas: true,
    fotoQuien: "la Hermandad de Nuestra Señora de la Estrella",
    fotosSeccion: "todo",
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
    logoDoradoUrl: `${alegriaPath}/logodorado.avif`,

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
    logoDoradoUrl: `${doloresPath}/logodorado.avif`,

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
    logoDoradoUrl: `${misericordiaPath}/logodorado.avif`,

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
    logoDoradoUrl: `${angustiasPath}/logodorado.avif`,

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
    logoDoradoUrl: `${esperanzaPath}/logodorado.avif`,

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

    cultosIds: ["esperanza", "esperanza-patrocinio"],
    procesionesIds: ["esperanza-voto", "esperanza-octava"],

    redes: {
      web: "https://virgendelaesperanzatoledo.es",
      instagram: "https://www.instagram.com/cofradiaesperanzatoledo/",
      facebook:
        "https://www.facebook.com/people/Virgen-De-La-Esperanza-De-Toledo/pfbid0V7FF9VP1vmtypj4BPek1TjDsjR3tkL2agwzK3bbqdDzqPzwcUCLPhu794LuMeNfyl/?ref=bookmarks",
      X: null,
      tiktok: null,
      youtube: null,
    },

    fotosCedidas: true,
    fotoQuien: "la Cofradía de Nuestra Señora de la Esperanza",
    fotosSeccion: "todo",

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
    logoDoradoUrl: `${carmenPathGloria}/logodorado.avif`,

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

    // Mantener la procesión de julio y añadir la de noviembre.
    cultosIds: ["carmen-san-andres", "carmen-san-andres-noviembre"],
    procesionesIds: ["carmen-san-andres-principal", "carmen-san-andres-noviembre"],

    redes: {
      web: null,
      instagram: "https://www.instagram.com/carmen_san_andres_toledo/",
      facebook: "https://www.facebook.com/profile.php?id=100070769869829",
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
    logoDoradoUrl: `${pazPath}/logodorado.avif`,

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
      facebook: "https://www.facebook.com/virgendelapaztoledo",
      X: "https://x.com/Hdad_Paz",
      tiktok: null,
      youtube: null,
    },

    fotosCedidas: true,
    fotoQuien: "la Hermandad de Nuestra Señora de la Paz",
    fotosSeccion: "galería",

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
      "Santísimo Cristo de la Fe y Nuestra Señora del Rosario",
    nombreCorto: "Fe y Rosario",

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
    logoDoradoUrl: `${salvadorPath}/logodorado.avif`,

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
          "Crucificado de autoría anónima, realizado en el siglo XVII y venerado históricamente bajo la advocación del Cristo de la Fe. Se distingue por el empleo de cabello natural y la pronunciada inclinación de su cuerpo sobre la cruz. En Semana Santa procesiona sobre una carroza de madera con decoración estofada en oro, acompañada por cuatro faroles de tradición toledana.",

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
          "Dolorosa de vestir de autor desconocido, fechada en el siglo XVIII y restaurada durante el siglo XX. Entre sus elementos más característicos destacan el manto de color granate bordado en oro y los atributos dorados de la corona y el puñal. En Semana Santa procesiona sobre una carroza decorada con motivos estofados en plata.",

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

    cultosIds: ["calvario", "rosario"],
    procesionesIds: ["calvario-principal", "rosario-principal"],

    redes: {
      web: null,
      instagram: "https://www.instagram.com/calvario_toledo/",
      facebook: "https://www.facebook.com/profile.php?id=61592823255367",
      X: null,
      tiktok: null,
      youtube: null,
    },
  },


  /* ==========================================
     NUESTRA SEÑORA DEL AMPARO
     COFRADÍA DE PENITENCIA CON CULTOS GLORIOSOS
  ========================================== */

  {
    id: "amparo",
    slug: "amparo",

    nombre: "Nuestra Señora del Amparo",
    nombreCorto: "Amparo",

    sedeCanonica: "Parroquia de San Ildefonso",
    tipo: "penitencia",

    anioFundacion: 1952,
    anioRefundacion: null,
    referenciaHistorica: null,

    historia:
      "La Cofradía de Nuestra Señora del Amparo fue fundada en 1952 por trabajadores y mandos vinculados a la Fábrica de Armas de Toledo. Sus primeros años estuvieron ligados a la iglesia de la Magdalena, desde donde participaba en las celebraciones del Jueves Santo. En 1994 trasladó su sede a la parroquia de San Ildefonso. La corporación conserva su carácter penitencial y una arraigada devoción a Nuestra Señora del Amparo.",

    // Escudos pendientes de incorporar, si están disponibles.
    escudoUrl: "/escudos/desktop/penitencia/amparo.png",
    escudoMovilUrl: "/escudos/movil/penitencia/amparo.png",
    logoUrl: `${amparoPath}/logo.avif`,
    logoDoradoUrl: `${amparoPath}/logodorado.avif`,

    portadaDesktopUrl: `${amparoPath}/portada.avif`,
    portada2kUrl: `${amparoPath}/portada_2k.avif`,
    portadaMovilUrl: `${amparoPath}/portadamovil.avif`,

    // Solo la Virgen del Amparo; sin otros pasos penitenciales.
    titulares: [
      {
        id: "amparo-titular",
        nombre: "Nuestra Señora del Amparo",
        advocacion: "Virgen del Amparo",
        esVirgen: true,

        anio: null,
        siglo: "XX",
        autor: "Cecilio Béjar",
        tipoAndas: "Palio",

        datosTalla:
          "Imagen de Nuestra Señora del Amparo realizada por Cecilio Béjar. Procesiona bajo un palio de terciopelo verde bordado en oro y seda. Fue restaurada en 2001 por Enrique Toledo Brazal.",

        fotoUrl: `${amparoPath}/titular.avif`,
        galeria: [
          `${amparoPath}/galeria1.avif`,
          `${amparoPath}/galeria2.avif`,
          `${amparoPath}/galeria3.avif`,
          `${amparoPath}/galeria4.avif`,
        ],
      },
    ],

    cultosId: "amparo",
    procesionId: "amparo-principal",

    redes: {
      web: null,
      instagram: "https://www.instagram.com/cofradia.virgen.del.amparo/",
      facebook: null,
      X: null,
      tiktok: null,
      youtube: null,
    },
  },


  /* ==========================================
     NUESTRA SEÑORA DE LOS REMEDIOS
     HERMANDAD DE GLORIA — TOLEDO
  ========================================== */

  {
    id: "remedios",
    slug: "remedios",

    nombre: "Nuestra Señora de los Remedios",
    nombreCorto: "Remedios",

    sedeCanonica: "Iglesia de San Miguel el Alto",
    tipo: "gloria",

    anioFundacion: 1744,
    anioRefundacion: null,
    referenciaHistorica: null,

    historia:
      "La Hermandad de Nuestra Señora de los Remedios tiene sus orígenes documentados en Toledo en 1744 y mantiene su vinculación con la iglesia de San Miguel Arcángel, perteneciente a la parroquia de los Santos Justo y Pastor. Sus constituciones históricas contemplaban diversos cultos marianos a lo largo del año. La corporación fue erigida canónicamente en 1900 y aprobó una reforma de sus estatutos en 2015. Actualmente continúa celebrando los cultos y la procesión de su titular durante el mes de septiembre.",

    escudoUrl: "/escudos/desktop/gloria/remedios.png",
    escudoMovilUrl: "/escudos/movil/gloria/remedios.png",
    logoUrl: `${remediosPath}/logo.avif`,
    logoDoradoUrl: `${remediosPath}/logodorado.avif`,

    portadaDesktopUrl: `${remediosPath}/portada.avif`,
    portada2kUrl: `${remediosPath}/portada_2k.avif`,
    portadaMovilUrl: `${remediosPath}/portadamovil.avif`,

    titulares: [
      {
        id: "remedios-titular",
        nombre: "Nuestra Señora de los Remedios",
        advocacion: "Virgen de los Remedios",
        esVirgen: true,

        anio: null,
        siglo: null,
        autor: null,
        tipoAndas: "Andas",

        datosTalla:
          "Imagen mariana venerada en la iglesia de San Miguel Arcángel de Toledo. Es la titular de una hermandad documentada desde el siglo XVIII y protagoniza sus celebraciones y procesión del mes de septiembre. No se ha podido confirmar con suficiente seguridad la fecha de realización ni la autoría de la imagen.",

        fotoUrl: `${remediosPath}/titular.avif`,
        galeria: [
          `${remediosPath}/galeria1.avif`,
          `${remediosPath}/galeria2.avif`,
          `${remediosPath}/galeria3.avif`,
          `${remediosPath}/galeria4.avif`,
        ],
      },
    ],

    cultosId: "remedios",
    procesionId: "remedios-principal",

    // Cultos de septiembre y Candelaria de enero/febrero.
    cultosIds: ["remedios", "remedios-candelaria"],
    procesionesIds: ["remedios-principal"],

    redes: {
      web: null,
      instagram: "https://www.instagram.com/hermandad.losremedios/",
      facebook: null,
      X: null,
      tiktok: null,
      youtube: null,
    },
  },

  /* ==========================================
     NUESTRA SEÑORA DE LA SALUD DE SAN CLEMENTE
     HERMANDAD DE GLORIA — TOLEDO
  ========================================== */

  {
    id: "salud",
    slug: "salud",

    nombre: "Nuestra Señora de la Salud",
    nombreCorto: "Salud",
    subnombre: "San Clemente",

    sedeCanonica: "Real Monasterio de San Clemente",
    tipo: "gloria",

    anioFundacion: null,
    anioRefundacion: null,
    referenciaHistorica: null,

    historia:
      "La devoción a Nuestra Señora de la Salud de San Clemente está vinculada al Real Monasterio de San Clemente de Toledo, una histórica fundación cisterciense cuyos orígenes se remontan a la Edad Media. Su hermandad mantiene el culto a la Virgen, especialmente en torno a la fiesta de la Natividad de María, el 8 de septiembre, y la celebración de la Candelaria en febrero. La imagen sale en procesión desde el convento, conservando una tradición mariana estrechamente relacionada con la comunidad religiosa y las calles del entorno.",

    escudoUrl: "/escudos/desktop/gloria/salud_clemente.png",
    escudoMovilUrl: "/escudos/movil/gloria/salud_clemente.png",
    logoUrl: `${saludSanClementePath}/logo.avif`,
    logoDoradoUrl: `${saludSanClementePath}/logodorado.avif`,

    portadaDesktopUrl: `${saludSanClementePath}/portada.avif`,
    portada2kUrl: `${saludSanClementePath}/portada_2k.avif`,
    portadaMovilUrl: `${saludSanClementePath}/portadamovil.avif`,

    titulares: [
      {
        id: "salud-titular",
        nombre: "Nuestra Señora de la Salud",
        advocacion: "Virgen de la Salud de San Clemente",
        esVirgen: true,

        anio: null,
        siglo: null,
        autor: null,
        tipoAndas: "Andas",

        datosTalla:
          "Imagen de Nuestra Señora de la Salud con el Niño Jesús, venerada en la iglesia conventual de San Clemente de Toledo. Recibe culto en el monasterio y participa en las procesiones vinculadas a la Natividad de la Virgen y a la Candelaria. Su datación y autoría están pendientes de confirmación documental.",

        fotoUrl: `${saludSanClementePath}/titular.avif`,
        galeria: [
          `${saludSanClementePath}/galeria1.avif`,
          `${saludSanClementePath}/galeria2.avif`,
          `${saludSanClementePath}/galeria3.avif`,
          `${saludSanClementePath}/galeria4.avif`,
        ],
      },
    ],

    cultosId: "salud",
    procesionId: "salud-principal",

    // Cultos y procesiones de febrero y septiembre de 2026.
    cultosIds: ["salud", "salud-febrero"],
    procesionesIds: ["salud-principal", "salud-febrero"],

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
     NUESTRA SEÑORA SANTA MARÍA DEL ALCÁZAR
     HERMANDAD DE GLORIA — TOLEDO
  ========================================== */

  {
    id: "alcazar",
    slug: "alcazar",

    nombre: "Nuestra Señora Santa María del Alcázar",
    nombreCorto: "Alcázar",

    sedeCanonica: "Santa Iglesia Catedral Primada",
    tipo: "gloria",

    anioFundacion: 1936,
    anioRefundacion: null,
    referenciaHistorica: null,

    historia:
      "La Hermandad de Nuestra Señora Santa María del Alcázar surgió en agosto de 1936, durante los acontecimientos de la Guerra Civil relacionados con el Alcázar de Toledo. Fue erigida canónicamente el 7 de diciembre de ese mismo año en la Catedral Primada. La corporación nació con el propósito de mantener la unión entre sus integrantes, fomentar el culto a la Santísima Virgen bajo la advocación de Santa María del Alcázar y prestar ayuda a los hermanos y sus familias. Conserva sus celebraciones marianas y la tradicional procesión de septiembre.",

    escudoUrl: "/escudos/desktop/gloria/alcazar.png",
    escudoMovilUrl: "/escudos/movil/gloria/alcazar.png",
    logoUrl: `${alcazarPath}/logo.avif`,
    logoDoradoUrl: `${alcazarPath}/logodorado.avif`,

    portadaDesktopUrl: `${alcazarPath}/portada.avif`,
    portada2kUrl: `${alcazarPath}/portada_2k.avif`,
    portadaMovilUrl: `${alcazarPath}/portadamovil.avif`,

    titulares: [
      {
        id: "alcazar-titular",
        nombre: "Nuestra Señora Santa María del Alcázar",
        advocacion: "Santa María del Alcázar",
        esVirgen: true,

        anio: null,
        siglo: null,
        autor: null,
        tipoAndas: "Andas",

        datosTalla:
          "Imagen de la Santísima Virgen bajo la advocación de Santa María del Alcázar, vinculada históricamente a la devoción mariana de la fortaleza toledana. La hermandad le rinde culto en la Catedral Primada y celebra su procesión durante el mes de septiembre. No se ha confirmado la autoría ni una datación precisa de la talla.",

        fotoUrl: `${alcazarPath}/titular.avif`,
        galeria: [
          `${alcazarPath}/galeria1.avif`,
          `${alcazarPath}/galeria2.avif`,
          `${alcazarPath}/galeria3.avif`,
          `${alcazarPath}/galeria4.avif`,
        ],
      },
    ],

    cultosId: "alcazar",
    procesionId: "alcazar-principal",

    redes: {
      web: null,
      instagram: "https://www.instagram.com/hdad_santa_maria_del_alcazar/",
      facebook: null,
      X: null,
      tiktok: null,
      youtube: null,
    },

    fotosCedidas: true,
    fotoQuien: "Toledo Sacro",
    fotosSeccion: "todo",
    fotosLogo: "/colaboradores/toledo_sacro.webp",
  },



  /* ==========================================
     NUESTRA SEÑORA DEL SAGRARIO
     PATRONA DE TOLEDO
  ========================================== */

  {
    id: "sagrario",
    slug: "sagrario",

    nombre: "Nuestra Señora del Sagrario",
    nombreCorto: "Sagrario",
    subnombre: "Patrona de Toledo",

    sedeCanonica: "Santa Iglesia Catedral Primada",
    tipo: "gloria",

    anioFundacion: 1924,
    anioRefundacion: null,
    referenciaHistorica: null,

    historia:
      "La devoción a Nuestra Señora del Sagrario está unida desde antiguo a la Catedral Primada y a la propia historia espiritual de Toledo. La imagen venerada en su capilla es la patrona de la ciudad y preside cada mes de agosto los cultos del Octavario y la solemnidad de la Asunción. La actual Esclavitud de la Virgen del Sagrario fue promovida en 1923, aprobó sus estatutos en 1924 y acompaña desde entonces esta arraigada devoción toledana. La imagen fue coronada canónicamente en 1926 y continúa siendo una de las advocaciones marianas más queridas de la ciudad.",

    escudoUrl: "/escudos/desktop/gloria/sagrario.png",
    escudoMovilUrl: "/escudos/movil/gloria/sagrario.png",
    logoUrl: `${sagrarioPath}/logo.avif`,
    logoDoradoUrl: `${sagrarioPath}/logodorado.avif`,

    portadaDesktopUrl: `${sagrarioPath}/portada.avif`,
    portada2kUrl: `${sagrarioPath}/portada_2k.avif`,
    portadaMovilUrl: `${sagrarioPath}/portadamovil.avif`,

    titulares: [
      {
        id: "sagrario-titular",
        nombre: "Nuestra Señora del Sagrario",
        advocacion: "Virgen del Sagrario",
        esVirgen: true,

        anio: null,
        siglo: "XIII",
        autor: "Anónimo",
        tipoAndas: "Carroza",

        datosTalla:
          "La imagen es una talla románica sedente, realizada en madera de níspero y fechada en el siglo XIII. Representa a la Virgen María con el Niño Jesús sobre su regazo. En el siglo XVI fue revestida de plata, excepto la cabeza y las manos, y se enriquece con mantos, joyas y coronas fruto de la devoción de generaciones de toledanos. Se venera en la capilla del Sagrario sobre un trono de plata sobredorada realizado por el orfebre florentino Virgilio Fanelli entre 1654 y 1674.",

        fotoUrl: `${sagrarioPath}/titular.avif`,
        galeria: [
          `${sagrarioPath}/galeria1.avif`,
          `${sagrarioPath}/galeria2.avif`,
          `${sagrarioPath}/galeria3.avif`,
          `${sagrarioPath}/galeria4.avif`,
        ],
      },
    ],

    cultosId: "sagrario",
    procesionId: "sagrario-principal",

    redes: {
      web: "https://esclavitudvirgendelsagrario.es/",
      instagram: "https://www.instagram.com/sagrariovirgen/",
      facebook: "https://www.facebook.com/VirgenSagrarioToledo",
      X: null,
      tiktok: null,
      youtube: null,
    },

    fotosCedidas: true,
    fotoQuien: "Toledo Sacro",
    fotosSeccion: "galería",
    fotosLogo: "/colaboradores/toledo_sacro.webp",

  },

  /* ==========================================
     NUESTRA SEÑORA DE GUADALUPE
     HERMANDAD EXTREMEÑA — TOLEDO
  ========================================== */

  {
    id: "guadalupe",
    slug: "guadalupe",

    nombre: "Nuestra Señora de Guadalupe",
    nombreCorto: "Guadalupe",

    sedeCanonica: "Iglesia parroquial de Santo Tomé",
    tipo: "gloria",

    anioFundacion: 1765,
    anioRefundacion: null,
    referenciaHistorica: null,

    historia:
      "La devoción organizada a Nuestra Señora de Guadalupe en Toledo se documenta desde 1765, año de establecimiento de una Esclavitud dedicada a la Virgen, cuyas constituciones fueron aprobadas en 1766. La hermandad extremeña mantiene esta advocación en la parroquia de Santo Tomé y reúne en torno a ella a extremeños residentes en Toledo y a otros devotos. Sus celebraciones comprenden los cultos de septiembre, la procesión de la Virgen y peregrinaciones al santuario de Guadalupe, en Extremadura.",

    escudoUrl: "/escudos/desktop/gloria/guadalupe.png",
    escudoMovilUrl: "/escudos/movil/gloria/guadalupe.png",
    logoUrl: `${guadalupePath}/logo.avif`,
    logoDoradoUrl: `${guadalupePath}/logodorado.avif`,

    portadaDesktopUrl: `${guadalupePath}/portada.avif`,
    portada2kUrl: `${guadalupePath}/portada_2k.avif`,
    portadaMovilUrl: `${guadalupePath}/portadamovil.avif`,

    titulares: [
      {
        id: "guadalupe-titular",
        nombre: "Nuestra Señora de Guadalupe",
        advocacion: "Virgen de Guadalupe",
        esVirgen: true,

        anio: null,
        siglo: null,
        autor: null,
        tipoAndas: "Andas",

        datosTalla:
          "Imagen de Nuestra Señora de Guadalupe venerada en la iglesia de Santo Tomé de Toledo. Representa la advocación mariana de especial arraigo en Extremadura y recibe culto por parte de la Hermandad Extremeña de Toledo. La imagen participa en los actos y procesión de septiembre. Su autor y fecha de ejecución no han podido confirmarse con suficiente seguridad.",

        fotoUrl: `${guadalupePath}/titular.avif`,
        galeria: [
          `${guadalupePath}/galeria1.avif`,
          `${guadalupePath}/galeria2.avif`,
          `${guadalupePath}/galeria3.avif`,
          `${guadalupePath}/galeria4.avif`,
        ],
      },
    ],

    cultosId: "guadalupe",
    procesionId: "guadalupe-principal",

    redes: {
      web: null,
      instagram: null,
      facebook: null,
      X: null,
      tiktok: null,
      youtube: null,
    },

    fotosCedidas: true,
    fotoQuien: "Toledo Sacro",
    fotosSeccion: "todo",
    fotosLogo: "/colaboradores/toledo_sacro.webp",
  },

];
