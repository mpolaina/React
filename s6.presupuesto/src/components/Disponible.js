import React, {Fragment} from 'react';
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
 
export default Disponible;