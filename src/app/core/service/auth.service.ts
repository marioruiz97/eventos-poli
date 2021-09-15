import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Sesion } from '@core/model/session.model';
import { Usuario } from '@core/model/usuario.model';
import { Subject } from 'rxjs';
import { AppConstants } from '@shared/app.constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private llaveSesion = AppConstants.LLAVE_SESION;
  private $usuarioEnSesion: string = '';
  estaAutenticado = new Subject<boolean>();


  constructor(private router: Router) {
    this.verificarAutenticacion();
  }

  public verificarAutenticacion() {
    if (!this.verificarSesion()) {
      this.limpiarSesion();
    }
  }

  private notificarSiHayUsuarioEnSesion() {
    this.estaAutenticado.next(true);
  }

  private notificarNoHayUsuarioEnSesion() {
    this.estaAutenticado.next(false);
  }

  private verificarSesion(): boolean {
    const sesionActiva = sessionStorage.getItem(this.llaveSesion);
    if (!sesionActiva) {
      this.limpiarSesion();
      return false;
    } else {
      if (!this.$usuarioEnSesion) this.$usuarioEnSesion = atob(sesionActiva);
      this.notificarSiHayUsuarioEnSesion();
      return true;
    }

  }

  private limpiarSesion() {
    sessionStorage.clear();
    this.$usuarioEnSesion = '';
    this.notificarNoHayUsuarioEnSesion();
    this.router.navigate(['/login']);
  }

  public redirigirAHome() {
    this.router.navigate(['/home']);
  }

  public iniciarSesion(usuario: Usuario) {
    // TODO: hacer request al servidor que valide user y password
    const usuarioEnSesion: Sesion = {
      usuario: usuario.usuario,
      inicioSesion: true
    };
    this.$usuarioEnSesion = btoa(JSON.stringify(usuarioEnSesion));
    sessionStorage.setItem(this.llaveSesion, this.$usuarioEnSesion);
    this.notificarSiHayUsuarioEnSesion();
  }

  public cerrarSesion() {
    this.limpiarSesion();
  }

}
