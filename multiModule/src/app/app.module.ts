import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FacturasModule } from './facturas/facturas.module';    // Traete el modulo (que es una clase)
import { ClientesModule } from './clientes/clientes.module';
import { NotasModule } from './notas/notas.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FacturasModule,
    ClientesModule,
    NotasModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
