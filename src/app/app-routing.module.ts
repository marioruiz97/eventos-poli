import { MenuHogarComponent } from './feature/menu-hogar/menu-hogar.component';
import { InicioSesionComponent } from '@feature/inicio-sesion/inicio-sesion.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: '/home' },

  { path: 'login', component: InicioSesionComponent },
  { path: 'home', component: MenuHogarComponent },
  {
    path: 'eventos',
    loadChildren: () =>
      import('@feature/evento/evento.module').then(
        (mod) => mod.EventoModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
