import { InicioSesionComponent } from '@feature/inicio-sesion/inicio-sesion.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MenuHogarComponent } from './feature/menu-hogar/menu-hogar.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { EventoModule } from './feature/evento/evento.module';

@NgModule({
  declarations: [
    AppComponent,
    InicioSesionComponent,
    MenuHogarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    EventoModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
