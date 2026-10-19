/* ==========================================
   SEDES CANÓNICAS · GLORIA VIVA
========================================== */

export type UsoSedeCanonica = "CULTO" | "MUSEO" | "CULTO_Y_MUSEO";

export interface HorarioSedeCanonica {
  id: string;
  texto: string;
  hora: string;
}

export interface SedeCanonicaData {
  id: string;
  slug: string;
  nombre: string;
  direccion: string;
  descripcionBreve: string;
  usoActual: UsoSedeCanonica;
  horarios: HorarioSedeCanonica[];
  horariosUrl: string | null;
  /** IDs de app/data/cofradia.ts; evita duplicar información. */
  cofradiasIds: string[];
  existe?: boolean;
}
