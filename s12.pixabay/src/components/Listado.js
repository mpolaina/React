import React from 'react';
import Imagen from './Imagen';

const Listado = ({imagenes}) => {
  return (  
      <div className='container grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4  gap-3 mx-auto'>
          {imagenes.map(imagen => (
              <Imagen 
                  key={imagen.id}
                  imagen={imagen}
              />
          ))}
      </div>
  );
}
 
export default Listado;