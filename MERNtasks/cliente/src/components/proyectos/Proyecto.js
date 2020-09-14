import React, { useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext'
import tareaContext from '../../context/tareas/tareaContext'

const Proyecto = ({proyecto}) => {
  
      // Obtener el state de proyectos
      const proyectosContext = useContext(proyectoContext)
      const { proyectoActual } = proyectosContext // extraemos del context, mediante el proyectoContext.provider
      
      // obtener la fn del context de tareas
      const tareasContext = useContext(tareaContext)
      const { obtenerTareas } = tareasContext
      
      // función para agregar el proyecto actual
      const seleccionarProyecto = id => {
          proyectoActual(id) // fijar proyecto actual
          obtenerTareas(id)  // filtrar tareas del proyecto actual
      }
    
      return (  
          <li>
              <button
                  type='button'
                  className='btn btn-blank btn-block'
                  onClick={() => seleccionarProyecto(proyecto._id)}
              >{proyecto.nombre}</button>
          </li>
      );
}
 
export default Proyecto;