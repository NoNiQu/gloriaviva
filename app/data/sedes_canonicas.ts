import type { SedeCanonicaData } from "../types/sede_canonica";

/* ==========================================
   SEDES CANÓNICAS · GLORIA VIVA · TOLEDO

   Solo las siete sedes compartidas con Entre Silencios.
   Horarios de misa transcritos de las capturas aportadas.
   Santiago el Mayor conserva el enlace a la información
   oficial hasta disponer de horarios concretos.

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
    cofradiasIds: ["calvario"],
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
    cofradiasIds: ["dolores"],
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
];

export function getSedeCanonicaPorSlug(slug: string) {
  return sedesCanonicas.find((sede) => sede.slug === slug) ?? null;
}
