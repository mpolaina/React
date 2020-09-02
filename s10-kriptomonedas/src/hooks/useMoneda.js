import React, { Fragment, useState } from 'react';
import styled from '@emotion/styled'

const Label = styled.label`
    font-family: 'Oswald', sans-serif;
    color: #ffcbcb;
    text-transform: uppercase;
    font-weight: 200;
    font-size: 2rem;
    letter-spacing: 2px;
    margin: 2rem 0 1rem;
    display: block;
    
    @media (max-width: 600px){
      font-size: 1.6rem;
    }
`
const Select = styled.select`
    width: 100%;
    display: block;
    padding: 1rem;
    -webkit-appearance: none;
    border-radius: 10px;
    border: none;
    outline: none;
    font-size: 1.2rem;
    
    @media (max-width: 600px){
      font-size: 1rem;
    }
`

const useMoneda = (label, stateInicial, opciones) => {

  // state de nuestro custom hook
  const [state, actualizarState] = useState(stateInicial);
  
  const Seleccionar = () => (
      <Fragment>
          <Label>{label}</Label>
          <Select
              onChange={ e => actualizarState(e.target.value)}
              value={state}
          >
            <option value="">- Seleccione una moneda -</option>
            {opciones.map(opcion => (
                <option key={opcion.codigo} value={opcion.codigo}>{opcion.nombre}</option>
            ))}
          </Select>
      </Fragment>
  );
  
  // Retornar state, interfaz y func que modifica el state
  return [state, Seleccionar, actualizarState]
}

export default useMoneda;