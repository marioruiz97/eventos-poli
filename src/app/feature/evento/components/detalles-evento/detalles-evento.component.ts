import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Evento } from '@feature/evento/shared/model/evento.model';
import { EventoService } from '@feature/evento/shared/service/evento.service';

@Component({
  selector: 'app-detalles-evento',
  templateUrl: './detalles-evento.component.html',
  styleUrls: ['./detalles-evento.component.css']
})
export class DetallesEventoComponent implements OnInit {

  private evento!: Evento;

  constructor(
    private activatedRoute: ActivatedRoute,
    private servicio: EventoService
  ) { }


  get info(){
    return this.evento;
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      const idEvento = params.get('id');
      if (idEvento && idEvento !== '0') {
        this.obtenerDatos(idEvento);
      }
    });

  }

  private obtenerDatos(idEvento: string) {
    this.servicio.buscarPorId(idEvento)
      .then((res: Evento) => this.evento = res)
      .catch((err: any) => this.servicio.mostrarError(err));
  }

}
