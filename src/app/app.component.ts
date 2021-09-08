import { UiService } from '@core/service/ui.service';
import { Component } from '@angular/core';
import { MatDrawerMode } from '@angular/material/sidenav';
import { NavItem } from '@core/model/nav-item';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  modo: MatDrawerMode = 'push';

  public menu: NavItem[] = [
    { url: '/tipo-citas', name: 'Tipos de Cita', icon: 'next_week' },
    { url: '/veterinarios', name: 'Veterinarios', icon: 'assignment_ind' },
    { url: '/responsables', name: 'Clientes y Mascotas', icon: 'people' },
    { url: '/citas', name: 'Agendar Citas', icon: 'book_online' },
  ];

  constructor(private uiService: UiService) {
    this.uiService.modoActual.subscribe((nuevoModo) => this.modo = nuevoModo);
  }

}
