function sum(a:number, b:number): number{
    return a+b;
}

function sub(a:number, b:number): number{
    return a-b;
}

function mul(a:number, b:number): number{
    return a*b;
}

function div(a:number, b:number): number{
    return a/b;
}

const mayorDeDosNumeros = (a:number,b:number) => {
    return ((a > b) ? a : b);
}

enum Rol { Admin, User, SuperUser};

function agregaUsuario(name:string, rol:Rol): void{
    console.log(`The user ${name}, has been added as ${rol}`)
}

agregaUsuario("Ivan", Rol.Admin)