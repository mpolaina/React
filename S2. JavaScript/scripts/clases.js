// Clases
export const tareita = 'Aprender rápidito JS'
 

// EXPORTAR UNA FUNCIÓN
export const crearTarea = (tarea, urgencia) => {
  return `La tarea ${tarea} tiene una urgencia ${urgencia}`
}

export class Tarea {
  constructor(nombre, prioridad){
    this.nombre = nombre
    this.prioridad = prioridad
  }
  verTarea(){
    return (`${this.nombre} tiene una prioridad ${this.prioridad}`)
  }
}

// HEREDAR UNA CLASE =================================
class Compra extends Tarea{
  constructor(nombre, prioridad, cantidad){
    super(nombre, prioridad)
    this.cantidad = cantidad
  }
  mostrar(){
    //super.verTarea()
    return `${this.verTarea()} y la cantidad es ${this.cantidad}`
  }
}

// Crear objetos Tarea
let tarea1 = new Tarea('Aprender JS', 'Alta')
let tarea2 = new Tarea('Aprender React', 'Media')
let tarea3 = new Tarea('Repasar Vue JS', 'Baja')
// console.log(tarea1, tarea2, tarea3)
// console.log(tarea1.metodoMostrar())
// console.log(tarea2.metodoMostrar())
// console.log(tarea3.metodoMostrar())

// Crear objetos compra
let compra1 = new Compra('Café', 'Urgente', 3)
console.log(compra1)
// Hereda también los métodos
console.log(compra1.mostrar())

