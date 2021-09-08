import { AppService } from '@core/service/app.service';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuLateralComponent } from '@core/components/menu-lateral/menu-lateral.component';
import { ToolbarComponent } from '@core/components/toolbar/toolbar.component';
import { SharedModule } from '@shared/shared.module';
import { UiService } from '@core/service/ui.service';
import { ConfirmarDialogComponent } from './components/confirmar-dialog/confirmar-dialog.component';



@NgModule({
  declarations: [
    MenuLateralComponent,
    ToolbarComponent,
    ConfirmarDialogComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    MenuLateralComponent,
    ToolbarComponent
  ],
  providers: [
    AppService,
    UiService
  ]
})
export class CoreModule { }
