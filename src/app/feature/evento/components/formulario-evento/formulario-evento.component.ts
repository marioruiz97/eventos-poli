import { Organizador } from './../../shared/model/organizador.model';
import { UsuarioService } from '@feature/evento/shared/service/usuario.service';
import { Lugar } from '@feature/lugar/shared/model/lugar.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { EventoService } from '@feature/evento/shared/service/evento.service';
import { Evento } from '@feature/evento/shared/model/evento.model';
import { LugarService } from '@feature/lugar/shared/service/lugar.service';
import { UsuarioEvento } from '@feature/evento/shared/model/usuario-evento.model';
import { Categoria } from '@feature/evento/shared/model/categoria.model';
import { Moment } from 'moment';
import * as moment from 'moment';

@Component({
  selector: 'app-formulario-evento',
  templateUrl: './formulario-evento.component.html',
  styleUrls: ['./formulario-evento.component.css']
})
export class FormularioEventoComponent implements OnInit {

  private evento!: Evento;
  private estaActualizando = false;
  form!: FormGroup;
  minDate = new Date();

  lugares: Lugar[] = [];
  facilitadores: UsuarioEvento[] = [];
  organizadores: Organizador[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private servicio: EventoService,
    private servicioLugar: LugarService,
    private servicioUsuario: UsuarioService
  ) { }

  get data() {
    return this.evento;
  }

  ngOnInit(): void {
    this.iniciarFormulario();
    this.obtenerLugares();
    this.obtenerFacilitadores();
    this.obtenerOrganizadores();
    this.activatedRoute.paramMap.subscribe(params => {
      const idEvento = params.get('id');
      if (idEvento && idEvento !== '0') {
        this.estaActualizando = true;
        this.obtenerDatos(idEvento);
      }
    });
  }

  private obtenerLugares() {
    this.servicioLugar.consultar().subscribe((res: Lugar[]) => {

      this.lugares = res.map(lugar => {
        return { ...lugar, 'claveLugar': lugar.nombre + ',' + lugar.direccion }
      })
    });
  }

  private obtenerFacilitadores() {
    this.servicioUsuario.consultar().subscribe((res: UsuarioEvento[]) => this.facilitadores = res);
  }

  private obtenerOrganizadores() {
    this.servicio.consultarOrganizadores().subscribe((res: Organizador[]) => this.organizadores = res);
  }

  private obtenerDatos(idEvento: string) {
    this.servicio.buscarPorId(idEvento)
      .then((res: Evento) => {
        this.evento = res;
        this.setForm();
      })
      .catch((err: any) => this.servicio.mostrarError(err));
  }


  private iniciarFormulario(): void {
    this.form = new FormGroup({
      idEvento: new FormControl({ value: '', disabled: true }),
      titulo: new FormControl('', [Validators.required]),
      descripcion: new FormControl('', [Validators.required]),
      categorias: new FormControl('', [Validators.required]),
      fecha: new FormControl('', [Validators.required]),
      lugar: new FormControl('', [Validators.required]),
      facilitadores: new FormControl('', [Validators.required]),
      organizadores: new FormControl('', [Validators.required]),
    });
    this.form.markAsTouched();
  }

  private setForm(): void {
    const evento: Evento = this.evento;
    const categorias = evento.informacionEvento.categorias.map(cat => cat.nombre).toString()
    const lugar = evento.informacionEvento.lugar;
    this.form.setValue({
      idEvento: evento.idEvento,
      titulo: evento.informacionEvento.titulo,
      descripcion: evento.informacionEvento.descripcion,
      categorias: categorias,
      fecha: evento.informacionEvento.fechaEvento,
      lugar: lugar.nombre + ',' + lugar.direccion,
      facilitadores: evento.facilitadores.map(fac => fac.identificacion),
      organizadores: evento.organizadores.map(org => org.codigo),
    });
  }

  volver(): void {
    const data = {
      title: '¿Cancelar progreso?',
      message: 'Si vuelves perderás los avances del formulario de ingreso',
      confirm: 'Sí, deseo regresar'
    };
    this.servicio.volver(data, '/eventos/lista');
  }

  accion() {
    return this.estaActualizando ? 'Actualizar' : 'Crear';
  }

  guardar(): void {
    const evento = this.form.value;
    const categorias: Categoria[] = this.form.value.categorias.split(',').map((cat: string) => {
      return { "nombre": cat.trim().toLowerCase() };
    });
    const fecha: string = moment(this.form.value.fecha).format('YYYY-MM-DD');
    const lugarArray = evento.lugar.split(',');
    evento.lugar = { 'nombre': lugarArray[0], 'direccion': lugarArray[1] };
    evento.categorias = categorias;
    evento.fecha = fecha;
    const organizadores = evento.organizadores.map((codigo: number) => this.organizadores.find(org => org.codigo === codigo));
    evento.organizadores = organizadores;
    if (this.estaActualizando) {
      this.servicio.modificar(this.form.value, this.evento.idEvento);
    } else {
      this.servicio.crear(this.form.value);
    }
  }
}

