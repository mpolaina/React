import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import { revisarPresupuesto } from '../helpers'

const Disponible = ({presupuesto, disponible}) => {
  return (  
    <Fragment>
        <div className="alert alert-primary">
          Presupuesto: {presupuesto}€
        </div>
        <div className={revisarPresupuesto(presupuesto, disponible)}>
          Disponible: {disponible}€
        </div>
    </Fragment>
  );
}

Disponible.propTypes ={
    presupuesto: PropTypes.number.isRequired,
    disponible: PropTypes.number.isRequired
}
 
export default Disponible;