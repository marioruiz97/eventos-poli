import { VistaEvento } from './../../shared/model/evento.model';
import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { EventoService } from '@feature/evento/shared/service/evento.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-lista-eventos',
  templateUrl: './lista-eventos.component.html',
  styleUrls: ['./lista-eventos.component.css']
})
export class ListaEventosComponent implements OnInit, AfterViewInit, OnDestroy {

  private subscripciones: Subscription[] = [];
  displayedColumns = ['idEvento', 'titulo', 'categorias', 'fecha', 'acciones'];
  datasource = new MatTableDataSource<VistaEvento>();

  @ViewChild(MatSort, { static: false }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(private servicio: EventoService) { }

  ngOnInit(): void {
    this.consultar();
  }

  ngAfterViewInit(): void {
    this.datasource.sort = this.sort;
    this.datasource.paginator = this.paginator;
  }

  consultar(): void {
    this.subscripciones.push(
      this.servicio.consultar().subscribe(list => this.datasource.data = list,
        err => this.servicio.mostrarError(err)
      ));
  }

  doFilter($event: any): void {
    const filterString = $event.target.value;
    this.datasource.filter = filterString.trim().toLocaleLowerCase();
  }

  eliminar(id: string): void {
    // this.subscripciones.push(this.servicio.eliminar(id).subscribe(res => {
    //   if (res) { this.consultar(); }
    // }));
  }

  ngOnDestroy(): void {
    if (this.subscripciones) { this.subscripciones.forEach(sub => sub.unsubscribe()); }
  }

}
