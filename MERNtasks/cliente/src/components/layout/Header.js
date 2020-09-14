import React, { useContext, useEffect} from 'react';
import authContext from '../../context/autenticacion/authContext'


const Header = () => {
  
  // extraer la información de autentificación
  const authcontext = useContext(authContext)
  const { usuario, obtenerUsuario, cerrarSesion } = authcontext
  
  useEffect(() => {
    obtenerUsuario()
  }, [])
  
  return (  
      <header className='app-header'>
          {usuario ? <p className='nombre-usuario'>Hola <span>{usuario.nombre}</span></p> : null }
          
          <nav className='nav-principal'>
              <button 
                  className='btn btn-blank cerrar-sesion' 
                  onClick={() => cerrarSesion()}
              >Cerrar sesión</button>
          </nav>
      </header>
  );
}
 
export default Header;