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
       margin-top: 2rem;
       font-size: 2rem;
    }
`


const ContenidoNosotros = () => {
    
    const informacion = useStaticQuery(graphql`
    query {
        allDatoCmsPagina(filter: { slug: { eq: "nosotros"} }) {
          nodes{
              titulo
            contenido
            imagen {
              fluid ( maxWidth: 1200 ) {
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
                        font-size: 4rem;
                        margin-top: 4rem;
                    `}
                >{titulo}</h2>
                <Contenedor>
                    <Image fluid={imagen.fluid} />
                    <p>{contenido}</p>
                </Contenedor>
            
        </>
    );
}
 
export default ContenidoNosotros;