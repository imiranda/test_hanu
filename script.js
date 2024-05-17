const valores = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
const figuras = ['corazon-rojo', 'diamante-rojo', 'pica-negro', 'trebol-negro'];

function crearCarta(valor, figura) {
    return `<div class="carta ${figura}">${valor}</div>`;
}

function inicializarBaraja() {
    const baraja = [];
    for (const figura of figuras) {
        for (const valor of valores) {
            baraja.push(crearCarta(valor, figura));
        }
    }
    return baraja;
}

function handleClickCarta(carta) {
    // TODO: carta a la derecha
}

function reiniciarJuego() {
    // TODO: reiniciar la baraja
}

document.getElementById('resetButton').addEventListener('click', reiniciarJuego);

const barajaInicial = inicializarBaraja();