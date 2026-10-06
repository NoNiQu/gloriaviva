export type CultoCardTitleSize = "small" | "medium" | "large";

export type CultoCardData = {
  id: number | string;
  nombre: string;
  subnombre?: string | null;
  fecha: string;
  mes: string;
  diaInicio: number;

  imagenUrl: string;
  imagenMovilUrl?: string;
  imagenAlt: string;

  colorFondo: string;

  cultosHref?: string | null;
  procesionHref?: string | null;

  cultosTexto?: string;
  procesionTexto?: string;

  etiquetaSuperior?: string | null;

  titleSize?: CultoCardTitleSize;
  imagePosition?: string;
};