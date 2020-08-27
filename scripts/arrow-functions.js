// Function expression
let viajando = function (destino) {
  return `Viajando a la ciudad de ${destino}`
}
let viaje = viajando('Paris')
// Cuando la funcion en let viajando "retorna" un valor y se le asigna a una variable, hacemos el console de esa variable viaje
console.log(viaje)

// Arrow functions
// 1 parámetro, sin paréntesis y se elimina el return y llaves si tiene una sola linea
let viajando2 = destino => `Viajando en ArrowLines a la ciudad de ${destino}`
let viaje2 = viajando2('Italia')
console.log(viaje2)

// Arrow functions - 2 parámetros
let viajando3 = (destino, duracion) => {
  return `Viajando en ArrowLines a la ciudad de ${destino}, en ${duracion} horas`
}
let viaje3 = viajando3('Italia', 'dos')
console.log(viaje3)