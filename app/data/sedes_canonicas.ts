import type { SedeCanonicaData } from "../types/sede_canonica";

/* ==========================================
   SEDES CANÓNICAS · GLORIA VIVA · TOLEDO

   Sedes existentes + nuevas sedes de gloria.
   Los horarios de las siete sedes originales se conservan
   según las capturas aportadas. Las nuevas sedes proceden
   de fuentes consultadas en octubre de 2026; los horarios
   no confirmados como públicos no se inventan.

   Los IDs enlazan con app/data/cofradia.ts.
========================================== */

export const sedesCanonicas: SedeCanonicaData[] = [
  {
    id: "san-andres",
    slug: "san-andres",
    nombre: "Iglesia de San Andrés",
    direccion: "Plaza de San Andrés, 2 · 45002 Toledo",
    descripcionBreve:
      "Templo histórico en el que conviven elementos mudéjares y góticos con transformaciones barrocas realizadas durante la remodelación del siglo XVII. Su arquitectura conserva la huella de las distintas etapas históricas que han configurado la iglesia a lo largo de los siglos.",
    usoActual: "CULTO",
    horarios: [
      {
        id: "san-andres-1",
        texto: "Lunes a sábados y vísperas",
        hora: "19:30",
      },
      {
        id: "san-andres-2",
        texto: "Domingos y solemnidades",
        hora: "12:30",
      },
    ],
    horariosUrl: null,
    cofradiasIds: ["alegria", "carmen-san-andres", "paz"],
    existe: true,
  },
  {
    id: "san-cipriano",
    slug: "san-cipriano",
    nombre: "Iglesia de San Cipriano",
    direccion: "Plaza de San Cipriano, 7 · 45002 Toledo",
    descripcionBreve:
      "Templo de origen medieval documentado ya en 1125 como parroquia latina y uno de los más antiguos de Toledo. Destaca especialmente su torre mudéjar, que conserva parte de la estructura original del siglo XII. En su interior recibe culto durante todo el año la Virgen de la Esperanza.",
    usoActual: "CULTO",
    horarios: [
      {
        id: "san-cipriano-1",
        texto: "Domingos",
        hora: "11:00",
      },
    ],
    horariosUrl: null,
    cofradiasIds: ["esperanza"],
    existe: true,
  },
  {
    id: "santa-leocadia",
    slug: "santa-leocadia",
    nombre: "Iglesia de Santa Leocadia",
    direccion: "Cuesta de Santa Leocadia, 1 · 45002 Toledo",
    descripcionBreve:
      "Templo de origen medieval documentado desde mediados del siglo XII. La tradición toledana lo sitúa sobre el solar de la casa donde nació Santa Leocadia y el edificio conserva importantes testimonios de la arquitectura histórica toledana.",
    usoActual: "CULTO",
    horarios: [
      {
        id: "santa-leocadia-1",
        texto: "Laborables y vísperas · invierno",
        hora: "19:00",
      },
      {
        id: "santa-leocadia-2",
        texto: "Domingos · invierno",
        hora: "12:30",
      },
      {
        id: "santa-leocadia-3",
        texto: "Laborables y vísperas · verano",
        hora: "20:00",
      },
      {
        id: "santa-leocadia-4",
        texto: "Domingos · verano",
        hora: "12:30",
      },
    ],
    horariosUrl: null,
    cofradiasIds: ["misericordia"],
    existe: true,
  },
  {
    id: "el-salvador",
    slug: "el-salvador",
    nombre: "Iglesia del Salvador",
    direccion: "Plaza del Salvador, 5 · 45002 Toledo",
    descripcionBreve:
      "El Salvador es uno de los templos más singulares de Toledo por la superposición de restos romanos y visigodos, su pasado como mezquita y las transformaciones de época cristiana.",
    usoActual: "CULTO_Y_MUSEO",
    horarios: [
      {
        id: "el-salvador-1",
        texto: "Lunes a sábado",
        hora: "19:30",
      },
      {
        id: "el-salvador-2",
        texto: "Domingos",
        hora: "10:00 · 19:30",
      },
    ],
    horariosUrl: null,
    cofradiasIds: ["calvario", "padre-pio"],
    existe: true,
  },
  {
    id: "santas-justa-y-rufina",
    slug: "santas-justa-y-rufina",
    nombre: "Iglesia de las Santas Justa y Rufina",
    direccion: "Calle Santa Justa, 4 · 45001 Toledo",
    descripcionBreve:
      "Parroquia mozárabe documentada desde 1156, levantada sobre un espacio que conserva vestigios de una construcción islámica anterior. Destaca su ábside mudéjar, fechado entre finales del siglo XII y comienzos del XIII. El templo fue profundamente reformado desde 1530 bajo la dirección de Alonso de Covarrubias y conserva elementos de sus distintas etapas históricas.",
    usoActual: "CULTO",
    horarios: [
      {
        id: "santas-justa-y-rufina-1",
        texto: "Laborables y vísperas de festivo",
        hora: "19:00 h",
      },
      {
        id: "santas-justa-y-rufina-2",
        texto: "1.º, 3.º y 5.º domingo de mes y festivos",
        hora: "12:00 h",
      },
    ],
    horariosUrl: null,
    cofradiasIds: ["angustias"],
    existe: true,
  },
  {
    id: "santiago-el-mayor",
    slug: "santiago-el-mayor",
    nombre: "Parroquia de Santiago el Mayor",
    direccion: "Plaza de Santiago del Arrabal, 1 · 45003 Toledo",
    descripcionBreve:
      "Iglesia del siglo XIII situada junto a la Puerta de Bisagra y uno de los grandes conjuntos mudéjares de Toledo. Conocida popularmente como la «Catedral del Mudéjar», destaca por sus grandes proporciones, sus ábsides semicirculares y el empleo característico del ladrillo y la mampostería.",
    usoActual: "CULTO",
    horarios: [],
    horariosUrl: "https://santiagoelmayor.org/misas/",
    cofradiasIds: ["desamparados", "dolores"],
    existe: true,
  },
  {
    id: "san-ildefonso",
    slug: "san-ildefonso",
    nombre: "Parroquia de San Ildefonso",
    direccion: "Calle Méjico, 12, 45004 Toledo",
    descripcionBreve:
      "Parroquia de San Ildefonso de Toledo, sede canónica de la Cofradía de Nuestra Señora del Amparo.",
    usoActual: "CULTO",
    horarios: [
      {
        id: "san-ildefonso-1",
        texto: "Invierno · laborables y vísperas",
        hora: "11:30 · 19:30",
      },
      {
        id: "san-ildefonso-2",
        texto: "Invierno · domingos y festivos",
        hora: "12:30 · 19:30",
      },
      {
        id: "san-ildefonso-3",
        texto: "Verano · laborables y vísperas",
        hora: "11:30 · 20:00",
      },
      {
        id: "san-ildefonso-4",
        texto: "Verano · domingos y festivos",
        hora: "12:30 · 20:00",
      },
    ],
    horariosUrl: null,
    cofradiasIds: ["amparo"],
    existe: true,
  },
  /* ==========================================
     ERMITA DE NUESTRA SEÑORA DE LA ESTRELLA
     Cofradía de Nuestra Señora de la Estrella
  ========================================== */
  {
    id: "ermita-estrella",
    slug: "ermita-estrella",
    nombre: "Ermita de Nuestra Señora de la Estrella",
    direccion: "Callejón de la Estrella, 1 · 45003 Toledo",
    descripcionBreve:
      "Ermita histórica del barrio de Santiago del Arrabal, vinculada desde sus orígenes a la Cofradía de Nuestra Señora de la Estrella. La construcción del templo actual se emprendió en 1611 siguiendo las trazas de Juan Bautista Monegro, sobre el emplazamiento de una ermita anterior. Conserva su función devocional como sede de la hermandad.",
    usoActual: "CULTO",
    // Según petición del proyecto: anunciar los actos de la cofradía,
    // sin asignarles una hora fija que no se haya confirmado.
    horarios: [
      {
        id: "ermita-estrella-1",
        texto: "",
        hora: "Durante actos de la Hermandad",
      },
    ],
    horariosUrl: null,
    cofradiasIds: ["estrella"],
    existe: false,
  },
  /* ==========================================
     CONVENTO DEL ESPÍRITU SANTO · CARMELITAS
     Nuestra Señora del Carmen · devoción popular
  ========================================== */
  {
    id: "convento-espiritu-santo",
    slug: "convento-espiritu-santo",
    nombre: "Convento del Espíritu Santo",
    direccion: "Plaza de los Carmelitas, 0 · 45003 Toledo",
    descripcionBreve:
      "Convento de los Carmelitas Descalzos, comunidad establecida en Toledo a finales del siglo XVI. El conjunto actual se levantó fundamentalmente entre 1643 y 1655, con una iglesia barroca de tres naves y cúpula sobre el crucero. En el templo se venera a Nuestra Señora del Carmen, cuya devoción y cultos están ligados a esta comunidad religiosa.",
    usoActual: "CULTO",
    // Horarios publicados en directorios de 2026; confirmar posibles cambios.
    horarios: [
      {
        id: "convento-espiritu-santo-1",
        texto: "Lunes a sábados · capilla de la comunidad",
        hora: "09:00",
      },
      {
        id: "convento-espiritu-santo-2",
        texto: "Domingos · horario publicado",
        hora: "10:00 · 12:30",
      },
    ],
    horariosUrl: null,
    cofradiasIds: ["carmen-carmelitas"],
    existe: false,
  },
  /* ==========================================
     IGLESIA DE SAN MIGUEL EL ALTO
     Nuestra Señora de los Remedios
  ========================================== */
  {
    id: "san-miguel-el-alto",
    slug: "san-miguel-el-alto",
    nombre: "Iglesia de San Miguel el Alto",
    direccion: "Calle Cobertizo de San Miguel, 2 · 45001 Toledo",
    descripcionBreve:
      "Antigua parroquia toledana de origen medieval, relacionada tradicionalmente con la presencia de la Orden del Temple. Destaca su torre mudéjar de finales del siglo XIII o comienzos del XIV y la singular disposición del templo sobre un cobertizo. La iglesia fue transformada en el siglo XVII y volvió a utilizarse para el culto tras su restauración del siglo XX.",
    usoActual: "CULTO",
    // Un directorio publica estos horarios estacionales distintos.
    // Se señalan como orientativos hasta confirmación parroquial.
    horarios: [
      {
        id: "san-miguel-el-alto-1",
        texto: "Sábados · verano (horario orientativo)",
        hora: "19:00",
      },
      {
        id: "san-miguel-el-alto-2",
        texto: "Domingos · invierno (horario orientativo)",
        hora: "11:00",
      },
    ],
    horariosUrl: null,
    cofradiasIds: ["remedios"],
    existe: false,
  },
  /* ==========================================
     IMPERIAL MONASTERIO DE SAN CLEMENTE
     Nuestra Señora de la Salud de San Clemente
  ========================================== */
  {
    id: "san-clemente",
    slug: "san-clemente",
    nombre: "Convento de San Clemente",
    direccion: "Calle San Clemente, 1 · 45002 Toledo",
    descripcionBreve:
      "Convento cisterciense de origen medieval, fundado en el siglo XII y estrechamente unido a la historia religiosa de Toledo. El conjunto monástico conserva dependencias de diferentes épocas y es conocido también por su tradición en la elaboración de mazapán. En este monasterio recibe culto Nuestra Señora de la Salud de San Clemente.",
    usoActual: "CULTO",
    // Figura una misa a las 08:00 en el coro de clausura, pero no se ha
    // confirmado que sea una celebración abierta al público.
    horarios: [
      {
        id: "san-clemente-1",
        texto: "",
        hora: "Durante actos de la Cofradía",
      },
    ],
    horariosUrl: null,
    cofradiasIds: ["salud-clemente"],
    existe: false,
  },
  /* ==========================================
     IGLESIA DE SANTO TOMÉ
     Nuestra Señora de Guadalupe
  ========================================== */
  {
    id: "santo-tome",
    slug: "santo-tome",
    nombre: "Iglesia de Santo Tomé",
    direccion: "Plaza del Conde, 4 · 45002 Toledo",
    descripcionBreve:
      "Parroquia histórica documentada desde el siglo XII, reedificada a comienzos del XIV gracias al patrocinio de Gonzalo Ruiz de Toledo, señor de Orgaz. Destaca por su torre mudéjar y por custodiar el célebre lienzo de El Greco «El entierro del Señor de Orgaz». Mantiene su actividad parroquial y es sede de la devoción a Nuestra Señora de Guadalupe.",
    usoActual: "CULTO_Y_MUSEO",
    // Horarios de misa de la web oficial de Santo Tomé.
    horarios: [],
    horariosUrl: "https://santotome.org/parroquia/",
    cofradiasIds: ["guadalupe"],
    existe: false,
  },
  /* ==========================================
     IGLESIA DE LOS SANTOS JUSTO Y PASTOR
     Cofradía pendiente de incorporar
  ==========================================   */
  {
    id: "santos-justo-y-pastor",
    slug: "santos-justo-y-pastor",
    nombre: "Iglesia de los Santos Justo y Pastor",
    direccion: "Plaza de San Justo, 6 · 45001 Toledo",
    descripcionBreve:
      "Templo parroquial fundado tras la conquista cristiana de Toledo en el siglo XI y transformado a lo largo de los siglos posteriores. Conserva elementos mudéjares y destaca su capilla del Corpus Christi, con ornamentación histórica de yeserías y azulejería. La parroquia mantiene celebraciones religiosas y su vinculación con la tradición espiritual toledana.",
    usoActual: "CULTO",
    // Horarios orientativos: los directorios difieren en algunas misas
    // de invierno; se aconseja confirmarlos con la parroquia.
    horarios: [
      {
        id: "santos-justo-y-pastor-1",
        texto: "Laborables · invierno (horario orientativo)",
        hora: "18:00",
      },
      {
        id: "santos-justo-y-pastor-2",
        texto: "Laborables · verano (horario orientativo)",
        hora: "19:00",
      },
      {
        id: "santos-justo-y-pastor-3",
        texto: "Domingos y festivos (horario orientativo)",
        hora: "12:30",
      },
    ],
    horariosUrl: null,
    cofradiasIds: ["consuelo"], // Se añadirá una cofradía posteriormente.
    existe: false,
  },

  /* ==========================================
     SANTA IGLESIA CATEDRAL PRIMADA
     Nuestra Señora Santa María del Alcázar
  ========================================== */
  {
    id: "catedral-primada",
    slug: "catedral-primada",
    nombre: "Santa Iglesia Catedral Primada",
    direccion: "Calle Cardenal Cisneros, 1 · 45002 Toledo",
    descripcionBreve:
      "Catedral metropolitana de Toledo, uno de los principales conjuntos de arquitectura gótica de España. Su construcción comenzó en el siglo XIII y se desarrolló durante generaciones, reuniendo un extraordinario patrimonio artístico y litúrgico. Continúa siendo un centro vivo de celebración religiosa, con misas diarias y liturgia hispano-mozárabe.",
    usoActual: "CULTO",
    // Fuente: calendario de cultos de la Catedral Primada.
    horarios: [],
    horariosUrl: "https://www.catedralprimada.es/culto/horarios-misas/",
    cofradiasIds: ["sagrario","alcazar"],
    existe: false,
  },
  /* ==========================================
     ERMITA DE NUESTRA SEÑORA DE LA GUÍA
     Cofradía de Nuestra Señora de la Guía
  ========================================== */
  {
    id: "ermita-guia",
    slug: "ermita-guia",
    nombre: "Ermita de Nuestra Señora de la Guía",
    direccion: "Academia de Infantería, 45006 Toledo",
    descripcionBreve:
      "Ermita situada en los terrenos de la Academia de Infantería, sobre un alto que domina el barrio de Santa Bárbara. Fundada en 1432 bajo la advocación de la Natividad, fue reconstruida en varias ocasiones tras incendios y deterioros. En ella se venera a Nuestra Señora de la Guía y se celebran los cultos y la romería organizados por su cofradía.",
    usoActual: "CULTO",
    // No hay un horario fijo: se celebran misas durante los actos de la cofradía.
    horarios: [
      {
        id: "ermita-guia-1",
        texto: "",
        hora: "Durante actos de la Cofradía",
      },
    ],
    horariosUrl: null,
    cofradiasIds: ["guia"],
    existe: false,
  },
  /* ==========================================
     ERMITA DE SAN JERÓNIMO
     HERMANDAD DE SAN JERÓNIMO · CIGARRALES
  ========================================== */
  {
    id: "ermita-san-jeronimo",
    slug: "ermita-san-jeronimo",
    nombre: "Ermita de San Jerónimo",
    direccion: "Subida de San Jerónimo · Toledo",
    descripcionBreve:
      "Pequeña ermita situada en el antiguo barrio de la Solanilla, entre los cigarrales próximos al puente de San Martín. Se levantó en 1611 por iniciativa del canónigo Jerónimo de Miranda y fue consagrada en 1612. De una sola nave, presenta bóveda de medio cañón con lunetos, portada sencilla y espadaña. Fue restaurada en 1845 y rehabilitada entre 2005 y 2006. En ella se celebran los cultos y la tradicional romería de San Jerónimo.",
    usoActual: "CULTO",
    horarios: [
      {
        id: "ermita-san-jeronimo-1",
        texto: "",
        hora: "Durante actos de la Hermandad",
      },
    ],
    horariosUrl: null,
    cofradiasIds: ["jeronimo"],
    existe: false,
  },
];

export function getSedeCanonicaPorSlug(slug: string) {
  return sedesCanonicas.find((sede) => sede.slug === slug) ?? null;
}
