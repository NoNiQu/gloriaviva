export type CultoBloque = {
  id: string;
  titulo?: string;
  fecha: string;
  lineas: string[];
};

export type CultoDetalle = {
  advocacionId: string;
  titulo: string;
  subtitulo?: string;
  bloques: CultoBloque[];
  nota?: string;
};