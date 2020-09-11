import React, { useContext, useEffect } from 'react';
import Proyecto from './Proyecto'
import proyectoContext from '../../context/proyectos/proyectoContext'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

const ListadoProyectos = () => {
  
    // extraer proyectos del stateInicial
    const proyectosContext = useContext(proyectoContext)
    // extraemos datos del context
    const { proyectos, obtenerProyectos } = proyectosContext
    
    // Obtener proyectos cuando carga el componente
    useEffect(() => {
      obtenerProyectos()
    }, [])
    
    // Revisar si proyectos tiene contenido
    if(proyectos.length === 0) return <p className="mensaje">No tienes ningún proyecto, <br/>¡Crea uno ahora!</p>;
    
    
    return (  
        <ul className='listado-proyectos'>
            <TransitionGroup>
                {proyectos.map(proyecto => (
                    <CSSTransition
                        key={proyecto.id}
                        timeout={800}
                        classNames='proyecto'
                    >
                        <Proyecto
                            proyecto={proyecto}
                        />
                      
                    </CSSTransition>
                ))}
            </TransitionGroup>
            
        </ul>
    );
}
 
export default ListadoProyectos;