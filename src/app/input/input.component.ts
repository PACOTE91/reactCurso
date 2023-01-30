import { Component, Input,Output,EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent {
  @Input() nombre: string = 'alumno';
  @Output() mensajeEmitter:EventEmitter<string>=new EventEmitter<string>()

  mostrarAlerta() {
    alert('Hola ' + this.nombre);
  }

  enviarMensaje(){
    this.mensajeEmitter.emit(`Hola ${this.nombre} desde evento`);
  }
}
