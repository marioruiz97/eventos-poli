import { Categoria } from './categoria.model';
import { Lugar } from '@feature/lugar/shared/model/lugar.model';

export interface InformacionEvento {
  titulo: string;
  descripcion: string;
  lugar: Lugar;
  categorias: Categoria[];
  fechaEvento: Date;
}
