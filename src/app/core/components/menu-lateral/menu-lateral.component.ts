import { UiService } from '@core/service/ui.service';
import { AuthService } from '@core/service/auth.service';
import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { NavItem } from '@core/model/nav-item';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css']
})
export class MenuLateralComponent implements OnInit {

  @Output() closeSidenav = new EventEmitter();

  // TODO: CAMBIAR MENU Y RUTAS
  public menu: NavItem[] = [
    { url: '/eventos', name: 'Ver Eventos', icon: 'next_week' },
    { url: '/eventos/crear', name: 'Crear Eventos', icon: 'book_online' },
  ];

  public estaEnSesion: boolean = false;

  constructor(private authService: AuthService, private uiService: UiService) { }

  ngOnInit(): void {
    this.authService.estaAutenticado.subscribe((estaEnSesion: boolean) => this.estaEnSesion = estaEnSesion);
    this.authService.verificarAutenticacion();
  }

  onToggle(): void {
    this.closeSidenav.emit();
  }

  cerrarSesion() {
    this.onToggle();
    this.authService.cerrarSesion();
    this.uiService.mostrarSnackBar('Se ha cerrado la sesión');
  }
}
