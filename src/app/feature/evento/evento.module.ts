import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventoRoutingModule } from './evento-routing.module';
import { SharedModule } from '@shared/shared.module';
import { ListaEventosComponent } from './components/lista-eventos/lista-eventos.component';
import { EventoService } from './shared/service/evento.service';
import { DetallesEventoComponent } from './components/detalles-evento/detalles-evento.component';


@NgModule({
  declarations: [
    ListaEventosComponent,
    DetallesEventoComponent
  ],
  imports: [
    CommonModule,
    EventoRoutingModule,
    SharedModule
  ],
  providers: [
    EventoService
  ]
})
export class EventoModule { }
