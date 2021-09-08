import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent {

  // TODO: agregar lógica, funcionalidad para el login

  public hide = true;
  public loginForm: FormGroup;

  constructor() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.maxLength(64), Validators.minLength(6), Validators.email]),
      password: new FormControl('', [Validators.required, Validators.maxLength(14), Validators.minLength(6)]),
    });
  }

  onSubmit() {
    const usuario = this.loginForm.value;
    //this.authService.login({ email: usuario.username, password: usuario.password });
  }

  redirect(to: string) {
    //return this.authService.redirect(to);
  }

}
