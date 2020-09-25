import React from 'react';
import Iconos from './iconos'

const Propiedad = ({propiedad}) => {
    
    const { nombre, descripcion, imagen, wc, estacionamiento, habitaciones, precio } = propiedad;
    
    return (  
        
        <div>
            <div>
            <h3>{nombre}</h3>
            <p>{precio} €</p>
            <Iconos
                wc={wc}
                estacionamiento={estacionamiento}
                habitaciones={habitaciones}
            />    
            </div>
        </div>
    );
}
 
export default Propiedad;