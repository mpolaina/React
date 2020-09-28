import React from 'react';
import styled from '@emotion/styled'
import Image from 'gatsby-image';
import Iconos from './iconos'
import Layout from './layout'
import { graphql} from 'gatsby'

const Contenido = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    width: 95%;
    
    p{
        line-height: 1.4;
    }
    
    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 2fr 1fr;
        column-gap: 5rem;
    }
`


const Sidebar = styled.aside`
    .precio {
        font-size: 3rem;
        font-weight: 800;
        color: cadetblue;
        margin: 0 0 1rem 0;
    }
    
    .agente {
        margin-top: 2rem;
        border-radius: 2rem;
        background-color: #4169E1;
        padding: 3rem;
        color: white;
        h2 {
            margin-bottom: 3rem;
            text-align: left;
            border-bottom: 1px solid white;
        }
        p {
            margin: 0;
        }
    }
`


export const query = graphql`
    query($id:String!) {
        allStrapiPropiedades(filter: {id: {eq: $id}}) {
            nodes {
                nombre
                descripcion
                habitaciones
                wc
                aparcamientos
                precio
                agentes {
                    nombre
                    telefono
                    email
                }
                imagen {
                    sharp: childImageSharp {
                        fluid ( maxWidth: 1200 ) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        }
    }
`

const Propiedades = ({data: { allStrapiPropiedades: { nodes }}}) => {
    
    const { nombre, descripcion, habitaciones, wc, aparcamientos, precio, agentes, imagen } = nodes[0]
    
    return (  
        <Layout>
            <h1>{nombre}</h1>
            <Contenido>
                <main>
                    <Image
                        fluid={imagen.sharp.fluid}
                    />
                </main>
                <Sidebar>
                    <p className='precio'>{precio}€</p>
                    <p>{descripcion}</p>
                    <Iconos
                        wc={wc}
                        aparcamientos={aparcamientos}
                        habitaciones={habitaciones}
                        />
                    <div className='agente'> 
                        <h2>Vendedor:</h2>
                        <p>{agentes.nombre}</p>
                        <p>Teléfono: {agentes.telefono}</p>
                        <p>Email: {agentes.email}</p>
                    </div>
                </Sidebar>
            </Contenido>
        </Layout>
    );
}
 
export default Propiedades;