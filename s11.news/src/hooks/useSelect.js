import React, {useState} from 'react';

const useSelect = (stateInicial, opciones) => {
  
  // state de este custom hook useSelect.js
  const [state, setState] = useState(stateInicial)
  
  // nuestro elemento en la interfaz -> el select
  const SelectNoticias = () => (
      
      <select
          className="browser-default pl-3"
          value={state}
          onChange={ e => setState( e.target.value )}
      >
          {opciones.map(opcion => (
              <option key={opcion.value} value={opcion.value}>{opcion.label}</option>
          ))}
      </select>
      
  )
  // Retornamos el state de lo que seleccione el usuario y se muestra en SelectNoticias
  return [state, SelectNoticias]
  
}
 
export default useSelect;