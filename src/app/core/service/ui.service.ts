import { EventEmitter, Injectable, Output } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatDrawerMode } from '@angular/material/sidenav';
import { MatSnackBar, MatSnackBarRef, TextOnlySnackBar } from '@angular/material/snack-bar';
import { ConfirmarDialogComponent } from '@core/components/confirmar-dialog/confirmar-dialog.component';
import { ConfirmDialogData } from '@core/model/confirm-dialog-data';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class UiService {

  @Output() modoActual: EventEmitter<MatDrawerMode> = new EventEmitter();
  estaCargando = new Subject<boolean>();

  constructor(private snackBar: MatSnackBar, private dialog: MatDialog) { }

  cambiarModo(nuevoModo: MatDrawerMode) {
    this.modoActual.emit(nuevoModo);
  }

  mostrarSnackBar(
    mensaje: string,
    accion?: string
  ): MatSnackBarRef<TextOnlySnackBar> {
    return this.snackBar.open(mensaje, accion ? accion : 'Ok', {
      duration: 4 * 1000, // 4ms * 1000 ms = 4 segundos
      verticalPosition: 'top',
      horizontalPosition: 'end',
    });
  }

  // TODO: eliminar método
  private configurarSnackBar<T>(promise: Promise<T>, mensaje: string): Observable<boolean> {
    this.estaCargando.next(true);
    return new Observable((exito) => {
      promise
        .then((res: any) => {
          this.mostrarSnackBar(mensaje);
          this.estaCargando.next(false);
          exito.next(true);
        })
        .catch((err) => {
          this.estaCargando.next(false);
          exito.next(false);
          const message = err.error ? err.error.mensaje : 'Ha ocurrido un error, contacta un administrador';
          const errors: string[] = err.error && err.error.errors ? err.error.errors : [];
          this.mostrarDialogo({ title: 'Error', message, errors, confirm: 'Ok' });
        });
    });
  }

  mostrarDialogo(data: ConfirmDialogData): MatDialogRef<ConfirmarDialogComponent> {
    return this.dialog.open(ConfirmarDialogComponent, {
      data: {
        title: data.title,
        message: data.message,
        errors: data.errors ? data.errors : [],
        confirm: data.confirm,
      },
    });
  }

}
