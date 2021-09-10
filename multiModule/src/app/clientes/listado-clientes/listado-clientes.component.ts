import { Component, OnInit } from '@angular/core';

import { Cliente } from '../../models/cliente';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.css']
})
export class ListadoClientesComponent implements OnInit {

  //private clientesService : ClientesService;

  constructor(private clientesService : ClientesService) {  // Estp si aplica el dependency injection
    // this.clientesService = new ClientesService(); // No va con la inyeccion de dependencias
   }

  clientes : Cliente[] = [];


  ngOnInit(): void {
    this.setPosts();
  }

  setPosts():void{
    this.clientes = this.clientesService.getClientes();
  }

}
