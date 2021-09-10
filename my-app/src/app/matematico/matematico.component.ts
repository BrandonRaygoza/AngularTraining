import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matematico',
  templateUrl: './matematico.component.html',
  styleUrls: ['./matematico.component.css']
})
export class MatematicoComponent implements OnInit {

  constructor() { }

  a:number = 0;
  b:number = 0;
  operations : string[] = ["Suma", "Resta", "Multiplicacion", "Division"];
  opc:string = "";
  result : number = 0;

  today = new Date();

  doOperation(): void{

    if(this.b == 0 && parseInt(this.opc) == 4) //Evitar divisiones entre 0
      return;

    switch(this.opc){
      case '1': this.result = this.getSum();
                break;
      case '2': this.result = this.getSub();
                break;
      case '3': this.result = this.getMul();
                break;
      case '4': this.result = this.getDiv();
                break;
    }

    console.log(this.opc);
    console.log("Al momento:");
    console.log("Suma: "+this.getSum());
    console.log("Resta: "+this.getSub());
    console.log("Multiplicacion: "+this.getMul());
    console.log("Division: "+this.getDiv());
  }

  getSum():number{
    return this.a+this.b;
  }

  getSub():number{
    return this.a-this.b;
  }
  getMul():number{
    return this.a*this.b;
  }
  getDiv():number{
    return this.a/this.b;
  }

  // Este procedimiento se ejecuta cuando el evento es disparado desde otro componente
  onClearInputs(): void{
    this.a=0;
    this.b=0;
    console.log("EVENTO DISPARADO DESDE OTRO COMPONENTE");
  }

  ngOnInit(): void {
  }

}
