import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

import Error from './Error'
import useMoneda from '../hooks/useMoneda'
import useCriptomoneda from '../hooks/useCriptomoneda'
import Axios from 'axios';

const Boton = styled.input`
    margin-top: 20px;
    font-family: 'Oswald', sans-serif;
    text-transform: uppercase;
    letter-spacing: 2px; 
    font-weight: 600;
    font-size: 24px;
    padding: 10px;
    background-color: #66a2fe;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: white;
    transition: background-color .3s ease; 
    outline: none;
    
    &:hover {
      background-color: #326ac0;
      cursor: pointer;
    }
`

const Formulario = ({setmoneda, setcriptomoneda}) => {
  
  // State del listado de crytomonedas
  const [listacripto, guardarCripto] = useState([])
  const [error, setError] = useState(false)
  
  const MONEDAS = [
      {codigo: 'USD', nombre: 'Dolar estadounidense'},
      {codigo: 'EUR', nombre: 'Euro'},
      {codigo: 'MXN', nombre: 'Peso mexicano'},
      {codigo: 'GBP', nombre: 'Libra esterlina'},
  ]
  // Utilizar el hook useMoneda
  const [moneda, SelectMonedas] = useMoneda('Monedas', '', MONEDAS);
  
  // Utilizar el hook useCriptomoneda
  const [criptomoneda, SelectCripto] = useCriptomoneda('Cryptomonedas', '', listacripto)
  
  // Ejecutar llamada a la API
  useEffect(() => {
    
      const consultarAPI = async () => {
          
          const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
          const resultado = await Axios.get(url)
          guardarCripto(resultado.data.Data)
          
      }
      consultarAPI()
      
  }, [])
  
  // Al hacer SUBMIT
  const cotizarMoneda = e => {
      e.preventDefault();
      // Validar
      if(moneda === '' || criptomoneda === ''){
          setError(true)
          return
      } 
      
      // Pasar datos al componente principal
      setError(false)
      setmoneda(moneda)
      setcriptomoneda(criptomoneda)
      
  }
  
  return (  
      <form
          onSubmit={cotizarMoneda}
      >
          {error ? <Error mensaje='Seleccione moneda y criptomoneda'/> : null}
          <SelectMonedas/>
          <SelectCripto/>
          <Boton
              type="submit"
              value="Cotizar"
          />
      </form>        
  );
}

Formulario.propTypes = {
  setmoneda: PropTypes.func.isRequired,
  setcriptomoneda:PropTypes.func.isRequired
};

export default Formulario;