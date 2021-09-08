import { AuthService } from '@core/service/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {

  // TODO: agregar lógica, funcionalidad para el login

  public hide = true;
  public loginForm: FormGroup;

  constructor(private authService: AuthService) {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.maxLength(64), Validators.minLength(6), Validators.email]),
      password: new FormControl('', [Validators.required, Validators.maxLength(14), Validators.minLength(6)]),
    });
  }

  ngOnInit(): void {
    this.authService.estaAutenticado.subscribe((estaAutenticado: boolean) => {
      if (estaAutenticado) { this.authService.redirigirAHome(); }
    });
    this.authService.verificarAutenticacion();
  }

  onSubmit() {
    const usuario = this.loginForm.value;
    this.authService.iniciarSesion({ usuario: usuario.username, contrasena: usuario.password });
  }

  redirect(to: string) {
    //return this.authService.redirect(to);
  }

}
