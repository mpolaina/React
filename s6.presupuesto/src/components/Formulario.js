import React, { useState } from 'react';
import PropTypes from 'prop-types'
import shortid from 'shortid'
import Error from './Error'



const Formulario = ({ setGasto, setVergasto }) => {
  
  // STATE Gastos y cantidad
  const [nombre, setNombre] = useState('')
  const [cantidad, setCantidad] = useState(0)
  const [error, setError] = useState(false)
  
  // Submit del gasto
  const agregarGasto = e => {
      
      e.preventDefault();
      
      // Validar
      if(cantidad < 1 || isNaN(cantidad) || nombre.trim() === ''){
        setError(true)
        return
      }
      setError(false)
      
      // Construir gasto
      const gasto = {
          nombre,
          cantidad,
          id: shortid.generate()
      }
      
      // Pasar gasto al componente principal
      setGasto(gasto)
      setVergasto(true)
      
      // Reset el formulario
      setNombre('')
      setCantidad(0)
    
  }
  
  return (  
    <form
        onSubmit={agregarGasto}
    >
      <h2>Agrega tus gastos</h2>
      { error ? <Error mensaje="Ingrese un nombre o cantidad correcta"/> : null }
      <div className="campo">
          <label>Concepto</label>
          <input
              type="text"
              className="u-full-width"
              placeholder="Ej. Supermercado"
              value={nombre}
              onChange={e => setNombre( e.target.value )}
          />
      </div>
      <div className="campo">
          <label>Cantidad</label>
          <input
              type="number"
              className="u-full-width"
              placeholder="Ej. 100"
              value={cantidad}
              onChange={e => setCantidad( parseInt( e.target.value ) )}
          />
      </div>
      <input 
          type="submit"
          className="button-primary u-max-full-width"
          value="Añadir"
      />
    </form>
  );
}

Formulario.propTypes = {
  setGasto: PropTypes.func.isRequired, 
  setVergasto: PropTypes.func.isRequired
}
 
export default Formulario;