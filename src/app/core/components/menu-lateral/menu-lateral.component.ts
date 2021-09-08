import { AuthService } from '@core/service/auth.service';
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { NavItem } from '@core/model/nav-item';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css']
})
export class MenuLateralComponent implements OnInit {

  @Output() closeSidenav = new EventEmitter();

  @Input()
  menu!: NavItem[];

  estaEnSesion: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.estaAutenticado.subscribe((estaEnSesion: boolean) => this.estaEnSesion = estaEnSesion);
    this.authService.verificarAutenticacion();
  }

  onToggle(): void {
    this.closeSidenav.emit();
  }
}
