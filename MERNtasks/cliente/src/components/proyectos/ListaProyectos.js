import React, { useContext, useEffect } from 'react';
import Proyecto from './Proyecto'
import proyectoContext from '../../context/proyectos/proyectoContext'
import alertaContext from '../../context/alertas/alertaContext'
import { CSSTransition, TransitionGroup } from 'react-transition-group'


const ListadoProyectos = () => {
  
    // extraer proyectos del stateInicial y extraemos datos del proyectosContext
    const proyectosContext = useContext(proyectoContext)
    const { mensaje, proyectos, obtenerProyectos } = proyectosContext
    
    // extraemos alertaContext
    const alertacontext = useContext(alertaContext)
    const { alerta, mostrarAlerta } = alertacontext
    
    // Obtener proyectos cuando carga el componente
    useEffect(() => {
      // si hay un error, mostramos alerta
      if(mensaje) {
        mostrarAlerta(mensaje.msg, mensaje.categoria)
      }
      obtenerProyectos()
      // eslint-disable-next-line
    }, [mensaje])
    
    // Revisar si proyectos tiene contenido
    if(proyectos.length === 0) return <p className="mensaje">No tienes ningún proyecto, <br/>¡Crea uno ahora!</p>;
    
    
    return (  
        <ul className='listado-proyectos'>
            
            { alerta ? ( <div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div> ) : null}
            
            <TransitionGroup>
                {proyectos.map(proyecto => (
                    <CSSTransition
                        key={proyecto._id}
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