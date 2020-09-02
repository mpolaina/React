import React from 'react';
import styled from '@emotion/styled'
import PropTypes from 'prop-types';
import { primeraMayuscula } from '../helper'

const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838f;
    color: #fff;
    margin-top: 1rem;
    
`

// COMPONENTE ========================================
const Resumen = ({datos}) => {
  
  // Extraer datos
  const { marca, year, plan } = datos
  
  // Ocultar resumen si los elementos en datos están vacios
  if(marca === '' || year === '' || plan === '') return null
  
  return ( 
      <ContenedorResumen>
          <h2>Resumen de cotización</h2>
          <ul>
            <li>Modelo: {primeraMayuscula(marca)} </li>
            <li>Año: {primeraMayuscula(year)}</li>
            <li>Plan: {primeraMayuscula(plan)} </li>
          </ul>
      </ContenedorResumen>
   );
}

Resumen.propTypes = {
  datos: PropTypes.object.isRequired
}
 
export default Resumen;