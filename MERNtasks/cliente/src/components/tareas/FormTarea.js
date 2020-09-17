import React, { useContext, useState, useEffect } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext'
import tareaContext from '../../context/tareas/tareaContext'

const FormTarea = () => {
  
      // STATE de proyectos
      const proyectosContext = useContext(proyectoContext)
      const { proyecto } = proyectosContext
      
      // obtener la fn del context de tareas
      const tareasContext = useContext(tareaContext)
      const { tareaseleccionada, errortarea, agregarTarea, validarTarea, obtenerTareas, actualizarTarea, limpiarTarea } = tareasContext
      
      // Effect que detecta tarea seleccionada
      useEffect(() => {
          if(tareaseleccionada !== null) {
            guardarTarea(tareaseleccionada)
          } else {
            guardarTarea({
              nombre: ''
            })
          }
          
      }, [tareaseleccionada])
      
      // STATE del formulario
      const [tarea, guardarTarea] = useState({
          nombre: ''
      })
      // extraer nombre de la tarea
      const { nombre } = tarea;
      
      // Si no hay ningún proyecto seleccionado
      if(!proyecto) return null;
        
      // Array destructuring para extraer proyecto actual
      const [ proyectoActual ] = proyecto;
      
      // Leer los valores del formulario
      const handleChange = e => {
          guardarTarea({
              ...tarea,
              [e.target.name] : e.target.value
          })
      }
      
      const onSubmit = e => {
          e.preventDefault();
          // Validar
          if(nombre.trim() === ''){
            validarTarea()
            return
          }
          
          // ¿Es edición o nueva tarea?
          if(tareaseleccionada === null) {
              // Agregar la nueva tarea al state.tareas, en su proyecto y con estado "incompleta"
              tarea.proyecto = proyectoActual._id
              tarea.estado = false
              agregarTarea(tarea)
          } else {
            // editar tarea existente
            actualizarTarea(tarea)
            // elimina la tarea seleccionada
            limpiarTarea() 
          }
          // Obtener y filtrar tareas del proyectoActual
          obtenerTareas(proyectoActual._id)
          
          // Reiniciar el form
          guardarTarea({
              nombre: ''
          })
      }
      
      return (  
          <div className='formulario'>
              <form
                  onSubmit={onSubmit}
              >
                  <div className='contenedor-input'>
                      <input
                          type='text'
                          className='input-text'
                          placeholder='Nombre tarea...'
                          name='nombre'
                          value={nombre}
                          onChange={handleChange}
                      />
                  </div>
                  <div className='contenedor-input'>
                      <input
                          type='submit'
                          className='btn btn-primario btn-submit btn-block'
                          value={tareaseleccionada ? 'Guardar tarea' : 'Agregar tarea'}
                      />
                  </div>
              </form>
              { errortarea 
                  ? <p className='mensaje error'>Una tarea sin nombre, no es tarea ;)</p>
                  : null
              }
          </div> 
      );
}
 
export default FormTarea;