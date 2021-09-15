import { Sede } from "@feature/evento/shared/model/sede.model";

export interface Lugar {
  claveLugar?: string;
  nombre: string;
  direccion: string;
  sede: Sede;
  ciudad: string;  // TODO: VERIFICAR SI CAMBIAR A Ciudad;
}
