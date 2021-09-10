import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { ListadoFacturasComponent } from './listado-facturas/listado-facturas.component';

/*Always remember that the exports property refers to any artifacts that can be placed in the declarations property of a module; that is, components, directives, and pipes*/
@NgModule({
  declarations: [ListadoFacturasComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports : [ListadoFacturasComponent]  // Haz publico el componente listado-facturas
})
export class FacturasModule { }
