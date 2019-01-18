const palabra = document.getElementById("palabraIngresada")
const number = document.getElementById("num") 

cifrar.addEventListener('click', () => {
    let palabraIngresada = palabra.value;
    let palabraParaEncriptar = palabraIngresada.toUpperCase();
    let numeroIngresado = number.value;  
    let offset = parseInt(numeroIngresado)  
    window.cipher.encode(offset, palabraParaEncriptar) 
})
