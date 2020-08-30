import React, { Fragment, useState }from 'react';
import PropTypes from 'prop-types';
import Error from './Error';


const Pregunta = ({ setPresupuesto, setDisponible, actualizarPregunta }) => {
  
    //STATE
    const [cantidad, setCantidad] = useState(0)
    const [error, seterror] = useState(false)
    
    // Función que define el presupuesto
    const defPresupuesto = e => {
        setCantidad(parseInt(e.target.value), 10)
    }
    
    // Submit para definir el presupuesto
    const submitPresupuesto = e => {
        
        e.preventDefault();
        // Validar
        if( cantidad < 1 || isNaN ( cantidad ) ){
          seterror(true)
          return
        }
        // Si pasa la validación
        seterror(false)
        setPresupuesto(cantidad)
        setDisponible(cantidad)
        actualizarPregunta(false)
    }
    
    return (  
      <Fragment>
        <h2>Introduce tu presupuesto</h2>
        
        { error ? <Error mensaje="El presupuesto no es válido" /> : null } 
        
        <form
            onSubmit={submitPresupuesto}
        >
            <input
                type="number"
                className="u-full-width"
                placeholder="¿Cuál es tu presupuesto?"
                onChange={defPresupuesto}
            />
            <input
                type="submit"
                className="button-primary u-full-width"
                value="Definir Presupuesto"
            />
        </form>
      </Fragment>
    );
}

Pregunta.propTypes = {
  setPresupuesto: PropTypes.func.isRequired, 
  setDisponible: PropTypes.func.isRequired, 
  actualizarPregunta: PropTypes.func.isRequired
}

export default Pregunta;