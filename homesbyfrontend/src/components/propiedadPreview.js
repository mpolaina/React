import React from 'react';
import Iconos from './iconos'
import styled from '@emotion/styled'
import Image from 'gatsby-image';
import { Link } from 'gatsby'
import urlSlug from 'url-slug'

const Boton = styled(Link)`
    margin-top: 2rem;
    padding: 1rem;
    background-color: #4169E1;
    width: 100%;
    color: white;
    display: block;
    text-align: center;
    text-decoration: none;
    font-weight: 700;
    text-transform: uppercase;
`

const Card = styled.div`
    border: 1px solid #e1e1e1;
    border-radius: 12px;
    img {
        max-width: 100%;
        border-top-left-radius: 12px;
        border-top-right-radius: 12px;
    }   
`

const Contenido = styled.div`
    padding: 2rem;
    h3 {
        font-family: 'Lato', sans-serif;
        margin: 0 0 1rem 0;
        font-size: 2.4rem; 
        font-weight: 900;
    }
    .precio {
        font-size: 2rem;
        color: #4169E1;
        margin: 0;
        font-family: 'Lato', sans-serif;
        font-weight: 400;
        letter-spacing: 1px;
        line-height: 2rem;
    }
`


const PropiedadPreview = ({propiedad}) => {
    
    const { nombre, imagen, wc, aparcamientos, habitaciones, precio } = propiedad;
    
    return (  
        
        <Card>
            <Image
                fluid={imagen.sharp.fluid}
            />
            <Contenido>
                <h3>{nombre}</h3>
                <p className="precio">{precio} €</p>
                <Iconos
                    wc={wc}
                    aparcamientos={aparcamientos}
                    habitaciones={habitaciones}
                />
                <Boton to={ urlSlug( nombre ) }>
                    Ver Alojamiento
                </Boton>    
            </Contenido>
        </Card>
    );
}
 
export default PropiedadPreview;