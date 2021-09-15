import { Organizador } from './../model/organizador.model';
import { Router } from '@angular/router';
import { VistaEvento } from './../model/evento.model';
import { UiService } from '@core/service/ui.service';
import { Injectable } from '@angular/core';
import { HttpService } from '@core/service/http.service';
import { Observable } from 'rxjs';
import { Evento } from '../model/evento.model';
import { map } from 'rxjs/operators';
import { ConfirmDialogData } from '@core/model/confirm-dialog-data';
import { RespuestaApi } from '@core/model/respuesta-api.model';

@Injectable()
export class EventoService {

  private path = 'eventos';

  constructor(
    private httpService: HttpService,
    private uiService: UiService,
    private router: Router
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

  consultarOrganizadores(): Observable<any> {
    const pathOrganizador = `${this.path}/organizadores`
    return this.httpService.getRequest<Organizador[]>(pathOrganizador);
  }

  buscarPorId(idEvento: string): Promise<Evento> {
    return this.httpService.getRequest<Evento>(`${this.path}/${idEvento}`).toPromise();
  }


  crear(data: Evento) {
    this.httpService.postRequest<Evento, RespuestaApi>(this.path, data).subscribe((res: RespuestaApi) => {
      this.uiService.mostrarSnackBar(res.mensaje);
      this.volverAListar();
    }, (err) => {
      this.mostrarError(err);
    });
  }

  modificar(data: Evento, idEvento: string) {
    this.httpService.putRequest<Evento, RespuestaApi>(`${this.path}/${idEvento}`, data).subscribe((res: RespuestaApi) => {
      this.uiService.mostrarSnackBar(res.mensaje);
      this.volverAListar();
    }, (err) => {
      this.mostrarError(err);
    });
  }

  private volverAListar() {
    this.router.navigate(['/eventos/lista']);
  }


  mostrarError(err: any): void {
    console.log('Error[evento.service]', err)
    const message = err.error ? err.error.mensaje : 'No se han podido obtener datos';
    this.uiService.mostrarDialogo({
      title: 'Error',
      message,
      confirm: 'Ok',
    });
  }

  volver(data: ConfirmDialogData, ruta: string) {
    const dialogRef = this.uiService.mostrarDialogo(data);
    dialogRef.afterClosed().subscribe(resultado => {
      if (resultado) {
        this.router.navigate([ruta]);
      }
    });
  }

}
