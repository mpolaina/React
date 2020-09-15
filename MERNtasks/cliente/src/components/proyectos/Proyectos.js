import React, { useContext, useEffect } from 'react';
import Sidebar from '../layout/Sidebar'
import Header from '../layout/Header'
import FormTarea from '../tareas/FormTarea'
import ListaTareas from '../tareas/ListaTareas'
import authContext from '../../context/autenticacion/authContext'

const Proyectos = () => {
  
  // extraer la información de autentificación
  const authcontext = useContext(authContext)
  const { obtenerUsuario } = authcontext
  
  useEffect(() => {
    obtenerUsuario()
    // eslint-disable-next-line
  }, [])
  
  return (  
    <div className='contenedor-app'>
        <Sidebar/>
        <div className='seccion-principal'>
            <Header/>
            <main>
                <FormTarea/>
                <div className='contenedor-tareas'>
                    <ListaTareas/>
                </div>
              
            </main>
        </div>
        
    </div>
  );
}
 
export default Proyectos;