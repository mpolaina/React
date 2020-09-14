import React, { Fragment, useContext } from 'react';
import Tarea from './Tarea'
import proyectoContext from '../../context/proyectos/proyectoContext'
import tareaContext from '../../context/tareas/tareaContext'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

const ListaTareas = () => {
  
    // Obtener el state de proyects
    const proyectosContext = useContext(proyectoContext)
    // extraemos del context, mediante el proyectoContext.provider
    const { proyecto, eliminarProyecto } = proyectosContext
    
    // obtener las tareas del proyecto
    const tareasContext = useContext(tareaContext)
    const { tareasproyecto } = tareasContext
    
    // Si no hay ningún proyecto seleccionado
    if(!proyecto) return <h2>Selecciona un proyecto</h2>
    
    // Array destructuring para extraer proyecto actual
    const [ proyectoActual ] = proyecto
  
    return (  
        <Fragment>
            <h2>Proyecto: {proyectoActual.nombre}</h2>
            <ul className='listado-tareas'>
                { tareasproyecto.length === 0
                  ? ( <li className='tarea'><p>No hay tareas</p></li> )
                  : 
                  <TransitionGroup>
                      {tareasproyecto.map(tarea => (
                          <CSSTransition
                              key={tarea._id}
                              timeout={400}
                              classNames='tarea'
                          >
                              <Tarea
                                  tarea={tarea}
                              />
                          </CSSTransition>
                      ))}  
                  </TransitionGroup>
                }
            </ul>
            
            <button
                type='button'
                className='btn btn-eliminar'
                onClick={() => eliminarProyecto(proyectoActual._id)}
            >Eliminar proyecto &times;</button>
        </Fragment>
    );
}
 
export default ListaTareas;