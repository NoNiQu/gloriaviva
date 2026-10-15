export type CultoCardTitleSize = "small" | "medium" | "large";

export type CreditoFoto = {
  nombre: string;
  logoUrl?: string | null;
  logoAlt?: string | null;
};

export type CultoCardData = {
  id: number | string;

  // Identificadores independientes de cofradia, advocacion y culto.
  cofradiaId?: string;
  advocacionId?: string;
  cultoId?: string;
  procesionesIds?: string[];
  procesionesIdsPorMes?: Record<string, string[]>;

  // Mes mostrado por el calendario; no se guarda en los datos.
  mesVista?: string;

  nombre: string;
  subnombre?: string | null;
  fecha: string;
  mes: string;
  meses?: string[];
  diaInicio: number;

  // Fechas propias de cada mes en cultos que abarcan varios meses.
  fechaPorMes?: Record<string, string>;
  diaInicioPorMes?: Record<string, number>;

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