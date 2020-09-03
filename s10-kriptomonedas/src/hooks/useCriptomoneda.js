import React, { Fragment, useState } from 'react';
import styled from '@emotion/styled'

const Label = styled.label`
    font-family: 'Oswald', sans-serif;
    color: #ffe1be;
    text-transform: uppercase;
    font-weight: 200;
    font-size: 2rem;
    letter-spacing: 2px;
    margin: 2rem 0 .4rem;
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

const useCriptomoneda = (label, stateInicial, opciones) => {

  // state de nuestro custom hook
  const [state, actualizarState] = useState(stateInicial);
  
  const SelectCripto = () => (
      <Fragment>
          <Label>{label}</Label>
          <Select
              onChange={ e => actualizarState(e.target.value)}
              value={state}
          >
            <option value="">- Selecciona una cryptomoneda -</option>
            {opciones.map(opcion => (
                <option key={opcion.CoinInfo.Id} value={opcion.CoinInfo.Name}>{opcion.CoinInfo.FullName}</option>
            ))}
          </Select>
      </Fragment>
  );
  
  // Retornar state, interfaz y func que modifica el state
  return [state, SelectCripto, actualizarState]
}

export default useCriptomoneda;