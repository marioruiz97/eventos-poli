import { VistaEvento } from './../model/evento.model';
import { UiService } from '@core/service/ui.service';
import { Injectable } from '@angular/core';
import { HttpService } from '@core/service/http.service';
import { Observable } from 'rxjs';
import { Evento } from '../model/evento.model';
import { map } from 'rxjs/operators';

@Injectable()
export class EventoService {

  private path = 'eventos';

  constructor(
    private httpService: HttpService,
    private uiService: UiService
  ) { }

  consultar(): Observable<any> {
    return this.httpService.getRequest<Evento[]>(this.path).pipe(
      map((res: Evento[]) => {
        return res.map(evento => {
          return {
            "idEvento": evento.idEvento,
            "titulo": evento.informacionEvento.titulo,
            "categorias": evento.informacionEvento.categorias,
            "fecha": evento.informacionEvento.fechaEvento
          } as VistaEvento;
        })
      })
    );
  }

  buscarPorId(idEvento: string): Promise<Evento> {
    return this.httpService.getRequest<Evento>(`${this.path}/${idEvento}`).toPromise();
  }

  mostrarError(err: any): void {
    const message = err.error ? err.error.mensaje : 'No se han podido obtener datos';
    this.uiService.mostrarDialogo({
      title: 'Error',
      message,
      confirm: 'Ok',
    });
  }

}
