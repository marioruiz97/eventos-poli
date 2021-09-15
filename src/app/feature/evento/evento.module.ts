import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventoRoutingModule } from './evento-routing.module';
import { SharedModule } from '@shared/shared.module';
import { ListaEventosComponent } from './components/lista-eventos/lista-eventos.component';
import { EventoService } from './shared/service/evento.service';
import { DetallesEventoComponent } from './components/detalles-evento/detalles-evento.component';
import { FormularioEventoComponent } from './components/formulario-evento/formulario-evento.component';
import { LugarService } from '@feature/lugar/shared/service/lugar.service';


@NgModule({
  declarations: [
    ListaEventosComponent,
    DetallesEventoComponent,
    FormularioEventoComponent
  ],
  imports: [
    CommonModule,
    EventoRoutingModule,
    SharedModule
  ],
  providers: [
    EventoService,
    LugarService
  ]
})
export class EventoModule { }
