export type CultoCardTitleSize = "small" | "medium" | "large";

export type CreditoFoto = {
  nombre: string;
  logoUrl?: string | null;
  logoAlt?: string | null;
};

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
  titleSizeMovil?: CultoCardTitleSize;
  imagePosition?: string;

  creditoFoto?: CreditoFoto | null;
};