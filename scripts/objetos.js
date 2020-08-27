// OBJETOS

// OBJECT LITERAL ======================

const persona = {
  nombre: 'Manuel',
  profesion: 'Creativo',
  edad: 39
}
// console.log('El nombre es: ' + persona.nombre)
// console.log('La profesión es: ' + persona.profesion)
// console.log(persona['edad']) // otra forma de acceder al valor

// OBJECT CONSTRUCTOR ======================

function Tarea(nombre, prioridad) {
  this.nombre = nombre
  this.prioridad = prioridad
}

// PROTOTYPE ====================== añade funciones a un objeto
Tarea.prototype.mostarInfo = function(){
  return `La tarea ${this.nombre} tiene una prioridad ${this.prioridad}`
}

// Crear una tarea
const tarea1 = new Tarea('Aprender JS', 'Muy Urgente')
const tarea2 = new Tarea('Aprender React', 'Urgente')
//console.log(tarea1, tarea2)
//console.log(tarea1.nombre)
console.log(tarea1.mostarInfo())

