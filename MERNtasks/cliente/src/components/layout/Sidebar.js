import React from 'react';
import NuevoProyecto from '../proyectos/NuevoProyecto'
import ListaProyectos from '../proyectos/ListaProyectos'

const Sidebar = () => {
  return (  
      <aside>
          <h1>MP<span>tasks</span></h1>
          
          
          <div className='proyectos'>
              <h2>Tus proyectos</h2>
          </div>
          <ListaProyectos/>
          <NuevoProyecto/>
      </aside>
  );
}
 
export default Sidebar;