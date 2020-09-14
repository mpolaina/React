import React, { useContext, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom'
import authContext from '../../context/autenticacion/authContext'

const RutaPrivada = ({ component: Component, ...props}) => {
   
    const authcontext = useContext(authContext)
    const { autenticado, cargando, obtenerUsuario } = authcontext
    // Llamamos a obtenerUsuario para que al recargar no pasa autenticado: null 
    useEffect(() => {
        obtenerUsuario()
        // eslint-disable-next-line
    }, [])
  
    return (  
        <Route { ...props } render={ props => !autenticado && !cargando ? (
            
            <Redirect to="/" />
        
            ) : (
          
            <Component {...props} />
              
            ) }
        
        />
    );
}
 
export default RutaPrivada;