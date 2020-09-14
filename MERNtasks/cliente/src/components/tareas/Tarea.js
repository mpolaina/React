import React, { useContext } from 'react';
import { FiEdit, FiTrash } from "react-icons/fi";
import proyectoContext from '../../context/proyectos/proyectoContext'
import tareaContext from '../../context/tareas/tareaContext'

const Tarea = ({tarea}) => {
    
    // Extraer si un proyecto está activo
    const proyectocontext = useContext(proyectoContext)
    const { proyecto } = proyectocontext
    
    // obtenemos funciones del tareaContext
    const tareasContext = useContext(tareaContext)
    const { eliminarTarea, obtenerTareas, actualizarTarea, guardarTareaActual } = tareasContext
    
    // Extraer proyecto actual
    const [ proyectoActual ] = proyecto
    
    // Fn ELIMINAR tarea
    const eliminar = id => {
      eliminarTarea(id, proyectoActual._id)
      obtenerTareas(proyectoActual.id)
    }
    
    // Fn modificar estado tarea
    const cambiarEstado = tarea => {
        if(tarea.estado) {
            tarea.estado = false;
        } else {
            tarea.estado = true;
        }
        actualizarTarea(tarea)
    }
    
    // Fn EDITAR tarea
    const seleccionarTarea = tarea => {
      guardarTareaActual(tarea)
    }
    
    return (  
        <li className='tarea sombra'>
            <p>{tarea.nombre}</p>
            <div className='estado'>
                { tarea.estado 
                  ?
                      (
                          <button
                              type='button'
                              className='completo'
                              onClick={() => cambiarEstado(tarea)}
                          >
                            Completada
                          </button>
                      )
                  :
                      (
                          <button
                              type='button'
                              className='incompleto'
                              onClick={() => cambiarEstado(tarea)}
                          >
                            Pendiente
                          </button>
                      )
                }
            </div>
            
            <div className='acciones'>
                <button
                    type='button'
                    className='btn btn-secundario-outline'
                    onClick={() => seleccionarTarea(tarea)}
                ><FiEdit/></button>
                
                <button
                    type='button'
                    className='btn btn-warning-outline'
                    onClick={() => eliminar(tarea._id)}
                ><FiTrash/></button>
            </div>
        </li>
        
    );
}
 
export default Tarea;