import React, { useState, useEffect } from 'react';
import { css } from '@emotion/core'
import usePropiedades from '../hooks/usePropiedades'
import PropiedadPreview from '../components/propiedadPreview'

const ListadoPropiedades = () => {
    
    const resultado = usePropiedades()
    const [propiedades, setPropiedades] = useState([])
    
    useEffect(() => {
        setPropiedades(resultado)
    }, [])
    
    return (  
        <>
            <h2
                css={css`
                    margin-top: 5rem;
                `}
            >Nuestras propiedades</h2>
            
            <ul>
                {propiedades.map(propiedad => (
                    <PropiedadPreview
                        key={propiedad.id}
                        propiedad={propiedad}
                    />
                ))}
            </ul>
        </>
    );
}
 
export default ListadoPropiedades;