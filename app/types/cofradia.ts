
export type TipoCofradia =
  | "cofradia"
  | "gloria"
  | "devocion-popular";

export interface RedesSociales {
  web: string | null;
  instagram: string | null;
  facebook: string | null;
  tiktok: string | null;
  youtube: string | null;
}

export interface TitularData {
  id: string;
  nombre: string;
  advocacion: string;
  esVirgen: boolean;

  anio: number | null;
  siglo: string | null;
  autor: string | null;
  tipoAndas: string | null;

  datosTalla: string;

  fotoUrl: string | null;
  galeria: string[];
}

export interface CofradiaData {
  id: string;
  slug: string;

  nombre: string;
  nombreCorto: string;
  subnombre?: string;

  sedeCanonica: string;
  tipo: TipoCofradia;

  anioFundacion: number | null;
  anioRefundacion: number | null;
  referenciaHistorica: number | null;

  historia: string;

  escudoUrl: string | null;
  escudoMovilUrl: string | null;
  logoUrl: string | null;

  portadaDesktopUrl: string | null;
  portada2kUrl: string | null;
  portadaMovilUrl: string | null;

  titulares: TitularData[];

  cultosId: string | null;
  procesionId: string | null;

  redes: RedesSociales;

  fotosCedidas?: boolean;
  fotoQuien?: string | null;
  fotosLogo?: string | null;
}
