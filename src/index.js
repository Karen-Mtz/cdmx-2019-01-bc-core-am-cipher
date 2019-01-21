const palabra = document.getElementById("palabraIngresada")
const number = document.getElementById("num") 
const cifrar = document.getElementById("cifrar")
const descifrar = document.getElementById ("descifrar")

cifrar.addEventListener('click', () => {
let palabraIngresada = palabra.value;
let palabraParaEncriptar = palabraIngresada.toUpperCase();
let numeroIngresado = number.value;  
let offset = parseInt(numeroIngresado)  
let resultEncode = window.cipher.encode(offset, palabraParaEncriptar)
document.getElementById('palabraCifrada').innerHTML= 'Tu nueva contraseña es: ' + resultEncode; 
}
)

const palabraDecode = document.getElementById("palabraIngresadaDecode")
const numberDecode = document.getElementById("numDecode") 

descifrar.addEventListener('click', () => {
let palabraIngresadaDecode = palabraDecode.value;
let palabraParaDescifrar = palabraIngresadaDecode.toUpperCase();
let numeroIngresadoDecode = numberDecode.value;  
let offsetDecode = parseInt(numeroIngresadoDecode)  
let resultDecode = window.cipher.decode(offsetDecode, palabraParaDescifrar) 
document.getElementById('palabraDescifrada').innerHTML= resultDecode; 
}
)