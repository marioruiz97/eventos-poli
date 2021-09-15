import { Injectable } from '@angular/core';
import { HttpService } from '@core/service/http.service';
import { Observable } from 'rxjs';
import { UsuarioEvento } from '../model/usuario-evento.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private path = 'usuarios';

  constructor(
    private httpService: HttpService,
  ) { }


  consultar(): Observable<UsuarioEvento[]> {
    return this.httpService.getRequest<UsuarioEvento[]>(this.path);
  }
}
