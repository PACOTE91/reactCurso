import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IContacto } from 'src/app/models/Contacto.interface';
import { ContactoService } from 'src/app/services/contacto.service';

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.css']
})
export class ListaContactosComponent implements OnInit, OnDestroy {
  listaContactos: IContacto[] = [];
  contactoSeleccionado: IContacto | undefined;
  subcription: Subscription | undefined;

  constructor(private contactoService: ContactoService) {}

  ngOnInit(): void {
    this.contactoService
      .getAllContacts()
      .then((lista: IContacto[]) => (this.listaContactos = lista))
      .catch((error) =>
        console.error('Ha habido un error al recuperar contactos' + error)
      );
  }

  ngOnDestroy(): void {
    this.subcription?.unsubscribe;
  }

  obtenerContacto(id: number) {
    this.subcription = this.contactoService.getContactById(id)?.subscribe(
      (contacto: IContacto) => (this.contactoSeleccionado = contacto),
      (error) => console.error('Error ' + error)
    );
  }
}
