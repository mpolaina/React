// MÉTODOS EN ARRAYS

const personas = [
  {nombre: 'Manuel', edad: 39, aprendiendo: 'JavaScript'},
  {nombre: 'Inma', edad: 39, aprendiendo: 'Formular'},
  {nombre: 'Fabio', edad: 5, aprendiendo: 'Saltar'},
  {nombre: 'Miranda', edad: 3, aprendiendo: 'Cantar'}
]

console.log(personas)

// FILTER - Mayores de 20 años ================================
const mas20 = personas.filter(persona => {
  return persona.edad > 20
})
console.log(mas20)

// FIND - Que aprende Fabio ================================
const Fabio = personas.find(persona => {
  return persona.nombre === 'Fabio'
})
console.log(Fabio.aprendiendo)


// REDUCE - Suma  ================================
let total = personas.reduce((edadTotal, persona) => {
  return edadTotal + persona.edad
}, 0)
const numPersonas = personas.length
console.log('El total es: ' + total)
console.log('La media de edad es: ' + total / numPersonas)