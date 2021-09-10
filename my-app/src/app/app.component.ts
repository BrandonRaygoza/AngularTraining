import { Component } from '@angular/core';


// Es un decorador, que permite que la clase sea interpretada como un componente (o modulo) en angular
// En typescript inician con @ (@component)
// Para que la clase sea considerada un modulo, es necesasrio que tenga un decorador que asi lo especifique.
@Component({
  selector: 'app-root', //es un elemento que se puede llamar como html <app-root></app-root>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app'; // Podrar ser referenciadas dentro del componenten html
  //name = 'Brandon';
  test = 1234;  // Valor a enviar por parametro
}
