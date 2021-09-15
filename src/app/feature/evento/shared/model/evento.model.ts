import { Categoria } from './categoria.model';
import { InformacionEvento } from './informacion-evento.model';
import { Comentario } from './comentario.model';
import { Organizador } from './organizador.model';
import { UsuarioEvento } from './usuario-evento.model';

export interface Evento {
  idEvento: string;
  informacionEvento: InformacionEvento;
  asistentes: UsuarioEvento[];
  facilitadores: UsuarioEvento[];
  conferencistas: UsuarioEvento[];
  organizadores: Organizador[];
  comentarios: Comentario[];

}

export interface VistaEvento {
  idEvento: string;
  titulo: string;
  categorias: Categoria[];
  fecha: Date;
}
