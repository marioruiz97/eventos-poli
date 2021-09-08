import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuLateralComponent } from '@core/components/menu-lateral/menu-lateral.component';
import { ToolbarComponent } from '@core/components/toolbar/toolbar.component';
import { SharedModule } from '@shared/shared.module';



@NgModule({
  declarations: [
    MenuLateralComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    MenuLateralComponent,
    ToolbarComponent
  ]
})
export class CoreModule { }
