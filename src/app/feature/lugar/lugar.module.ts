import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { LugarService } from './shared/service/lugar.service';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [
    LugarService
  ]
})
export class LugarModule { }
