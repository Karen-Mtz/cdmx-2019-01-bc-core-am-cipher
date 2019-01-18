window.cipher = {
encode:  (offset, palabraParaEncriptar ) => {
let palabraEncriptada = []
for (let i = 0; i <= palabraParaEncriptar.length; i++) { // bucle que recorre cada caracter de la palabra 
let posicionEnCipher = (palabraParaEncriptar.charCodeAt(i) - 65 + offset) % 26 + 65 // sacar el codigo ascii de texto con charcodeat(i), aplicar formula para hacer el cifrado y guardar el resultado en una variable porque es la nueva posicion de cada letra
console.log(posicionEnCipher)
let nuevaLetra = (String.fromCharCode(posicionEnCipher)) //string.fromcharcode convierte el código ascii en letra
console.log(nuevaLetra)
palabraEncriptada.push(nuevaLetra) //agrega las letras nuevas al array
let contrasenaNueva = palabraEncriptada.join(''); //junta el contenido del array
console.log(contrasenaNueva)
document.getElementById('palabraCifrada').innerHTML= 'Tu nueva contraseña es: ' + contrasenaNueva; 
}
}
};
