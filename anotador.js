// Anotador de Puntaje 
 alert("Tanteador de puntaje")

const soloNum = new RegExp('^[A-Z]+$', 'i');
const anotador = [];

class Integrante {
    constructor(nombre, puntaje) {
        this.nombre = nombre;
        this.puntaje = puntaje;
    }
}

const jugador1 = new Integrante("Leo", 0);
anotador.push(jugador1);
const jugador2 = new Integrante("Vito", 0);
anotador.push(jugador2);

function menuInicial() {
    let menu;
    do {
        menu = prompt("Empecemos! \n 1) Agregar Jugador \n 2) Eliminar Jugador \n 3) Modificar Puntaje \n 4) Puntaje Parcial  \n 5) Salir");
    } while (menu == "" || menu == null || soloNum.test(menu) || menu < 0 || menu > 5);
    return menu;
}

function ver() {
    let texto = "";
    let linea = "";
    for (let i = 0; i < anotador.length; i++) {
        jugador = anotador[i];
        texto = (jugador.nombre + "   " + jugador.puntaje + "\n");
        linea = linea + texto;
    }
    alert("Lista de jugadores" + anotador.length + "\n\n" + linea);
}
function agregar() {
    let nombre = prompt("Nombre del nuevo jugador " );
    let puntaje = ""; //validaciones

    do {
        puntaje = prompt("Ingrese puntaje:");
    } while (puntaje == "" || puntaje == null || soloNum.test(puntaje));
    let jugador = new Integrante(nombre, puntaje);
    anotador.push(jugador);

}
function eliminar() {
    let nombre = prompt("A quien deseas eliminar? ");
    let jugador = anotador.find(Integrante => Integrante.nombre.toLowerCase() == nombre.toLowerCase());
    if (jugador == undefined) {
        alert("Ese jugador no esta en la partida actual");
    } else {

        alert("Chau " + jugador.nombre + " !");

        let indice = anotador.indexOf(jugador);
        anotador.splice(indice, 1);
    }
};
function modificarPuntaje() {
    let nombre = prompt("Ingrese el nombre: ");
    let jugador = anotador.find(Integrante => Integrante.nombre.toLowerCase() == nombre.toLowerCase());
    let index = anotador.indexOf(jugador);
    let nuevoNombre, puntaje = ""; //validaciones
    if (jugador == undefined) {
        alert("Ese jugador no esta en la partida actual");
    } else {
        do {
            nuevoNombre = prompt("Jugador : " + jugador.nombre + "\n\nIngrese nuevamente el nombre:");
        } while (nuevoNombre == "" || nuevoNombre == " " || nuevoNombre == null);

        do {
            puntaje = prompt("Puntaje actual: " + jugador.puntaje + "\n\nNuevo puntaje:");
        } while (puntaje == "" || puntaje == null || soloNum.test(puntaje));

        let cambiado = new Integrante(nuevoNombre, puntaje);
        anotador.splice(index, 1, cambiado);
    }
}
let salir = false;
do {
    let seleccion = parseInt(menuInicial());
    if (seleccion == 1) {
        agregar();
    }
    if (seleccion == 2) {
        eliminar();
    }
    if (seleccion == 3) {
        modificarPuntaje();
    }
    if (seleccion == 4) {
        ver();
    }
    if (seleccion == 5) {

        salir = true
    }
} while (salir == false);