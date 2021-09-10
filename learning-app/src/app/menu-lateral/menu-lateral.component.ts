import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css']
})
export class MenuLateralComponent implements OnInit {

  dato: string = "Dato del menu lateral";
  isSelected:boolean = true;

  currentClasses = {
    seleccionado : true, // Referencia a mi clase en el .css
    negrita : true
  }

  constructor() { }

  checkboxChange(){
    console.log("Disparado")
  }

  ngOnInit(): void {
  }

}
