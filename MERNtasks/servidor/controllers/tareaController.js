const Tarea = require('../models/Tarea')
const Proyecto = require('../models/Proyecto') // Importamos el modelo proyecto, ya que la tarea pertenece a un proyecto
const { validationResult } = require('express-validator')

// CREAR NUEVA TAREA
exports.crearTarea = async (req, res) => {
    
    // Revisar si hay errores
    const errores = validationResult(req)
    if(!errores.isEmpty()){
        return res.status(400).json({ errores: errores.array() })
    }
    
    try {
        
        // Extraer el proyecto y comprobar si existe
        const { proyecto } = req.body
        // Buscar proyecto
        const existeProyecto = await Proyecto.findById(proyecto)
        if( !existeProyecto ){
            return res.status(404).json({ msg: 'Proyecto no encontrado' })
        }
        // Revisar si el proyecto pertenece al usuario autenticado
        if( existeProyecto.creador.toString() !== req.usuario.id ) {
            return res.status(401).json({msg: 'No autorizado'})
        }
        
        // Creamos la tarea
        const tarea = new Tarea(req.body)
        await tarea.save()
        res.json({ tarea })
    
      } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}

// OBTENER TAREAS POR PROYECTO
exports.obtenerTareas = async (req, res) => {
    
    try {
        
        // Extraer el proyecto y comprobar si existe
        const { proyecto } = req.body
        // Buscar proyecto
        const existeProyecto = await Proyecto.findById(proyecto)
        if( !existeProyecto ){
            return res.status(404).json({ msg: 'Proyecto no encontrado' })
        }
        // Revisar si el proyecto pertenece al usuario autenticado
        if( existeProyecto.creador.toString() !== req.usuario.id ) {
            return res.status(401).json({msg: 'No autorizado'})
        }
        
        // Obtener las tareas por proyecto - req.body
        const tareas = await Tarea.find({ proyecto })
        res.json({ tareas })
        
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
    }
    
}

// ACTUALIZAR TAREA
exports.actualizarTarea = async (req, res) => {
  
    try {
        // Extraer el proyecto y comprobar si existe
        const { proyecto, nombre, estado } = req.body
        
        // Revisar si la tarea existe
        let tarea = await Tarea.findById(req.params.id)
        if(!tarea){
          return res.status(404).json({msg: 'No existe la tarea'})
        }
        
        // Buscar proyecto
        const existeProyecto = await Proyecto.findById(proyecto)
        
        // Revisar si el proyecto pertenece al usuario autenticado
        if( existeProyecto.creador.toString() !== req.usuario.id ) {
            return res.status(401).json({msg: 'No autorizado'})
        }
        
        // Crear un objeto con la nueva información
        const nuevaTarea = {}
        if( nombre ) nuevaTarea.nombre = nombre
        if( estado ) nuevaTarea.estado = estado
        
        // Guardar la tarea
        tarea = await Tarea.findByIdAndUpdate({ _id: req.params.id }, nuevaTarea, { new: true})
        
        res.json({ tarea })
        
        
        
        
        
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
    }
  
}

