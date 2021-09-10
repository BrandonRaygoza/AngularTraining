import { Injectable } from '@angular/core';
import { Factura } from '../models/factura';

@Injectable({
  providedIn: 'root'
})
export class FacturasService {

  constructor() { }

  facturas : Factura[] =
    [
      {id: 1, date: new Date(), clientId: 5, amount: 1234},
      {id: 2, date: new Date(), clientId: 4, amount: 5678},
      {id: 3, date: new Date(), clientId: 3, amount: 9012},
      {id: 4, date: new Date(), clientId: 2, amount: 2345},
      {id: 5, date: new Date(), clientId: 1, amount: 6789}
    ];

  addFactura(factura:Factura): void{
    this.facturas.push(factura);
  }

  getAllFacturas() : Factura[]{

    return this.facturas;
  }

  getFacturaById(id): Factura{
    for(let factura of this.facturas){
      if(factura.id === id){
        return factura;
      }
    }

    return null;
  }
}
