// PARÁMETROS POR DEFAULT 
// se pasan al lado del parámetro al definir la función
function actividad(nombre = 'Walter White', actividad = 'cociendo meta') {
  console.log(`El señor ${nombre}, está ${actividad}`)
}
actividad('Manuel', 'Aprendiendo Js')
actividad()

// en Function Expression - se usa en React
const trabajo = function (nombre = 'Fulanito', empleo = 'sus labores') {
  console.log(`El señor ${nombre}, se dedica a ${empleo}`)
}
trabajo()