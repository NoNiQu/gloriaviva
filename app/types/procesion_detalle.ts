export type TipoProcesion =
  | "principal"
  | "infantil"
  | "extraordinaria"
  | "rosario";

export type ProcesionDetalle = {
  id: string;
  advocacionId: string;
  nombre: string;
  tipo: TipoProcesion;
  fecha: string;
  hora?: string | null;
  horaTexto?: string | null;
  salida?: string | null;
  llegada?: string | null;
  llegadaTexto?: string | null;
  recorrido: string[];
  nota?: string | null;
};