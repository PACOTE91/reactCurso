import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaBasicaComponent } from './lista-basica/lista-basica.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    ListaBasicaComponent
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule
  ],
  exports:[
    ListaBasicaComponent
  ]
})

export class ListsModule { }
