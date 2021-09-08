import { EventEmitter, Injectable, Output } from '@angular/core';
import { MatDrawerMode } from '@angular/material/sidenav';

@Injectable()
export class UiService {

  @Output() modoActual: EventEmitter<MatDrawerMode> = new EventEmitter();

  constructor() { }

  cambiarModo(nuevoModo: MatDrawerMode) {
    this.modoActual.emit(nuevoModo);
  }


}
