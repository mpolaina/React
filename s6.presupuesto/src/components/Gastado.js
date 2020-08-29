import React from 'react';
const Gastado = ({gasto}) => (  
  <li className="gastos">
    <p>
      {gasto.nombre}
      <span className="gasto">{gasto.cantidad} €</span>
    </p>
  </li>
);

 
export default Gastado