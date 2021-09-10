import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-matematico-result',
  templateUrl: './matematico-result.component.html',
  styleUrls: ['./matematico-result.component.css']
})
export class MatematicoResultComponent implements OnInit {

  constructor() { }

  // Esta variable recibe un valor como parametro (por eso el input), viene de manera externa.
  @Input() result :number;

   // Es un boton dentro de este mismo html, que al presionarse, el evento se emitira a otro componente
  @Output() clearInputs = new EventEmitter();

  ngOnInit(): void {
  }

}
