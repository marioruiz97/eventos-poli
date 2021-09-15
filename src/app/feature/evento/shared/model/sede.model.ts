import { Ciudad } from "./ciudad.model";

export interface Sede {
  codigo: number;
  nombre: string;
  ciudad: Ciudad;
}
