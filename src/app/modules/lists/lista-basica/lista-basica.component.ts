import { Component } from '@angular/core';

export type Producto = {
  nombre: string;
  precio: number;
  descripcion: string;
};

@Component({
  selector: 'app-lista-basica',
  templateUrl: './lista-basica.component.html',
  styleUrls: ['./lista-basica.component.css']
})
export class ListaBasicaComponent {
  opcion: number = 0;

  cargando: boolean = true;

  listaElementos: Producto[] = [
    { nombre: 'Leche', precio: 40, descripcion: 'Leche desnatada' },
    { nombre: 'Carne', precio: 12, descripcion: 'Carne Vacuno' },
    { nombre: 'Huevos', precio: 5, descripcion: 'Huevos camperos' }
  ];

  cambiarCargando() {
    this.cargando = !this.cargando;
  }

  escogerOpcion(opt: number) {
    this.opcion = opt;
  }
}
