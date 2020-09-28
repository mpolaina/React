import React, { useState, useEffect } from 'react';
import { css } from '@emotion/core'
import usePropiedades from '../hooks/usePropiedades'
import PropiedadPreview from '../components/propiedadPreview'
import listadoPropiedadesCSS from '../css/listadoPropiedades.module.css'
import useFiltro from '../hooks/useFiltro'


const ListadoPropiedades = () => {
    
    const resultado = usePropiedades()
    const [propiedades] = useState(resultado)
    const [ filtradas, setFiltradas ] = useState([])
    
    // Filtrado de alojamientos
    const { categoria, FiltroUI } = useFiltro()
    console.log(categoria)
    
    useEffect(() => {
        if (categoria) {
            const filtro = propiedades.filter( propiedad => propiedad.categoria.nombre === categoria);
            setFiltradas(filtro)
        } else {
            setFiltradas(propiedades)
        }
        
    }, [categoria, propiedades])
    
    return (  
        <>
         
            <h2
                css={css`
                    margin-top: 5rem;
                `}
            >Nuestras propiedades</h2>
            
            { FiltroUI() }
         
            
            <ul className={listadoPropiedadesCSS.propiedades}>
                {filtradas.map(propiedad => (
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