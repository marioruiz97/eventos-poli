import { Lugar } from '@feature/lugar/shared/model/lugar.model';
import { Router } from '@angular/router';
import { UiService } from '@core/service/ui.service';
import { Injectable } from '@angular/core';
import { HttpService } from '@core/service/http.service';
import { Observable } from 'rxjs';
import { ConfirmDialogData } from '@core/model/confirm-dialog-data';

@Injectable()
export class LugarService {

  private path = 'lugares';

  constructor(
    private httpService: HttpService,
    private uiService: UiService,
    private router: Router
  ) { }


  consultar(): Observable<any> {
    return this.httpService.getRequest<Lugar[]>(this.path);
  }

  buscarPorId(idLugar: string): Promise<Lugar> {
    return this.httpService.getRequest<Lugar>(`${this.path}/${idLugar}`).toPromise();
  }


  mostrarError(err: any): void {
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
