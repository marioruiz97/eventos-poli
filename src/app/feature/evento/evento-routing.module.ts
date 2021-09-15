import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaEventosComponent } from './components/lista-eventos/lista-eventos.component';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo:'/eventos/lista'
  },
  {
    path: 'lista',
    component: ListaEventosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventoRoutingModule { }