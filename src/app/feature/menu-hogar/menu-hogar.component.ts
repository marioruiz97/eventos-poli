import { UiService } from '@core/service/ui.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  templateUrl: './menu-hogar.component.html',
  styleUrls: ['./menu-hogar.component.css']
})
export class MenuHogarComponent implements OnInit, OnDestroy {

  constructor(private uiService: UiService) { }

  ngOnInit(): void {
    this.uiService.cambiarModo('side');
  }

  ngOnDestroy(): void {
    this.uiService.cambiarModo('push');
  }

}
