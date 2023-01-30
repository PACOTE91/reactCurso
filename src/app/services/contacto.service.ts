import { Injectable } from '@angular/core';
import { CONTACTOS } from '../mocks/contactos.mocks';
import { IContacto } from '../models/Contacto.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  constructor() {}

  getAllContacts(): Promise<IContacto[]> {
    return Promise.resolve(CONTACTOS);
  }

  // Usando promesas
  //   getContactById(id: number): Promise<IContacto> | undefined {
  //     const contacto = CONTACTOS.find(
  //       (contacto: IContacto) => contacto.id === id
  //     );
  //     if (contacto) {
  //       return Promise.resolve(contacto);
  //     } else {
  //       return;
  //     }
  //   }

  getContactById(id: number): Observable<IContacto> | undefined {
    const contacto = CONTACTOS.find(
      (contacto: IContacto) => contacto.id === id
    );

    //Creamos un observable
    let observable: Observable<IContacto> = new Observable((observer) => {
      observer.next(contacto); //Emitir un valor a todo componente subscrito
      observer.complete(); //No emitimos vás valores
    });

    if (contacto) {
      return observable;
    }
    return;
  }
}
