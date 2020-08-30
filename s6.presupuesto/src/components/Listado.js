import React from 'react';
import Gastado from './Gastado'
import PropTypes from 'prop-types'

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

Listado.propTypes = {
  gastos: PropTypes.array.isRequired
}

export default Listado;
