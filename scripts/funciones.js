// CREANDO FUNCIONES

// FUNCTION DECLARATION -  se pueden llamar en cualquier lugar
// function name(params) {}
saludar('Paco')
function saludar(nombre){
  console.log('Bienvenido ' + nombre)
}
saludar('Manuel')

// FUNCTION EXPRESSION - se declaran antes de utilizarlas
const cliente = function (nombreCliente) {
  console.log('Mostrando datos del cliente: ' + nombreCliente)
}
cliente('Paco') // se llama la función con el nombre de la constante