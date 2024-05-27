function cifradoCesar(mensaje, clave) {

    var alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    mensaje = mensaje.toUpperCase();

    var mensajeCifrado = "";

    for (let i = 0; i < mensaje.length; i++) {

        const caracter = mensaje[i];

        if (alfabeto.indexOf(caracter) != -1) {

            var posicionActual = alfabeto.indexOf(caracter);

            // Aplicamos el desplazamiento (cifrado) sumando la clave
            var nuevaPosicion = (posicionActual + clave) % 26;

            // Concatenamos el caracter cifrado al mensaje cifrado resultante
            mensajeCifrado += alfabeto[nuevaPosicion];
        } else {
            // Mantenemos los caracteres que no son letras del alfabeto sin cifrar
            mensajeCifrado += caracter;
        }
    }

    return mensajeCifrado;
}

function desencriptar(mensaje, clave) {
    // La desencriptación simplemente implica aplicar el cifrado con la clave negativa
    return cifradoCesar(mensaje, -clave);
}

// Ejemplo de uso
var mensajeOriginal = "Hola, mundo!";
var clave = 3;

var mensajeCifrado = cifradoCesar(mensajeOriginal, clave);
console.log("Mensaje original:", mensajeOriginal);
console.log("Mensaje cifrado:", mensajeCifrado);

var mensajeDesencriptado = desencriptar(mensajeCifrado, clave);
console.log("Mensaje desencriptado:", mensajeDesencriptado);