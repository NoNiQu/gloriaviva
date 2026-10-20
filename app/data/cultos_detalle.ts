
import type { CultoDetalle } from "../types/culto_detalle";

export const cultosDetalle: CultoDetalle[] = [
  {
    advocacionId: "remedios",
    titulo: "Cultos",
    subtitulo: "Cultos en honor de Ntra. Sra. de los Remedios",
    bloques: [
      {
        id: "remedios-5-septiembre",
        fecha: "5 de septiembre",
        lineas: [
          "19:30 h — Santo Rosario y Santa Misa",
        ],
      },
      {
        id: "remedios-6-septiembre",
        titulo: "Fiesta principal",
        fecha: "6 de septiembre",
        lineas: [
          "10:00 h — Solemne Celebración Eucarística",
          "Al finalizar — Solemne Procesión",
        ],
      },
    ],
  },

  /* ==========================================
     NUESTRA SEÑORA DE LOS REMEDIOS
     CULTOS DE LA CANDELARIA · ENERO / FEBRERO 2026
  ========================================== */

  {
    id: "remedios-candelaria",
    advocacionId: "remedios",
    titulo: "Cultos de la Candelaria",
    subtitulo: "Cultos en honor de Nuestra Señora de los Remedios",
    bloques: [
      {
        id: "remedios-candelaria-30-enero",
        meses: ["ENERO"],
        fecha: "Viernes 30 de enero",
        lineas: [
          "18:30 h — Rezo del Santo Rosario",
          "19:00 h — Celebración de la Santa Misa, presidida por el Rvdo. Sr. D. Gustavo Adolfo Conde",
        ],
      },
      {
        id: "remedios-candelaria-31-enero",
        meses: ["ENERO"],
        fecha: "Sábado 31 de enero",
        lineas: [
          "18:30 h — Rezo del Santo Rosario",
          "19:00 h — Celebración de la Santa Misa, presidida por el Rvdo. Sr. D. Gustavo Adolfo Conde",
          "Al finalizar — Concierto de música sacra de la Coral de Arroyomolinos",
        ],
      },
      {
        id: "remedios-candelaria-1-febrero",
        meses: ["FEBRERO"],
        titulo: "Procesión de Candelas y Santa Misa",
        fecha: "Domingo 1 de febrero",
        lineas: [
          "11:00 h — Procesión de Candelas desde la plaza del Seco",
          "A continuación — Santa Misa, presidida por el Rvdo. Sr. D. Juan Ignacio López Serrano, delegado de Hermandades y Religiosidad Popular de la Archidiócesis de Toledo",
          "Tras la Misa — Refresco y ajonjolíes en el patio",
        ],
      },
    ],
  },

  /* ==========================================
     NUESTRA SEÑORA DE LA SALUD DE SAN CLEMENTE
     PROCESIÓN DEL 8 DE FEBRERO DE 2026
  ========================================== */

  {
    id: "salud-febrero",
    advocacionId: "salud",
    titulo: "Solemne Procesión",
    subtitulo: "Nuestra Señora de la Salud de San Clemente",
    bloques: [
      {
        id: "salud-febrero-8",
        titulo: "Procesión de febrero",
        fecha: "Domingo 8 de febrero",
        lineas: [
          "11:00 h — Salida procesional desde el Convento de San Clemente",
          "Recorrido — Calle San Román, Esteban Illán, plaza de las Tendillas, Cardenal Lorenzana, Alfonso X el Sabio, plaza de Juan de Mariana y plaza de San Román",
          "Regreso — Convento de San Clemente",
        ],
      },
    ],
  },

  {
    advocacionId: "salud",
    titulo: "Cultos",
    subtitulo: "Cultos en honor de Ntra. Sra. de la Salud",
    bloques: [
      {
        id: "salud-6-septiembre",
        fecha: "6 de septiembre",
        lineas: [
          "12:30 h — Santa Misa y Salve",
        ],
      },
      {
        id: "salud-7-septiembre",
        fecha: "7 de septiembre",
        lineas: [
          "19:30 h — Santo Rosario",
          "20:00 h — Santa Misa y Salve",
        ],
      },
      {
        id: "salud-8-septiembre",
        titulo: "Natividad de la Santísima Virgen",
        fecha: "8 de septiembre",
        lineas: [
          "19:00 h — Procesión y Solemne Celebración Eucarística",
        ],
      },
    ],
  },

  {
    advocacionId: "calvario",
    titulo: "Solemne Triduo",
    subtitulo: "En honor al Santísimo Cristo de la Fe",
    bloques: [
      {
        id: "calvario-triduo",
        fecha: "10, 11 y 12 de septiembre",
        lineas: [
          "19:30 h — Rezo del Santo Rosario y celebración de la Santa Misa",
          "20:45 h — Besapiés de la Sagrada Imagen y veneración pública de los fieles",
        ],
      },
      {
        id: "calvario-13-septiembre",
        titulo: "Solemne Función Mayor y Jubileo",
        fecha: "13 de septiembre",
        lineas: [
          "12:00 h — Solemne Función Mayor y Jubileo",
          "Tras la celebración — Solemne Protestación de Fe",
          "A continuación — Procesión del Santísimo Cristo",
        ],
      },
    ],
  },

  {
    advocacionId: "descendimiento",
    titulo: "Cultos extraordinarios",
    subtitulo: "XXXV aniversario de la Hermandad",
    bloques: [
      {
        id: "descendimiento-12-septiembre",
        fecha: "12 de septiembre",
        lineas: [
          "Traslado al Convento de las Gaitanas",
          "En el Convento de las Gaitanas — Vigilia de la Exaltación de la Santa Cruz",
          "A continuación — Celebración de la Eucaristía",
        ],
      },
      {
        id: "descendimiento-13-septiembre",
        fecha: "13 de septiembre",
        lineas: [
          "12:30 h — Misa Solemne de la Exaltación de la Santa Cruz",
          "Conmemoración del XXXV aniversario de la Hermandad",
        ],
      },
    ],
  },

  {
    advocacionId: "padre-pio",
    titulo: "Novena y Fiesta",
    subtitulo: "Cultos en honor de Padre Pío",
    bloques: [
      {
        id: "padre-pio-novena",
        titulo: "Novena",
        fecha: "Del 14 al 22 de septiembre",
        lineas: [
          "19:15 h — Novena",
          "19:30 h — Santa Misa con prédica",
        ],
      },
      {
        id: "padre-pio-fiesta",
        titulo: "Fiesta",
        fecha: "23 de septiembre",
        lineas: [
          "08:00 h — Misa rezada",
          "09:00 h — Misa rezada",
          "17:45 h — Rosario",
          "18:00 h — Misa Solemne y veneración de la reliquia",
          "20:30 h — Solemne Procesión",
        ],
      },
    ],
  },

  {
    advocacionId: "alegria",
    titulo: "Solemne Triduo",
    subtitulo: "Cultos en honor de la Virgen de la Alegría",
    bloques: [
      {
        id: "alegria-triduo",
        fecha: "17, 18 y 19 de septiembre",
        lineas: [
          "19:00 h — Santo Rosario",
          "19:30 h — Santa Misa, ejercicio del Triduo y Salve",
        ],
      },
      {
        id: "alegria-19-septiembre",
        titulo: "Procesión infantil",
        fecha: "19 de septiembre",
        lineas: [
          "Al finalizar los cultos — Procesión Infantil",
        ],
      },
      {
        id: "alegria-20-septiembre",
        titulo: "Fiesta principal",
        fecha: "20 de septiembre",
        lineas: [
          "11:00 h — Solemne Celebración Eucarística",
          "Al finalizar los cultos — Tradicional Procesión",
        ],
      },
    ],
  },

  {
    advocacionId: "dolores",
    titulo: "Solemne Triduo Glorioso",
    subtitulo: "En honor de Nuestra Señora de los Dolores",
    bloques: [
      {
        id: "dolores-18-septiembre",
        fecha: "18 de septiembre",
        lineas: [
          "19:30 h — Rezo del Santo Rosario",
          "20:00 h — Celebración de la Santa Misa",
        ],
      },
      {
        id: "dolores-19-septiembre",
        fecha: "19 de septiembre",
        lineas: [
          "19:30 h — Rezo del Santo Rosario",
          "20:00 h — Celebración de la Santa Misa",
        ],
      },
      {
        id: "dolores-20-septiembre",
        fecha: "20 de septiembre",
        lineas: [
          "10:00 h — Rosario Matutino presidido por la venerada imagen",
          "12:00 h — Solemne Función Principal",
        ],
      },
    ],
  },

  {
    advocacionId: "angustias",
    titulo: "Cultos",
    subtitulo: "Cultos en honor de Ntra. Sra. de las Angustias",
    bloques: [
      {
        id: "angustias-17,18y19-septiembre",
        fecha: "17, 18 y 19 de septiembre",
        lineas: [
          "19:40 h — Santo Rosario y Santa Misa",
        ],
      },
      {
        id: "angustias-18-septiembre",
        fecha: "18 de septiembre",
        lineas: [
          "Después de la Santa Misa y el Pregón-Exaltación a la Santísima Virgen de las Angustias",
        ],
      },
      {
        id: "angustias-20-septiembre",
        titulo: "Solemne Función Principal",
        fecha: "20 de septiembre",
        lineas: [
          "11:00 h — Solemne Función Principal",
          "Al finalizar la Santa Misa — Procesión Solemne",
        ],
      },
    ],
  },

  {
    advocacionId: "misericordia",
    titulo: "Cultos",
    subtitulo: "En honor al Santísimo Cristo de la Misericordia",
    bloques: [
      {
        id: "misericordia-26-septiembre",
        fecha: "26 de septiembre",
        lineas: [
          "20:00 h — Solemne Misa por los hermanos difuntos",
        ],
      },
      {
        id: "misericordia-27-septiembre",
        titulo: "Función Solemne",
        fecha: "27 de septiembre",
        lineas: [
          "12:30 h — Función Solemne en honor al Santísimo Cristo de la Misericordia",
          "Al finalizar los cultos — Procesión por las calles del barrio",
        ],
      },
    ],
  },

  {
    advocacionId: "guadalupe",
    titulo: "Solemne Triduo",
    subtitulo: "Cultos en honor de Ntra. Sra. de Guadalupe",
    bloques: [
      {
        id: "guadalupe-triduo",
        fecha: "Del 6 al 8 de septiembre",
        lineas: [
          "19:30 h — Santo Rosario y ejercicio del Triduo",
          "20:00 h — Santa Misa y Salve cantada",
        ],
      },
      {
        id: "guadalupe-8-septiembre",
        titulo: "Festividad de Ntra. Sra. de Guadalupe",
        fecha: "8 de septiembre",
        lineas: [
          "20:00 h — Solemne Celebración Eucarística y Procesión",
          "Al regreso — Consagración a la Virgen, Himno y Besamanto",
        ],
      },
      {
        id: "guadalupe-9-septiembre",
        titulo: "Misa por los hermanos fallecidos",
        fecha: "9 de septiembre",
        lineas: [
          "19:30 h — Santo Rosario",
          "20:00 h — Santa Misa por los hermanos fallecidos",
        ],
      },
    ],
  },

  {
    advocacionId: "alcazar",
    titulo: "Cultos",
    subtitulo: "Cultos en honor de Santa María del Alcázar",
    bloques: [
      {
        id: "alcazar-24y25-septiembre",
        fecha: "24 y 25 de septiembre",
        lineas: [
          "19:00 h — Santo Rosario y ejercicio del Triduo",
          "19:30 h — Santa Misa",
        ],
      },
      {
        id: "alcazar-26-septiembre",
        fecha: "26 de septiembre",
        lineas: [
          "19:00 h — Santa Misa",
        ],
      },
      {
        id: "alcazar-27-septiembre",
        titulo: "Fiesta principal",
        fecha: "27 de septiembre",
        lineas: [
          "11:00 h — Santa Misa",
          "12:00 h — Procesión",
        ],
      },
    ],
  },

  {
    advocacionId: "sagrario",
    titulo: "Octavario",
    subtitulo: "Cultos en honor de Ntra. Sra. del Sagrario",
    bloques: [
      {
        id: "sagrario-7-agosto",
        fecha: "7 de agosto",
        lineas: [
          "19:00 h — Descorrimiento del velo y traslado de la imagen desde su capilla al altar y comienzo del Octavario",
        ],
      },
      {
        id: "sagrario-octavario",
        fecha: "Del 8 al 14 de agosto",
        lineas: [
          "19:00 h — Rosario y Oración",
          "19:30 h — Santa Misa con predicación",
        ],
      },
      {
        id: "sagrario-15-agosto",
        titulo: "Solemnidad de la Asunción de la Virgen María",
        fecha: "15 de agosto",
        lineas: [
          "07:00 h — Santa Misa",
          "08:00 h — Santa Misa",
          "09:00 h — Santa Misa",
          "11:00 h — Misa Estacional",
          "Al finalizar — Solemne Procesión con la venerada imagen de Ntra. Sra. del Sagrario",
        ],
      },
    ],
  },

  {
    advocacionId: "carmen-carmelitas",
    titulo: "Solemne Novena",
    subtitulo: "Cultos en honor de la Virgen del Carmen",
    bloques: [
      {
        id: "carmen-carmelitas-novena",
        fecha: "Del 7 al 16 de julio",
        lineas: [
          "19:30 h — Santo Rosario",
          "20:00 h — Santa Eucaristía",
        ],
      },
      {
        id: "carmen-carmelitas-14-julio",
        titulo: "Actos destacados",
        fecha: "14 de julio",
        lineas: [
          "20:00 h — Fiesta de los Beatos Mártires Carmelitas y solemne entrada en el templo de la imagen procesional de la Virgen del Carmen",
        ],
      },
      {
        id: "carmen-carmelitas-15-julio",
        fecha: "15 de julio",
        lineas: [
          "20:00 h — Colecta para las flores de las andas, imposición del Escapulario a los nuevos cofrades y presentación de los niños a la Virgen",
        ],
      },
      {
        id: "carmen-carmelitas-16-julio",
        titulo: "Solemnidad de la Virgen del Carmen",
        fecha: "16 de julio",
        lineas: [
          "08:00 h — Rosario de la Aurora",
          "09:00 h — Santa Misa",
          "10:00 h — Santa Misa",
          "12:30 h — Santa Misa",
          "20:00 h — Solemne Eucaristía",
          "Al finalizar — Solemne Procesión",
        ],
      },
    ],
  },

  {
    advocacionId: "carmen-san-andres",
    titulo: "Solemne Triduo",
    subtitulo: "Cultos en honor de la Virgen del Carmen de San Andrés",
    bloques: [
      {
        id: "carmen-san-andres-triduo",
        fecha: "9, 10 y 11 de julio",
        lineas: [
          "19:00 h — Triduo y Santa Misa",
        ],
      },
      {
        id: "carmen-san-andres-11-julio",
        titulo: "Procesión",
        fecha: "11 de julio",
        lineas: [
          "Al finalizar la Santa Misa — Solemne Procesión",
        ],
      },
      {
        id: "carmen-san-andres-12-julio",
        fecha: "12 de julio",
        lineas: [
          "12:30 h — Solemne Celebración Eucarística",
        ],
      },
    ],
  },

  /* ==========================================
     NUESTRA SEÑORA DEL CONSUELO
     CULTOS DE MAYO DE 2026 · SANTOS JUSTO Y PASTOR
  ========================================== */

  {
    advocacionId: "consuelo",
    titulo: "Solemnes Cultos",
    subtitulo: "Cultos en honor de Nuestra Señora del Consuelo",
    bloques: [
      {
        id: "consuelo-8-mayo",
        fecha: "8 de mayo",
        lineas: [
          "18:30 h — Rosario y Solemne Eucaristía",
          "Al término — Canto de la Salve",
        ],
      },
      {
        id: "consuelo-9-mayo",
        fecha: "9 de mayo",
        lineas: [
          "18:30 h — Rosario y Solemne Eucaristía",
          "Al finalizar — Ofrenda floral y Salve",
        ],
      },
      {
        id: "consuelo-10-mayo",
        titulo: "Solemne Función Principal",
        fecha: "10 de mayo",
        lineas: [
          "12:30 h — Solemne Función Principal",
          "A continuación — Salve y Besaescapulario",
        ],
      },
    ],
  },

  /* ==========================================
     VIRGEN DEL CARMEN DE SAN ANDRÉS
     PROCESIÓN DE NOVIEMBRE · 2026
  ========================================== */

  {
    id: "carmen-san-andres-noviembre",
    advocacionId: "carmen-san-andres",
    titulo: "Procesión y Santa Misa",
    subtitulo: "Cultos en honor de Nuestra Señora del Carmen de San Andrés",
    bloques: [
      {
        id: "carmen-san-andres-14-noviembre-ida",
        titulo: "Procesión de ida",
        fecha: "14 de noviembre",
        lineas: [
          "17:15 h — Salida desde la iglesia de San Andrés (hora del cartel anterior, pendiente de confirmar para el día 14)",
          "Itinerario anunciado inicialmente: plaza de San Andrés, plaza de Santa Isabel, travesía de Santa Isabel, calle Santa Úrsula, plaza del Salvador, calle Rojas, calle Aljibillos, plaza de Valdecaleros, calle de las Bulas, plaza de la Cruz, plaza del Colegio de Doncellas, plaza Cardenal Silíceo, cuesta del Cohete, cuesta de Santa Leocadia y plaza de Santa Teresa de Jesús",
        ],
      },
      {
        id: "carmen-san-andres-14-noviembre-misa",
        titulo: "Santa Misa en el templo de destino",
        fecha: "14 de noviembre",
        lineas: [
          "Al llegar — Santa Misa en la iglesia del Convento de San José y de Cristo Crucificado (Carmelitas Descalzas), plaza de Santa Teresa de Jesús",
          "Al finalizar la Santa Misa — Procesión de regreso a San Andrés por el mismo itinerario",
          "Recorrido y hora de salida pendientes de confirmar para la nueva fecha del 14 de noviembre",
        ],
      },
    ],
  },

  /* ==========================================
     VIRGEN DE LA GUÍA
  ========================================== */

  {
    advocacionId: "guia",
    titulo: "Solemnes Cultos",
    subtitulo: "Cultos en honor de Nuestra Señora de la Guía",
    bloques: [
      {
        id: "guia-9-octubre",
        titulo: "Santo Rosario, Misa y Triduo",
        fecha: "Viernes 9 de octubre",
        lineas: [
          "18:30 h — Santo Rosario",
          "19:00 h — Santa Misa y Triduo",
          "Lugar: Parroquia de Santa Bárbara",
        ],
      },
      {
        id: "guia-10-octubre",
        titulo: "Misa por los hermanos fallecidos",
        fecha: "Sábado 10 de octubre",
        lineas: [
          "17:00 h — Santo Rosario",
          "17:30 h — Santa Misa por los hermanos fallecidos",
          "Lugar: Ermita de Nuestra Señora de la Guía",
        ],
      },
      {
        id: "guia-11-octubre",
        titulo: "Santo Rosario, Misa y Triduo",
        fecha: "Domingo 11 de octubre",
        lineas: [
          "18:30 h — Santo Rosario",
          "19:00 h — Santa Misa y Triduo",
          "Lugar: Parroquia de Santa Bárbara",
        ],
      },
      {
        id: "guia-12-octubre",
        titulo: "Festividad de Nuestra Señora de la Guía",
        fecha: "Lunes 12 de octubre",
        lineas: [
          "11:30 h — Santa Misa",
          "17:00 h — Solemne Procesión",
          "Lugar: Ermita de Nuestra Señora de la Guía",
        ],
      },
    ],
  },

  /* ==========================================
     NUESTRA SEÑORA DE LA ESTRELLA
     CULTOS DE 2026
  ========================================== */

  {
    advocacionId: "estrella",
    titulo: "Solemne Novenario",
    subtitulo: "Cultos en honor de Nuestra Señora de la Estrella",
    bloques: [
      {
        id: "estrella-novenario",
        titulo: "Solemne Novenario",
        fecha: "Del 5 al 13 de junio",
        lineas: [
          "11:00 h — Santa Misa",
          "19:30 h — Rosario, Novena, Santa Misa y Salve",
        ],
      },
      {
        id: "estrella-fiesta-principal",
        titulo: "Fiesta principal",
        fecha: "14 de junio",
        lineas: [
          "08:30 h — Santa Misa y Salve",
          "12:00 h — Solemne Función Principal",
          "19:00 h — Procesión Gloriosa",
        ],
      },
      {
        id: "estrella-besamanos",
        titulo: "Besamanos",
        fecha: "15 de junio",
        lineas: [
          "18:00 a 20:00 h — Devoto Besamanos",
          "20:00 h — Santa Misa",
        ],
      },
    ],
  },

  
  /* ==========================================
     NUESTRA SEÑORA DE LA ESTRELLA
     MES DEL ROSARIO · OCTUBRE 2026
  ========================================== */

  {
    id: "estrella-octubre",
    advocacionId: "estrella",
    titulo: "Mes del Rosario",
    subtitulo: "Cultos de octubre junto a Nuestra Señora de la Estrella",
    bloques: [
      {
        id: "estrella-octubre-diario",
        titulo: "Cultos de lunes a sábado",
        fecha: "Durante el mes de octubre",
        lineas: [
          "19:00 h — Rezo del Santo Rosario",
          "19:30 h — Santa Misa",
        ],
      },
      {
        id: "estrella-octubre-jueves",
        titulo: "Exposición del Santísimo",
        fecha: "Todos los jueves de octubre",
        lineas: [
          "18:30 h — Exposición del Santísimo Sacramento",
        ],
      },
      {
        id: "estrella-octubre-3",
        titulo: "XI aniversario de la Coronación Canónica",
        fecha: "Sábado 3 de octubre",
        lineas: [
          "11:00 h — Misa de acción de gracias por el XI aniversario de la Coronación Canónica",
        ],
      },
    ],
  },

  /* ==========================================
     NUESTRA SEÑORA DE LA ESPERANZA
     CULTOS DE 2026
  ========================================== */

 
{
  advocacionId: "esperanza",
  titulo: "Solemne Novena",
  subtitulo: "Cultos en honor de Nuestra Señora de la Esperanza",

  bloques: [
    {
      id: "esperanza-novena",
      meses: ["MAYO", "JUNIO"],
      titulo: "Solemne Novena",
      fecha: "Del 25 de mayo al 2 de junio",
      lineas: [
        "19:00 h — Santo Rosario, Santa Misa y Novena",
      ],
    },
    {
      id: "esperanza-voto",
      meses: ["MAYO"],
      titulo: "Procesión del Voto",
      fecha: "26 de mayo",
      lineas: [
        "08:00 h — Misa del Peregrino",
        "08:45 h — Procesión del Voto",
      ],
    },
    {
      id: "esperanza-cultos-dominicales",
      meses: ["MAYO"],
      titulo: "Cultos dominicales",
      fecha: "31 de mayo",
      lineas: [
        "11:00 h — Santa Misa y Novena",
      ],
    },
    {
      id: "esperanza-octava",
      meses: ["JUNIO"],
      titulo: "Octava",
      fecha: "2 de junio",
      lineas: [
        "19:00 h — Santa Misa y Novena",
        "19:45 h — Procesión de la Octava",
      ],
    },
  ],
},


  
{
  advocacionId: "paz",
  titulo: "Solemne Triduo",
  subtitulo: "Cultos en honor de Nuestra Señora de la Paz",

  bloques: [
    {
      id: "paz-triduo",
      titulo: "Solemne Triduo",
      fecha: "21, 22 y 23 de mayo",
      lineas: [
        "19:00 h — Santo Rosario, Santa Misa, ejercicio del Triduo y Salve",
      ],
    },
    {
      id: "paz-fiesta-principal",
      titulo: "Fiesta principal",
      fecha: "24 de mayo",
      lineas: [
        "11:00 h — Solemne Función Principal",
        "Al finalizar — Procesión Gloriosa",
      ],
    },
  ],
},


  /* ==========================================
     NUESTRA SEÑORA DE LA ESPERANZA
     FIESTA DEL PATROCINIO · 2026
  ========================================== */

  {
    id: "esperanza-patrocinio",
    advocacionId: "esperanza",
    titulo: "Fiesta del Patrocinio",
    subtitulo: "Cultos en honor de Nuestra Señora de la Esperanza",
    bloques: [
      {
        id: "esperanza-patrocinio-misa",
        titulo: "Santa Misa",
        fecha: "8 de noviembre",
        lineas: [
          "11:00 h — Santa Misa",
          "Lugar — Iglesia de San Cipriano",
        ],
      },
    ],
  },

/* ==========================================
   NUESTRA SEÑORA DEL ROSARIO
========================================== */

{
  advocacionId: "rosario",
  titulo: "Solemne Culto",
  subtitulo: "Cultos en honor de Nuestra Señora del Rosario",

  bloques: [
    {
      id: "rosario-11-octubre",
      titulo: "Solemne Culto",
      fecha: "11 de octubre",
      lineas: [
        "12:00 h — Santa Misa en honor de Nuestra Señora del Rosario",
        "Al finalizar — Devota Procesión por las calles del barrio",
      ],
    },
  ],
},


  /* ==========================================
     NUESTRA SEÑORA DEL AMPARO
     SOLEMNES CULTOS · OCTUBRE DE 2026
  ========================================== */

  {
    advocacionId: "amparo",
    titulo: "Solemnes Cultos",
    subtitulo: "En honor de Nuestra Señora del Amparo",
    bloques: [
      {
        id: "amparo-22-octubre",
        fecha: "22 de octubre",
        lineas: [
          "19:00 h — Rezo del Santo Rosario",
          "19:30 h — Santa Misa",
        ],
      },
      {
        id: "amparo-23-octubre",
        fecha: "23 de octubre",
        lineas: [
          "19:00 h — Rezo del Santo Rosario",
          "19:30 h — Santa Misa",
        ],
      },
      {
        id: "amparo-24-octubre",
        titulo: "Solemne Procesión y Misa de Difuntos",
        fecha: "24 de octubre",
        lineas: [
          "17:30 h — Solemne Procesión",
          "19:30 h — Santa Misa por los difuntos de la Hermandad",
        ],
      },
      {
        id: "amparo-25-octubre",
        titulo: "Función Principal",
        fecha: "25 de octubre",
        lineas: [
          "11:00 h — Función Principal",
          "Imposición de medallas y juramento de los nuevos hermanos",
          "Oficia el Rvdo. Sr. D. Gustavo Johansson de Terry",
        ],
      },
    ],
  },

];
