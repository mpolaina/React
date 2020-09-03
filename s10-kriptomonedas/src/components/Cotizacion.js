import React from 'react';
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

const DivCotizacion = styled.div`
    background-color: white;
    padding: 1rem;
    margin-top: 1rem;
    border-radius: 12px;
`
const Precio = styled.p`
    color: black;
    font-family: 'Oswald', sans-serif;
    font-size: 2rem;
    font-weight: 400;
    margin: 12px;
    text-align: right;
    span {
      font-weight: 700;
      font-size: 2rem;
      color: #326ac0;
    }
`
const Datos = styled.p`
    color: black;
    font-family: 'Oswald', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    margin: 12px;
    text-align: right;
    span {
      font-weight: 700;
      font-size: 1.2rem;
    }
`

const Cotizacion = ({resultado}) => {
  
  if(Object.keys(resultado).length === 0) return null
  //console.log(resultado)
  return ( 
      <DivCotizacion>
        <Precio>El precio es: <span>{resultado.PRICE}</span></Precio>
        <Datos>Precio más alto del día: <span>{resultado.HIGHDAY}</span></Datos>
        <Datos>Precio más bajo del día: <span>{resultado.PRICE}</span></Datos>
        <Datos>Variación en 24h: <span>{resultado.CHANGEPCT24HOUR}%</span></Datos>
        <Datos>Última actualización: <span>{resultado.LASTUPDATE}</span></Datos>
      </DivCotizacion>
   );
}

Cotizacion.propTypes = {
  resultado: PropTypes.object.isRequired,
};
export default Cotizacion;