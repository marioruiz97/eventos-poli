import { Categoria } from './categoria.model';
import { InformacionEvento } from './informacion-evento.model';
import { FacultadOrganizadora } from './facultad.model';
import { Usuario } from '@core/model/usuario.model';
import { Comentario } from './comentario.model';

export interface Evento {
  idEvento: string;
  informacionEvento: InformacionEvento;
  asistentes: Usuario[];
  facilitadores: Usuario[];
  conferencistas: Usuario[];
  organizadores: FacultadOrganizadora[];
  comentarios: Comentario[];

}

export interface VistaEvento {
  idEvento: string;
  titulo: string;
  categorias: Categoria[];
  fecha: Date;
}
