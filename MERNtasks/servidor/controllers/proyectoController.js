const Proyecto = require('../models/Proyecto')
const { validationResult } = require('express-validator')

exports.crearProyecto = async (req, res) => {
    
    // Revisar si hay errores
    const errores = validationResult(req)
    if(!errores.isEmpty()){
        return res.status(400).json({ errores: errores.array() })
    }
  
    try {
        // Crear un nuevo proyecto
        const proyecto = new Proyecto(req.body)
        // Guardar el creador con JWT
        proyecto.creador = req.usuario.id
        // Guardar el proyecto
        proyecto.save();
        res.json(proyecto);
        
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}

// Obtener todos los proyectos del usuario actual
exports.obtenerProyectos = async (req, res) => {
  
      try {
          const proyectos = await Proyecto.find({ creador: req.usuario.id })
          res.json({ proyectos })
      } catch (error) {
          console.log(error)
          res.status(500).send('Hubo un error')
      }
  
}

// Actualizar un proyecto
exports.actualizarProyecto = async (req, res) => {
      
      // Revisar si hay errores
      const errores = validationResult(req)
      if( !errores.isEmpty() ){
          return res.status(400).json({ errores: errores.array() })
      }
      
      // extraer la información del proyecto
      const { nombre } = req.body
      const nuevoProyecto = {}
      // Si el usuario pasa un nombre, el nombre del nuevo proyecto será el nombre que envíe el usuario
      if( nombre ){
          nuevoProyecto.nombre = nombre
      }
      
      try {
          // revisar el ID
          let proyecto = await  Proyecto.findById(req.params.id)
          
          // si el proyecto existe o no
          if( !proyecto ){
              return res.status(404).json({ msg: 'Proyecto no encontrado'})
          }
          
          // verificar el creador del proyecto
          if( proyecto.creador.toString() !== req.usuario.id ) {
              return res.status(401).json({ msg: 'No autorizado' })
          }
          
          // actualizar
          proyecto = await Proyecto.findByIdAndUpdate({ _id : req.params.id }, { $set : nuevoProyecto }, { new: true})
          res.json({ proyecto })
        
      } catch (error) {
          console.log(error)
          res.status(500).send('Error en el servidor')
      }
}

// Eliminar un proyecto por su id
exports.eliminarProyecto = async(req, res) => {
  
      try {
          // revisar el ID
          let proyecto = await  Proyecto.findById(req.params.id)
          
          // si el proyecto existe o no
          if( !proyecto ){
              return res.status(404).json({ msg: 'Proyecto no encontrado'})
          }
          
          // verificar el creador del proyecto
          if( proyecto.creador.toString() !== req.usuario.id ) {
              return res.status(401).json({ msg: 'No autorizado' })
          }
          // Eliminar el proyecto
          await Proyecto.findByIdAndRemove({ _id : req.params.id })
          res.json({ msg: 'Proyecto eliminado' })
          
      } catch (error) {
          console.log(error)
          res.status(500).send('Error en el servidor')
      }
  
  
  
}