import React, { useState } from 'react';
import Error from './Error'
import PropTypes from 'prop-types';


const Formulario = ({busqueda, setBusqueda, setConsultar}) => {

  
  // Validar
  const [error, setError] = useState(false)
  
  // extraer ciudad y pais
  const { ciudad, pais } = busqueda
  
  // función que coloca los elementos en el state
  const hadleChange = e => {
    // actualizar el state
    setBusqueda({
      ...busqueda,
      [e.target.name] : e.target.value
    })
  }
  
  // Usuario hace submit
  const handleSubmit = e => {
      e.preventDefault();
      // Validar
      if(ciudad.trim() === '' || pais.trim() === ''){
        setError(true)
        return
      }
      setError(false)
      
      // Pasar al componente principal
      setConsultar(true)
  }
  
  return ( 
      <form
          onSubmit={handleSubmit}
      >
          {error ? <Error mensaje="Todos los campos requeridos"/> : null}
          <div className="input-field col s12">
              <input
                  type="text"
                  name="ciudad"
                  id="ciudad"
                  value={ciudad}
                  onChange={hadleChange}
              />
              <label htmlFor="ciudad">Ciudad: </label>
          </div>
          <div className="input-field col s12">
              <select
                  name="pais"
                  id="pais"
                  value={pais}
                  onChange={hadleChange}
              >
                  <option value="">Selecciona un país</option>
                  <option value="ES">España</option>
                  <option value="US">Estados Unidos</option>
                  <option value="FR">Francia</option>
                  <option value="IT">Italia</option>
                  <option value="UK">Inglaterra</option>
                  <option value="CR">Costa Rica</option>
                  <option value="PE">Perú</option>
              </select>
              
              <label htmlFor="pais">País: </label>
          </div>
          <div className="input-field col s12">
            <button 
                className="btn waves-effect waves-light btn-large btn-block white blue-text text-darken-2" 
                type="submit" 
                name="action">
                  <i className="material-icons left">cloud</i>
                  Consultar Clima
            </button>
          </div>
      </form>
  );
}

Formulario.propTypes = {
  busqueda: PropTypes.object.isRequired,
  setBusqueda: PropTypes.func.isRequired,
  setConsultar: PropTypes.func.isRequired
};

export default Formulario;