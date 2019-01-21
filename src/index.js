const palabra = document.getElementById("palabraIngresada")
const number = document.getElementById("num") 

cifrar.addEventListener('click', () => {
let palabraIngresada = palabra.value;
let palabraParaEncriptar = palabraIngresada.toUpperCase();
let numeroIngresado = number.value;  
let offset = parseInt(numeroIngresado)  
window.cipher.encode(offset, palabraParaEncriptar) 
}
)

const palabraDecode = document.getElementById("palabraIngresadaDecode")
const numberDecode = document.getElementById("numDecode") 

descifrar.addEventListener('click', () => {
let palabraIngresadaDecode = palabraDecode.value;
let palabraParaDescifrar = palabraIngresadaDecode.toUpperCase();
let numeroIngresadoDecode = numberDecode.value;  
let offsetDecode = parseInt(numeroIngresadoDecode)  
window.cipher.decode(offsetDecode, palabraParaDescifrar) 
}
)