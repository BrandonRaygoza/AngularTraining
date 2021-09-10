import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ListadoClientesComponent } from './listado-clientes/listado-clientes.component';
import { ListadoPostComponent } from './listado-post/listado-post.component';

/*Always remember that the exports property refers to any artifacts that can be placed in the declarations property of a module; that is, components, directives, and pipes*/
@NgModule({
  declarations: [ListadoClientesComponent, ListadoPostComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [ListadoClientesComponent]
})
export class ClientesModule { }
