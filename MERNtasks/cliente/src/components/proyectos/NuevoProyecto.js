import React, { Fragment, useState, useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext'

const NuevoProyecto = () => {
  
      // Obtener el state del formulario
      const proyectosContext = useContext(proyectoContext)
      // extraemos del context, mediante el proyectoContext.provider
      const { formulario, errorformulario, mostrarFormulario, agregarProyecto, mostrarError } = proyectosContext
  
      // State para Proyecto
      const [proyecto, setProyecto] = useState({
          nombre: ''
      })
      // Leer contenido del input nuevo proyecto
      const onChangeProyecto = e => {
          setProyecto({
            ...proyecto,
            [e.target.name] : e.target.value
          })
      }
      
      // Extraer nombre del proyecto
      const { nombre } = proyecto;
      
      // Al enviar proyecto
      const onSubmitProyecto = e => {
          e.preventDefault();
          // Validar
          if(nombre === ''){
            mostrarError()
            return;
          }
          // Agregar al state
          agregarProyecto(proyecto);
          // Reiniciar el form
          setProyecto({
              nombre: ''
          })
      }
      
      return (  
          <Fragment>
              <button
                  type='button'
                  className='btn btn-block btn-primario'
                  onClick={()=> mostrarFormulario()}
              >
              Nuevo Proyecto  
              </button>
              
              { formulario
                ? 
                    (
                        <form
                        className='formulario-nuevo-proyecto'
                        onSubmit={onSubmitProyecto}
                        >
                          <input
                              type='text'
                              className='input-text'
                              placeholder='Nombre proyecto'
                              name='nombre'
                              value={nombre}
                              onChange={onChangeProyecto}
                          />
                          <input
                              type='submit'
                              className='btn btn-block btn-primario'
                              value='Agregar proyecto'
                          />
                        </form>  
                    )
                : null
              }
              
              { errorformulario 
                  ? <p className='mensaje error'>Nombre del proyecto requerido</p>
                  : null
              }
              
          </Fragment>
        
      );
}
 
export default NuevoProyecto;