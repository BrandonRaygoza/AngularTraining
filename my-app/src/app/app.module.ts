import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MatematicoComponent } from './matematico/matematico.component';
import { MatematicoResultComponent } from './matematico-result/matematico-result.component';

// Es un decorador, que permite que la clase sea interpretada como un componente (o modulo) en angular
// En typescript inician con @ (@component)
// Para que la clase sea considerada un modulo, es necesasrio que tenga un decorador que asi lo especifique.

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MatematicoComponent,
    MatematicoResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
