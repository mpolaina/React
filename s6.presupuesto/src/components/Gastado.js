import React from 'react';
import PropTypes from 'prop-types';

const Gastado = ({gasto}) => (  
  <li className="gastos">
    <p>
      {gasto.nombre}
      <span className="gasto">{gasto.cantidad} €</span>
    </p>
  </li>
);

Gastado.propTypes = {
  gasto: PropTypes.object.isRequired
}
 
export default Gastado