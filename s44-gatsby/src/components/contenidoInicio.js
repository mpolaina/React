import React from 'react';
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'
import styled from '@emotion/styled'
import { css } from '@emotion/core'

const Contenedor = styled.div`
    width: 95%;
    max-width: 1200px;
    margin: 0 auto 50px;
    padding-top: 4rem;
    @media (min-width: 768px){
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 3rem;
    }
    p {
       line-height:  
    }
`


const ContenidoInicio = () => {
    
    const informacion = useStaticQuery(graphql`
    query {
        allDatoCmsPagina(filter: { slug: { eq: "inicio"} }) {
          nodes{
              titulo
            contenido
            imagen {
              fluid {
                ...GatsbyDatoCmsFluid
              }
            }
          }
        }
      }
    `)
    
    //console.log(informacion.allDatoCmsPagina.nodes[0])
    const { titulo, contenido, imagen } = informacion.allDatoCmsPagina.nodes[0]
    
    return (  
        <>
            
                <h2
                    css={css`
                        text-align: center;
                        font-size: 5rem;
                        margin-top: 4rem;
                    `}
                >{titulo}</h2>
                <Contenedor>
                    <p>{contenido}</p>
                    <Image fluid={imagen.fluid} />
                </Contenedor>
            
        </>
    );
}
 
export default ContenidoInicio;