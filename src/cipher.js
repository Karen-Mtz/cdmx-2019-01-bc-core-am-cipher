window.cipher = {
encode:  (offset, palabraParaEncriptar ) => {
let palabraEncriptada = []
for (let i = 0; i <= palabraParaEncriptar.length; i++) { 
let posicionEnCipher = (palabraParaEncriptar.charCodeAt(i) - 65 + offset) % 26 + 65 
let nuevaLetra = (String.fromCharCode(posicionEnCipher)) 
palabraEncriptada.push(nuevaLetra) 
let contrasenaNueva = palabraEncriptada.join(''); 
document.getElementById('palabraCifrada').innerHTML= 'Tu nueva contraseña es: ' + contrasenaNueva; 
}
return contrasenaNueva
},

decode:  (offsetDecode, palabraParaDescifrar ) => {
let palabraDescifrada = []
for (let j= 0; j <= palabraParaDescifrar.length; j++) {  
let posicionEnCipherDecode = (palabraParaDescifrar.charCodeAt(j) + 65 - offsetDecode) % 26 + 65 
let nuevaLetraDecode = (String.fromCharCode(posicionEnCipherDecode)) 
palabraDescifrada.push(nuevaLetraDecode) 
let contrasenaNuevaDecode = palabraDescifrada.join(''); 
document.getElementById('palabraDescifrada').innerHTML= contrasenaNuevaDecode; 
}
return contrasenaNuevaDecode
}
};