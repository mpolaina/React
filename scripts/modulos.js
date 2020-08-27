// MÓDULOS
import  {tareita, crearTarea, Tarea}  from './clases.js'
console.log('Desde modulos.js', tareita )

const tareaNew = crearTarea('acostarme', 'alta')
console.log(tareaNew)

const tarea1 = new Tarea('Me voy a la cama', 'Urgentemente')
console.log((tarea1))
console.log(tarea1.verTarea())