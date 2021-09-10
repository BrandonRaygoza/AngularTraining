var myBoolean : boolean = true;
var myNumber : number = 1234;
var myStringArray : string[] = [`first`, `second`,`third`];
let flag : boolean = false;

// con any, puedo formatear la variable a cualquier tipo de dato
// DYNAMIC TYPING (que es el que ya tiene JS)
let dato : any;
dato = 1000;
dato = "cadena";

// CUSTOM TYPES
type Animal = "Cheetah" | "Lion";
const prueba : Animal = "Cheetah";
// const prueba2: Animal = "Turtle"; // Marcara error

// ENUM
enum Brands { Chevrolet, Cadillac, Ford, Buick, Chrysler, Dodge };
const myCar: Brands = Brands.Cadillac;

// VOID
function saludarAlUsuario() : void{
    console.log("Hola usuario");
}

// <func_name(param_name:data_type, ... ,):return_type>
function suma(a:number, b:number):number{
    return a+b;
}

// FUNCTION OVERLOADING
function hello(names: string): string;
function hello(names: string[]): string;
function hello(names: any, greeting?: string): string {
    let namesArray: string[];
    if (Array.isArray(names)) {
        namesArray = names;
    } else {
        namesArray = [names];
    }

    if (!greeting) {
        greeting = 'Hello';
    }
    return greeting + ', ' + namesArray.join(' and ') + '!';
}

class Persona{
    private nombre: string = '';
    private apellidoMaterno : string = '';
    private apellidoPaterno : string = '';

    // Lo creo igual que los demas miembros
    constructor(nombre: string, am: string, ap: string, private isAdult : boolean){
        this.nombre = nombre;
        this.apellidoMaterno = am;
        this.apellidoPaterno = ap;
    }

    getIne() : string{
        return this.isAdult ? "Puede tramitar" : "No puede tramitar";
    }
}

interface FiguraGeometrica{
    color: string;
    diametro?  : number;
    calcArea() : number;
}

class Rectangulo implements FiguraGeometrica{
    private base : number = 0;
    private altura : number = 0;
    color : string = "verde";

    calcArea() : number {
        return this.base*this.altura;
    }
}

class Triangulo implements FiguraGeometrica{
    private base : number = 0;
    private altura : number = 0;

    color : string = "rojo";

    calcArea() : number {
        return (this.base*this.altura)/2;
    }
}

class Circulo implements FiguraGeometrica{
    color : string = "rojo";
    diametro : number = 10;

    calcArea() : number {
        return (Math.PI*(this.diametro/2)**2);
    }
}

class TrianguloIsosceles extends Triangulo{

}

// let miTriangulo = new TrianguloIsosceles(); se vale
let miTriangulo : FiguraGeometrica = new TrianguloIsosceles();
miTriangulo.color = 'verde';
miTriangulo.calcArea();