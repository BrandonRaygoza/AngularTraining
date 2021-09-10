"use strict";
var myBoolean = true;
var myNumber = 1234;
var myStringArray = [`first`, `second`, `third`];
let flag = false;
// con any, puedo formatear la variable a cualquier tipo de dato
// DYNAMIC TYPING (que es el que ya tiene JS)
let dato;
dato = 1000;
dato = "cadena";
const prueba = "Cheetah";
// const prueba2: Animal = "Turtle"; // Marcara error
// ENUM
var Brands;
(function (Brands) {
    Brands[Brands["Chevrolet"] = 0] = "Chevrolet";
    Brands[Brands["Cadillac"] = 1] = "Cadillac";
    Brands[Brands["Ford"] = 2] = "Ford";
    Brands[Brands["Buick"] = 3] = "Buick";
    Brands[Brands["Chrysler"] = 4] = "Chrysler";
    Brands[Brands["Dodge"] = 5] = "Dodge";
})(Brands || (Brands = {}));
;
const myCar = Brands.Cadillac;
// VOID
function saludarAlUsuario() {
    console.log("Hola usuario");
}
// <func_name(param_name:data_type, ... ,):return_type>
function suma(a, b) {
    return a + b;
}
function hello(names, greeting) {
    let namesArray;
    if (Array.isArray(names)) {
        namesArray = names;
    }
    else {
        namesArray = [names];
    }
    if (!greeting) {
        greeting = 'Hello';
    }
    return greeting + ', ' + namesArray.join(' and ') + '!';
}
class Persona {
    // Lo creo igual que los demas miembros
    constructor(nombre, am, ap, isAdult) {
        this.isAdult = isAdult;
        this.nombre = '';
        this.apellidoMaterno = '';
        this.apellidoPaterno = '';
        this.nombre = nombre;
        this.apellidoMaterno = am;
        this.apellidoPaterno = ap;
    }
    getIne() {
        return this.isAdult ? "Puede tramitar" : "No puede tramitar";
    }
}
class Rectangulo {
    constructor() {
        this.base = 0;
        this.altura = 0;
        this.color = "verde";
    }
    calcArea() {
        return this.base * this.altura;
    }
}
class Triangulo {
    constructor() {
        this.base = 0;
        this.altura = 0;
        this.color = "rojo";
    }
    calcArea() {
        return (this.base * this.altura) / 2;
    }
}
class Circulo {
    constructor() {
        this.color = "rojo";
        this.diametro = 10;
    }
    calcArea() {
        return (Math.PI * (this.diametro / 2) ** 2);
    }
}
class TrianguloIsosceles extends Triangulo {
}
// let miTriangulo = new TrianguloIsosceles(); se vale
let miTriangulo = new TrianguloIsosceles();
miTriangulo.color = 'verde';
miTriangulo.calcArea();
