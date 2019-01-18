const palabra = document.getElementById("palabraIngresada")
const number = document.getElementById("num") 

cifrar.addEventListener('click', () => {
    let palabraIngresada = palabra.value;
    let palabraParaEncriptar = palabraIngresada.toUpperCase();
    let numeroIngresado = number.value;  
    let offset = parseInt(numeroIngresado)  
    let palabraEncriptada = []
    window.cipher.encode(offset, palabraParaEncriptar)
    console.log(contrasenaNueva)
    document.getElementById('palabraCifrada').innerHTML= 'Tu nueva contraseña es: ' + contrasenaNueva; 
})


