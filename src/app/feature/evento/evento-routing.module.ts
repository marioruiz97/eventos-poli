import { FormularioEventoComponent } from './components/formulario-evento/formulario-evento.component';
import { DetallesEventoComponent } from './components/detalles-evento/detalles-evento.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaEventosComponent } from './components/lista-eventos/lista-eventos.component';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: '/eventos/lista'
  },
  {
    path: 'lista',
    component: ListaEventosComponent
  },
  {
    path: ':id/info', pathMatch: 'full',
    component: DetallesEventoComponent
  },
  {
    path: 'crear', pathMatch: 'full',
    component: FormularioEventoComponent
  },
  {
    path: ':id/editar', pathMatch: 'full',
    component: FormularioEventoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventoRoutingModule { }
