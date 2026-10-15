export type CultoBloque = {
  id: string;
  titulo?: string;
  meses?: string[];
  fecha: string;
  lineas: string[];
};

export type CultoDetalle = {
  id?: string;
  advocacionId: string;
  titulo: string;
  subtitulo?: string;
  bloques: CultoBloque[];
  nota?: string;
};