import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NavItem } from '@core/model/nav-item';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css']
})
export class MenuLateralComponent {
  @Output() closeSidenav = new EventEmitter();

  @Input()
  menu!: NavItem[];

  constructor() { }


  onToggle(): void {
    this.closeSidenav.emit();
  }
}
