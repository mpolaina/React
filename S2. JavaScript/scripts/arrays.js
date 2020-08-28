// ARRAYS Y MAP
const carrito = ['Producto1', 'Producto2', 'Producto']
console.log(carrito)

const app = document.querySelector('#app')

// recorrer con forEach
// let html = ''
// carrito.forEach(producto => {
//   html += `<li>${producto}</li>`
//    html = html + `<li>${producto}</li>`
// })
// app.innerHTML = html

// MAP - devuelve un nuevo array =================================

const carritoMap = carrito.map(producto => {
  return 'El producto es ' + producto
})
// console.log(carritoMap)

const persona = {
  nombre: 'Manuel',
  profesion: 'Creativo',
  edad: 39
}

// KEYS Y VALUES =================================
const {nombre} = persona
console.log(Object.keys(persona))
console.log(Object.values(persona))
