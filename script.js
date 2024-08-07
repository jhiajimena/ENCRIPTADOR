const textArea = document.querySelector(".presentacion_texto");
const mensaje = documment.querySelector(".presentacion_rectangulo_texto");

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"
function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value="";
    mensaje.style.backgroundImage = "none"

}
function btnDesencriptar(){
    const textoDesencriptado = Desencriptar(textArea.value)
    mensaje.value = textoDesencriptado
    textArea.value="";
    

}


function encriptar(stringEncriptado){
let matrizCodigo =(["a","ai"],["e","enter"],["i","imes"],["o","ober"],["u","ufat"]);
stringEncriptado = stringEncriptado.tolowerCase()

for(let i = 0;i< matrizCodigo.length;i++){
    if(stringEncriptado.includes(matrizCodigo[i][0])){
        stringEncriptado= stringEncriptado.replaceall(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptado;
}

function desencriptar(stringDesencriptado){
    let matrizCodigo =(["a","ai"],["e","enter"],["i","imes"],["o","ober"],["u","ufat"]);
    stringDesencriptado = stringDesencriptado.tolowerCase()
    
    for(let i = 0;i< matrizCodigo.length;i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado= stringDesencriptado.replaceall(matrizCodigo[i][1], matrizCodigo[i][0]);
            }
        }
        return stringDesencriptado;
    }