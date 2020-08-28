// Template strings
const nombre = 'Manuel'
const trabajo = 'Creativo'

// Concatenar JS
console.log('Nombre: ' + nombre + ', Trabajo: ' + trabajo)
console.log(`Nombre:  ${nombre}, Trabajo: ${trabajo} `)

// Concatenar con multiples lineas
let html = `
      <ul>
      <li>Nombre: ${nombre}</li>
      <li>Trabajo: ${trabajo}</li>
      </ul>
`

document.querySelector('#app').innerHTML = html