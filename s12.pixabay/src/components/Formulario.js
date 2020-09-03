import React, { useState } from 'react';
import Error from './Error'

const Formulario = ({setBusqueda}) => {
  
  // State de busqueda
  const [termino, setTermino] = useState('')
  // State de Error
  const [error, setError] = useState(false)
  
  const buscarImagenes = e => {
      e.preventDefault();
      // Validar
      if(termino.trim() === ''){
        setError(true)
        return
      }
      setError(false)
      // Enviar termino de busqueda a app.js
      setBusqueda(termino)   
  }
  
  return (  
    
    <form
        onSubmit={buscarImagenes}
        className='max-w-screen-md mx-auto'
    >
        
          <div className='flex items-center border-b border-teal-500 py-2'>
              <input
                  type='text'
                  className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none'
                  placeholder='Busca una imagen, pero no con mil palabras! ;)'
                  onChange={ e => setTermino(e.target.value)}
              />
              <button 
                  className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                  type='submit'
              >
                Buscar
              </button>
          </div>
          
          { error ? <Error mensaje='Debes introducir un término de búsqueda'/> : null}
        
    </form>
    
  
  );
}
 
export default Formulario;