import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { AuthService } from '@core/service/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  estaEnSesion: boolean = false;

  @Output() openMenu = new EventEmitter();

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.estaAutenticado.subscribe((estaEnSesion: boolean) => this.estaEnSesion = estaEnSesion);
    this.authService.verificarAutenticacion();
  }

}
