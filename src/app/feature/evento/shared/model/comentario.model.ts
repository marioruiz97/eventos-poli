import { Usuario } from '@core/model/usuario.model';
export interface Comentario {
  mensaje: string;
  usuario: Usuario;
}
