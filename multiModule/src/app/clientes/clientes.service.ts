import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor() { }

  getClientes(): Cliente[] {

    const clientes: Cliente[] = [
      {name: "Cliente 1", email:"cliente1@gmail.com"},
      {name: "Cliente 2", email:"cliente2@gmail.com"},
      {name: "Cliente 3", email:"cliente3@gmail.com"}
    ];

    return clientes;
  }

}
