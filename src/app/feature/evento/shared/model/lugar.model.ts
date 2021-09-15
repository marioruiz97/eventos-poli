import { Sede } from "./sede.model";

export interface Lugar {
  nombre: string;
  direccion: string;
  sede: Sede;
  ciudad: string;  // TODO: VERIFICAR SI CAMBIAR A Ciudad;
}
