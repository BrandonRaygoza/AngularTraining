"use strict";
function sum(a, b) {
    return a + b;
}
function sub(a, b) {
    return a - b;
}
function mul(a, b) {
    return a * b;
}
function div(a, b) {
    return a / b;
}
const mayorDeDosNumeros = (a, b) => {
    return ((a > b) ? a : b);
};
var Rol;
(function (Rol) {
    Rol[Rol["Admin"] = 0] = "Admin";
    Rol[Rol["User"] = 1] = "User";
    Rol[Rol["SuperUser"] = 2] = "SuperUser";
})(Rol || (Rol = {}));
;
function agregaUsuario(name, rol) {
    console.log(`The user ${name}, has been added as ${rol}`);
}
agregaUsuario("Ivan", Rol.Admin);
