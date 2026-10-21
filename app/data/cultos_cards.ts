
import type { CultoCardData } from "../types/culto_card";

export const cultosCards: CultoCardData[] = [
  {
    id: "angustias",
    procesionesIds: ["angustias-principal"],
    nombre: "Angustias",
    fecha: "18 al 20 de SEPTIEMBRE",
    mes: "SEPTIEMBRE",
    diaInicio: 18,
    imagenUrl: "/cofradias/penitencia/angustias/angustias_CE.avif",
    imagenMovilUrl: "/cofradias/penitencia/angustias/angustias_CM.avif",
    imagenAlt: "Nuestra Señora de las Angustias",
    colorFondo: "#0F172A",
    cultosHref: "/cultos/septiembre/desktop/angustias",
    procesionHref: "/procesiones/angustias",
    titleSize: "large",
    imagePosition: "50% 30%",
  },

  {
    id: "alegria",
    procesionesIds: ["alegria-infantil", "alegria-principal"],
    nombre: "Alegría",
    fecha: "18 al 20 de SEPTIEMBRE",
    mes: "SEPTIEMBRE",
    diaInicio: 18,
    imagenUrl: "/cofradias/gloria/alegria/alegria_CE.avif",
    imagenMovilUrl: "/cofradias/gloria/alegria/alegria_CM.avif",
    imagenAlt: "Virgen de la Alegría",
    colorFondo: "#0F6558",
    cultosHref: "/cultos/septiembre/desktop/alegria",
    procesionHref: "/procesiones/alegria",
    titleSize: "large",
    imagePosition: "50% 25%",
  },

  {
    id: "calvario",
    procesionesIds: ["calvario-principal"],
    cofradiaId: "calvario",
    nombre: "Calvario",
    fecha: "11 al 13 de SEPTIEMBRE",
    mes: "SEPTIEMBRE",
    diaInicio: 11,
    imagenUrl: "/cofradias/penitencia/salvador/calvario/calvario_CE.avif",
    imagenMovilUrl: "/cofradias/penitencia/salvador/calvario/calvario_CM.avif",
    imagenAlt: "Cristo del Calvario",
    colorFondo: "#7B163F",
    cultosHref: "/cultos/septiembre/desktop/calvario",
    procesionHref: "/procesiones/calvario",
    titleSize: "large",
    imagePosition: "50% 25%",
  },

  
  {
    id: "descendimiento",
    procesionesIds: ["descendimiento-ida-extraordinaria", "descendimiento-regreso-extraordinario"],
    nombre: "Descendimiento",
    fecha: "12 y 13 de SEPTIEMBRE",
    mes: "SEPTIEMBRE",
    diaInicio: 12,
    imagenUrl: "/extraordinario/2026/descen_CE.avif",
    imagenMovilUrl: "/extraordinario/2026/descen_CM.avif",
    imagenAlt: "Cristo del Descendimiento",
    colorFondo: "#111111",
    cultosHref: "/cultos/septiembre/desktop/descendimiento",
    procesionHref: "/procesiones/descendimiento",
    etiquetaSuperior: "Extraordinaria",
    titleSize: "small",
    imagePosition: "50% 30%",
  },
  

  {
    id: "dolores",
    procesionesIds: ["dolores-rosario-matutino"],
    nombre: "Dolores",
    fecha: "18 al 21 de SEPTIEMBRE",
    mes: "SEPTIEMBRE",
    diaInicio: 18,
    imagenUrl: "/cofradias/penitencia/dolores/dolores_CE.avif",
    imagenMovilUrl: "/cofradias/penitencia/dolores/dolores_CM.avif",
    imagenAlt: "Virgen de los Dolores",
    colorFondo: "#1B1A1A",
    cultosHref: "/cultos/septiembre/desktop/dolores",
    procesionHref: "/procesiones/dolores",
    titleSize: "large",
    imagePosition: "50% 25%",
  },

  {
    id: "misericordia",
    procesionesIds: ["misericordia-principal"],
    nombre: "Misericordia",
    fecha: "26 y 27 de SEPTIEMBRE",
    mes: "SEPTIEMBRE",
    diaInicio: 26,
    imagenUrl: "/cofradias/penitencia/misericordia/misericordia_CE.avif",
    imagenMovilUrl: "/cofradias/penitencia/misericordia/misericordia_CM.avif",
    imagenAlt: "Cristo de la Misericordia",
    colorFondo: "#5C1D1D",
    cultosHref: "/cultos/septiembre/desktop/misericordia",
    procesionHref: "/procesiones/misericordia",
    titleSize: "medium",
    titleSizeMovil: "small",
    imagePosition: "50% 20%",
  },

  
  {
    id: "padre-pio",
    procesionesIds: ["padre-pio-principal"],
    nombre: "Padre Pío",
    fecha: "14 al 23 de SEPTIEMBRE",
    mes: "SEPTIEMBRE",
    diaInicio: 14,
    imagenUrl: "/cofradias/devocion/padre_pio/padre-pio_CE.avif",
    imagenMovilUrl: "/cofradias/devocion/padre_pio/padre-pio_CM.avif",
    imagenAlt: "Padre Pío",
    colorFondo: "#4D2E22",
    cultosHref: "/cultos/septiembre/desktop/padre-pio",
    procesionHref: "/procesiones/padre-pio",
    titleSize: "large",
    imagePosition: "50% 20%",
  },


  {
    id: "remedios",
    procesionesIds: ["remedios-principal"],
    nombre: "Remedios",
    fecha: "5 y 6 de SEPTIEMBRE",
    mes: "SEPTIEMBRE",
    diaInicio: 5,
    imagenUrl: "/cofradias/gloria/remedios/remedios_CE.avif",
    imagenMovilUrl: "/cofradias/gloria/remedios/remedios_CM.avif",
    imagenAlt: "Virgen de los Remedios",
    colorFondo: "#036B8F",
    cultosHref: "/cultos/septiembre/desktop/remedios",
    procesionHref: "/procesiones/remedios",
    titleSize: "large",
    imagePosition: "50% 25%",
  },

  /* ==========================================
     NUESTRA SEÑORA DE LOS REMEDIOS
     CULTOS DE LA CANDELARIA · ENERO / FEBRERO 2026
  ========================================== */

  {
    id: "remedios-candelaria",
    cofradiaId: "remedios",
    advocacionId: "remedios",
    cultoId: "remedios-candelaria",
    nombre: "Remedios",
    fecha: "30 de ENERO al 1 de FEBRERO",
    mes: "ENERO",
    meses: ["ENERO", "FEBRERO"],
    fechaPorMes: {
      ENERO: "30 y 31 de ENERO",
      FEBRERO: "1 de FEBRERO",
    },
    diaInicio: 30,
    diaInicioPorMes: {
      ENERO: 30,
      FEBRERO: 1,
    },
    // Actos litúrgicos de la Candelaria, sin salida procesional de la imagen.
    procesionesIds: [],

    imagenUrl: "/cofradias/gloria/remedios/remedios_CE.avif",
    imagenMovilUrl: "/cofradias/gloria/remedios/remedios_CM.avif",
    imagenAlt: "Nuestra Señora de los Remedios de Toledo",
    colorFondo: "#036B8F",
    titleSize: "large",
    imagePosition: "50% 25%",
  },

  /* ==========================================
     NUESTRA SEÑORA DE LA SALUD DE SAN CLEMENTE
     PROCESIÓN DEL 8 DE FEBRERO DE 2026
  ========================================== */

  {
    id: "salud-febrero",
    cofradiaId: "salud",
    advocacionId: "salud",
    cultoId: "salud-febrero",
    nombre: "Salud",
    subnombre: "San Clemente",
    fecha: "8 de FEBRERO",
    mes: "FEBRERO",
    diaInicio: 8,

    imagenUrl: "/cofradias/gloria/salud_clemente/salud_clemente_CE.avif",
    imagenMovilUrl: "/cofradias/gloria/salud_clemente/salud_clemente_CM.avif",
    imagenAlt: "Nuestra Señora de la Salud de San Clemente",
    colorFondo: "#7A6A52",
    titleSize: "large",
    imagePosition: "50% 20%",
    procesionesIds: ["salud-febrero"],
  },

  {
    id: "salud",
    procesionesIds: ["salud-principal"],
    nombre: "Salud",
    fecha: "6 al 8 de SEPTIEMBRE",
    mes: "SEPTIEMBRE",
    diaInicio: 6,
    imagenUrl: "/cofradias/gloria/salud_clemente/salud_clemente_CE.avif",
    imagenMovilUrl: "/cofradias/gloria/salud_clemente/salud_clemente_CM.avif",
    imagenAlt: "Virgen de la Salud",
    colorFondo: "#7A6A52",
    cultosHref: "/cultos/septiembre/desktop/salud",
    procesionHref: "/procesiones/salud",
    titleSize: "large",
    imagePosition: "50% 20%",
  },

  {
    id: "guadalupe",
    procesionesIds: ["guadalupe-principal"],
    nombre: "Guadalupe",
    fecha: "6 al 9 de SEPTIEMBRE",
    mes: "SEPTIEMBRE",
    diaInicio: 6,
    imagenUrl: "/cofradias/gloria/guadalupe/guadalupe_CE.avif",
    imagenMovilUrl: "/cofradias/gloria/guadalupe/guadalupe_CM.avif",
    imagenAlt: "Nuestra Señora de Guadalupe",
    colorFondo: "#4E5B3D",
    titleSize: "medium",
    imagePosition: "50% 25%",
    creditoFoto: {
      nombre: "Toledo Sacro",
      logoUrl: "/colaboradores/toledo_sacro.webp",
      logoAlt: "Toledo Sacro",
    },
  },

  {
    id: "alcazar",
    procesionesIds: ["alcazar-principal"],
    nombre: "Alcázar",
    fecha: "24 al 27 de SEPTIEMBRE",
    mes: "SEPTIEMBRE",
    diaInicio: 24,
    imagenUrl: "/cofradias/gloria/alcazar/alcazar_CE.avif",
    imagenMovilUrl: "/cofradias/gloria/alcazar/alcazar_CM.avif",
    imagenAlt: "Santa María del Alcázar",
    colorFondo: "#1F2B3C",
    titleSize: "large",
    degradado: true,
    imagePosition: "50% 25%",
    creditoFoto: {
      nombre: "Toledo Sacro",
      logoUrl: "/colaboradores/toledo_sacro.webp",
      logoAlt: "Toledo Sacro",
    },
  },

  {
    id: "sagrario",
    procesionesIds: ["sagrario-principal"],
    nombre: "Sagrario",
    subnombre: "Patrona de Toledo",
    fecha: "7 al 15 de AGOSTO",
    mes: "AGOSTO",
    diaInicio: 7,
    imagenUrl: "/cofradias/gloria/sagrario/sagrario_CE.avif",
    imagenMovilUrl: "/cofradias/gloria/sagrario/sagrario_CM.avif",
    imagenAlt: "Nuestra Señora del Sagrario",
    colorFondo: "#8A6B2D",
    titleSize: "large",
    degradado: true,
  },

  {
    id: "carmen-carmelitas",
    procesionesIds: ["carmen-carmelitas-principal"],
    nombre: "Carmen",
    subnombre: "Padres Carmelitas",
    fecha: "7 al 16 de JULIO",
    mes: "JULIO",
    diaInicio: 7,
    colorFondo: "#4A3427",
    imagenUrl: "/cofradias/devocion/carmen_carmelitas/carmen_CE.avif",
    imagenMovilUrl: "/cofradias/devocion/carmen_carmelitas/carmen_CM.avif",
    imagenAlt: "Virgen del Carmen de los Padres Carmelitas",
    titleSize: "large",
    degradado: true,
  },

  {
    id: "carmen-san-andres",
    procesionesIds: ["carmen-san-andres-principal"],
    nombre: "Carmen",
    subnombre: "San Andrés",
    fecha: "9 al 12 de JULIO",
    mes: "JULIO",
    diaInicio: 9,
    colorFondo: "#4A3427",
    imagenUrl: "/cofradias/gloria/carmen/carmen_CE.avif",
    imagenMovilUrl: "/cofradias/gloria/carmen/carmen_CM.avif",
    imagenAlt: "Virgen del Carmen de San Andrés",
    titleSize: "large",
    degradado: true,
  },

  /* ==========================================
     NUESTRA SEÑORA DEL CONSUELO
     DEVOCIÓN POPULAR · MAYO DE 2026
  ========================================== */

  {
    id: "consuelo",
    nombre: "Consuelo",
    fecha: "8 al 10 de MAYO",
    mes: "MAYO",
    diaInicio: 8,

    imagenUrl: "/cofradias/devocion/consuelo/consuelo_CE.avif",
    imagenMovilUrl: "/cofradias/devocion/consuelo/consuelo_CM.avif",
    imagenAlt: "Nuestra Señora del Consuelo de Toledo",

    colorFondo: "#8C7158",
    titleSize: "large",
    imagePosition: "50% 25%",
    procesionesIds: [],
  },

  /* ==========================================
     NUESTRA SEÑORA DEL CARMEN · SAN ANDRÉS
     PROCESIÓN DE NOVIEMBRE DE 2026
  ========================================== */

  {
    id: "carmen-san-andres-noviembre",
    cofradiaId: "carmen-san-andres",
    advocacionId: "carmen-san-andres",
    cultoId: "carmen-san-andres-noviembre",
    nombre: "Carmen",
    subnombre: "San Andrés",
    fecha: "14 de NOVIEMBRE",
    mes: "NOVIEMBRE",
    diaInicio: 14,

    imagenUrl: "/cofradias/gloria/carmen/carmen_CE.avif",
    imagenMovilUrl: "/cofradias/gloria/carmen/carmen_CM.avif",
    imagenAlt: "Nuestra Señora del Carmen de San Andrés",

    colorFondo: "#4A3427",
    titleSize: "large",
    degradado: true,
    procesionesIds: ["carmen-san-andres-noviembre"],
  },

  /* ==========================================
     VIRGEN DE LA GUÍA
     HERMANDAD DE GLORIA
  ========================================== */

  {
    id: "guia",
    procesionesIds: ["guia-principal"],
    nombre: "Guía",
    fecha: "9 al 12 de OCTUBRE",
    mes: "OCTUBRE",
    diaInicio: 9,

    // Imágenes de culto en la carpeta de la cofradía.
    imagenUrl: "/cofradias/gloria/guia/guia_CE.avif",
    imagenMovilUrl: "/cofradias/gloria/guia/guia_CM.avif",
    imagenAlt: "Nuestra Señora de la Guía de Toledo",

    colorFondo: "#590716",
    titleSize: "large",
    imagePosition: "50% 30%",
  },

  /* ==========================================
     NUESTRA SEÑORA DE LOS DESAMPARADOS
     TRIDUO Y PROCESIÓN · JUNIO 2026
  ========================================== */

  {
    id: "desamparados",
    cofradiaId: "desamparados",
    advocacionId: "desamparados",
    cultoId: "desamparados",
    procesionesIds: ["desamparados-principal"],

    nombre: "Desamparados",
    fecha: "18 al 20 de JUNIO",
    mes: "JUNIO",
    diaInicio: 18,

    imagenUrl: "/cofradias/gloria/desamparados/desamparados_CE.avif",
    imagenMovilUrl: "/cofradias/gloria/desamparados/desamparados_CM.avif",
    imagenAlt: "Nuestra Señora de los Desamparados, Toledo",

    colorFondo: "#7B163F",
    titleSize: "small",
    imagePosition: "50% 25%",
  },

  /* ==========================================
     SAN JERÓNIMO
     CULTOS DEL 3 Y 4 DE OCTUBRE DE 2026
  ========================================== */

  {
    id: "jeronimo",
    cofradiaId: "jeronimo",
    advocacionId: "jeronimo",
    cultoId: "jeronimo",
    procesionesIds: [],

    nombre: "San Jerónimo",
    fecha: "3 y 4 de OCTUBRE",
    mes: "OCTUBRE",
    diaInicio: 3,

    imagenUrl: "/cofradias/gloria/jeronimo/jeronimo_CE.avif",
    imagenMovilUrl: "/cofradias/gloria/jeronimo/jeronimo_CM.avif",
    imagenAlt: "Imagen de San Jerónimo venerada en su ermita de Toledo",

    colorFondo: "#7B302F",
    titleSize: "medium",
    imagePosition: "50% 30%",
    degradado: true,
  },

  /* ==========================================
     NUESTRA SEÑORA DE LA ESTRELLA
     HERMANDAD DE GLORIA
  ========================================== */

  {
    id: "estrella",
    procesionesIds: ["estrella-principal"],
    nombre: "Estrella",
    fecha: "5 al 15 de JUNIO",
    mes: "JUNIO",
    diaInicio: 5,

    // Imágenes de culto en la carpeta de la cofradía.
    imagenUrl: "/cofradias/gloria/estrella/estrella_CE.avif",
    imagenMovilUrl: "/cofradias/gloria/estrella/estrella_CM.avif",
    imagenAlt: "Nuestra Señora de la Estrella de Toledo",

    colorFondo: "#385A91",
    titleSize: "large",
    imagePosition: "50% 25%",
  },

  
  /* ==========================================
     NUESTRA SEÑORA DE LA ESTRELLA
     MES DEL ROSARIO · OCTUBRE 2026
  ========================================== */

  {
    id: "estrella-octubre",
    cofradiaId: "estrella",
    advocacionId: "estrella",
    cultoId: "estrella-octubre",
    nombre: "Estrella",
    fecha: "1 al 31 de OCTUBRE",
    mes: "OCTUBRE",
    diaInicio: 1,

    imagenUrl: "/cofradias/gloria/estrella/estrella_CE.avif",
    imagenMovilUrl: "/cofradias/gloria/estrella/estrella_CM.avif",
    imagenAlt: "Nuestra Señora de la Estrella de Toledo",
    colorFondo: "#385A91",
    titleSize: "large",
    imagePosition: "50% 25%",
    // Octubre: cultos sin procesión.
    procesionesIds: [],
  },

  /* ==========================================
     NUESTRA SEÑORA DE LA ESPERANZA
     COFRADÍA DE GLORIA
  ========================================== */

  {
    id: "esperanza",
    procesionesIds: ["esperanza-voto"],
    cofradiaId: "esperanza",
    nombre: "Esperanza",
    fecha: "25 de MAYO al 2 de JUNIO",
    mes: "MAYO",
    meses: ["MAYO", "JUNIO"],
    fechaPorMes: {
      MAYO: "25 al 31 de MAYO",
      JUNIO: "1 y 2 de JUNIO",
    },
    diaInicio: 25,

    diaInicioPorMes: {
      MAYO: 25,
      JUNIO: 1,
    },
    procesionesIdsPorMes: {
      MAYO: ["esperanza-voto"],
      JUNIO: ["esperanza-octava"],
    },

    imagenUrl: "/cofradias/gloria/esperanza/esperanza_CE.avif",
    imagenMovilUrl: "/cofradias/gloria/esperanza/esperanza_CM.avif",
    imagenAlt: "Nuestra Señora de la Esperanza de San Cipriano",

    colorFondo: "#305746",
    titleSize: "large",
    imagePosition: "50% 25%",
  },

  /* ==========================================
     NUESTRA SEÑORA DE LA ESPERANZA
     FIESTA DEL PATROCINIO · NOVIEMBRE
  ========================================== */

  {
    id: "esperanza-patrocinio",
    cofradiaId: "esperanza",
    advocacionId: "esperanza",
    cultoId: "esperanza-patrocinio",

    nombre: "Esperanza",
    fecha: "8 de NOVIEMBRE",
    mes: "NOVIEMBRE",
    diaInicio: 8,

    // Solo hay Santa Misa, sin procesión.
    procesionesIds: [],

    // Reutiliza las imágenes de Cultos de la Novena de la Virgen.
    imagenUrl: "/cofradias/gloria/esperanza/esperanza_CE.avif",
    imagenMovilUrl: "/cofradias/gloria/esperanza/esperanza_CM.avif",
    imagenAlt: "Nuestra Señora de la Esperanza de San Cipriano",

    colorFondo: "#305746",
    titleSize: "large",
    imagePosition: "50% 25%",
  },

  /* ==========================================
     NUESTRA SEÑORA DE LA PAZ
     SAN ANDRÉS
  ========================================== */

  {
    id: "paz",
    procesionesIds: ["paz-principal"],
    nombre: "Paz",

    fecha: "21 al 24 de MAYO",
    mes: "MAYO",
    diaInicio: 21,

    imagenUrl: "/cofradias/gloria/paz/paz_CE.avif",
    imagenMovilUrl: "/cofradias/gloria/paz/paz_CM.avif",
    imagenAlt: "Nuestra Señora de la Paz de San Andrés",

    colorFondo: "#6A573A",
    titleSize: "large",
    imagePosition: "50% 25%",
  },

  
/* ==========================================
   NUESTRA SEÑORA DEL ROSARIO
   HERMANDAD DEL CALVARIO
========================================== */

{
  id: "rosario",
  procesionesIds: ["rosario-principal"],
  cofradiaId: "calvario",
  nombre: "Rosario",
  fecha: "11 de OCTUBRE",
  mes: "OCTUBRE",
  diaInicio: 11,

  imagenUrl: "/cofradias/penitencia/salvador/rosario/rosario_CE.avif",
  imagenMovilUrl: "/cofradias/penitencia/salvador/rosario/rosario_CM.avif",
  imagenAlt: "Nuestra Señora del Rosario de Toledo",

  colorFondo: "#7B163F",
  titleSize: "large",
  imagePosition: "50% 25%",
},


  /* ==========================================
     NUESTRA SEÑORA DEL AMPARO
     CULTOS DE OCTUBRE DE 2026
  ========================================== */

  {
    id: "amparo",
    procesionesIds: ["amparo-principal"],
    cofradiaId: "amparo",
    nombre: "Amparo",
    fecha: "22 al 25 de OCTUBRE",
    mes: "OCTUBRE",
    diaInicio: 22,

    imagenUrl: "/cofradias/penitencia/amparo/amparo_CE.avif",
    imagenMovilUrl: "/cofradias/penitencia/amparo/amparo_CM.avif",
    imagenAlt: "Nuestra Señora del Amparo de Toledo",

    colorFondo: "#36543C",
    titleSize: "large",
    imagePosition: "50% 25%",
  },

];
