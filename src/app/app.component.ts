import { UiService } from '@core/service/ui.service';
import { Component } from '@angular/core';
import { MatDrawerMode } from '@angular/material/sidenav';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  modo: MatDrawerMode = 'push';

  constructor(private uiService: UiService) {
    this.uiService.modoActual.subscribe((nuevoModo) => this.modo = nuevoModo);
  }

}
