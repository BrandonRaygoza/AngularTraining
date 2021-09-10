import { Component, OnInit } from '@angular/core';

import {FacturasService} from '../facturas.service';
import { Factura } from '../../models/factura';


@Component({
  selector: 'app-listado-facturas',
  templateUrl: './listado-facturas.component.html',
  styleUrls: ['./listado-facturas.component.css']
})

export class ListadoFacturasComponent implements OnInit {

  constructor(private facturasService : FacturasService) { }

  facturas : Factura[];
  newFactura : Factura = new Factura();

  id: number;                   // Para buscar
  facturaBuscada : Factura;     // Sera la factura buscada por el usuario
  isFacturaSearched: boolean = false; // Para desplegar los datos

  isFormAddTrigger : boolean = false; // Para desplegar las entradas

  onSearchFactura() : void{

    this.facturaBuscada =  this.facturasService.getFacturaById(this.id);
    if(this.facturaBuscada == null){
      this.isFacturaSearched = false; // Si no lo pongo, en el HTML seguira existiendo el elemento y hara referencia a null, lo cual dara error.
      return;
    }
    this.isFacturaSearched = true;
  }

  onAddFactura(): void{

    // Falta validad que no sea null

    this.newFactura.date = new Date();
    this.facturasService.addFactura(this.newFactura);
    this.isFormAddTrigger = false;
  }

  onHideSearchedFactura(): void{
    this.isFacturaSearched = false;
  }

  onDisplayForm(): void{
    this.isFormAddTrigger = !this.isFormAddTrigger;
  }

  ngOnInit(): void {
    this.facturas = this.facturasService.getAllFacturas();
  }

}
