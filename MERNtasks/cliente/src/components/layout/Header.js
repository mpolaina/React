import React from 'react';

const Header = () => {
  return (  
      <header className='app-header'>
          <p className='nombre-usuario'>Hola <span>Manuel</span></p>
          <nav className='nav-principal'>
              <a href='#!'>Cerrar sesión</a>
          </nav>
      </header>
  );
}
 
export default Header;