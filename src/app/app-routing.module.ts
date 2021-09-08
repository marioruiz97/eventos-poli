import { MenuHogarComponent } from './feature/menu-hogar/menu-hogar.component';
import { InicioSesionComponent } from '@feature/inicio-sesion/inicio-sesion.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: '/home' },

  { path: 'login', component: InicioSesionComponent },
  { path: 'home', component: MenuHogarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
