import React from 'react';
import Gastado from './Gastado'

const Listado = ({gastos}) => (  
    <div className="gastos-realizados">
      <h2>Listado</h2>
      {gastos.map(gasto => (
          <Gastado
              key={gasto.id}
              gasto={gasto}
          />
      ))}
    </div>
);

 
export default Listado;