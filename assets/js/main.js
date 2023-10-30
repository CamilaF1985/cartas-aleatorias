// Definir los palos y los valores de las cartas
const palos = ['♠', '♣', '♥', '♦'];
const valores = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'K', 'Q', 'J', 'A'];

// Función para obtener una carta aleatoria
function obtenerCartaAleatoria() {
    const paloAleatorio = palos[Math.floor(Math.random() * palos.length)];
    const valorAleatorio = valores[Math.floor(Math.random() * valores.length)];
    return { palo: paloAleatorio, valor: valorAleatorio };
}

// Función para mostrar una carta en el DOM
function mostrarCarta() {
    const carta = obtenerCartaAleatoria();
    const cartaElement = document.querySelector('.carta');
    const numeroElement = cartaElement.querySelector('.numero');
    const simboloElement = cartaElement.querySelector('.simbolo');
    const simboloRotadoElement = cartaElement.querySelector('.simbolo-rotado');

    numeroElement.textContent = carta.valor;
    simboloElement.textContent = carta.palo;
    simboloRotadoElement.textContent = carta.palo;

    // Cambiar el color a rojo solo cuando el palo sea corazón o diamante
    if (carta.palo === '♥' || carta.palo === '♦') {
        cartaElement.classList.add('rojo');
    } else {
        cartaElement.classList.remove('rojo');
    }
}

const botonNuevaCarta = document.getElementById('nueva-carta');
botonNuevaCarta.addEventListener('click', mostrarCarta);

// Mostrar una carta aleatoria al cargar la página
mostrarCarta();

// Redimensionar el tamaño de la carta
function aplicarDimensionesEnCm() {
    const anchoCmInput = document.getElementById('ancho-cm');
    const altoCmInput = document.getElementById('alto-cm');
    const cartaElement = document.querySelector('.carta');

    const anchoCm = parseFloat(anchoCmInput.value);
    const altoCm = parseFloat(altoCmInput.value);

    // Conversión de centímetros a píxeles (ppcm * cm)
    const ppcm = 37.8;
    const anchoPx = anchoCm * ppcm;
    const altoPx = altoCm * ppcm;

    // Aplicar las dimensiones en píxeles al contenedor de la carta
    cartaElement.style.width = anchoPx + 'px';
    cartaElement.style.height = altoPx + 'px';
}

const botonAplicarDimensionesCm = document.getElementById('aplicar-dimensiones-cm');
botonAplicarDimensionesCm.addEventListener('click', aplicarDimensionesEnCm);

// Función para mostrar una nueva carta automáticamente cada 10 segundos
function mostrarNuevaCartaAutomaticamente() {
    mostrarCarta();
}

// Función que inicia el temporizador
function iniciarIntervalo() {
    let intervalo = setInterval(mostrarNuevaCartaAutomaticamente, 10000);

    // Detiene el temporizador si se hace clic en el botón "Nueva Carta" y luego lo reinicia
    botonNuevaCarta.addEventListener('click', () => { clearInterval(intervalo); mostrarCarta(); iniciarIntervalo(); });
}

iniciarIntervalo();







