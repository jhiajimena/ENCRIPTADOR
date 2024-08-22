var botonEncriptar = document.querySelector(".boton_encriptar");
var botonDesencriptar = document.querySelector(".boton_desencriptar");
var muneco = document.querySelector(".imagen");
var contenedor = document.querySelector(".presentacion_texto");
var resultado = document.querySelector(".mensaje");
var rectangulo = document.querySelector(".presentacion_rectangulo");
var rectanguloResultado = document.querySelector(".presentacion_rectangulo_resultado");

window.onload = function () {
    rectanguloResultado.classList.add("ocultar");
};

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function recuperarTexto() {
    var texto = contenedor.value;
    let caracteresPermitidos = /^[a-z\s]+$/;
    if (!caracteresPermitidos.test(texto)) {
        alert("El texto ingresado no es válido. Solo se permiten letras minúsculas y espacios.");
        return "";
    }

    return texto;
}

function encriptar() {
    var cajatexto = recuperarTexto();
    if (cajatexto) {
        ocultarAdelante();
        resultado.textContent = encriptarTexto(cajatexto);
        habilitarTexto();
    }
}

function desencriptar() {
    var cajatexto = recuperarTexto();
    if (cajatexto) {
        ocultarAdelante();
        resultado.textContent = desencriptarTexto(cajatexto);
        habilitarTexto();
    }
}

function ocultarAdelante() {
    muneco.classList.add("ocultar");
    rectangulo.classList.add("ocultar");
    rectanguloResultado.classList.remove("ocultar");
}

function encriptarTexto(stringEncriptado) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptado.includes(matrizCodigo[i][0])) {
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptado;
}

function desencriptarTexto(stringDesencriptado) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptado.includes(matrizCodigo[i][1])) {
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptado;
}

const btnCopiar = document.querySelector(".copiar");
btnCopiar.addEventListener("click", copiar = () => {
    var contenido = document.querySelector(".mensaje").textContent;
    navigator.clipboard.writeText(contenido);
    const range = document.createRange();
    range.selectNodeContents(resultado);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);

    muneco.classList.remove("ocultar");

});
function habilitarTexto() {
    contenedor.classList.remove("ocultar");
    contenedor.disabled = false;
    contenedor.value = "";
    contenedor.placeholder = "Ingrese el texto aquí...";
    contenedor.focus();
}
function mostrarRectangulo() {
    contenedor.classList.remove("ocultar");
    rectangulo.classList.remove("ocultar");
    rectanguloResultado.classList.add("ocultar");
    muneco.classList.remove("ocultar");
}
