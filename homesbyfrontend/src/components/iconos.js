import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby'
import styled from '@emotion/styled'

const ListadoIconos = styled.ul`
    display: flex;
    justify-content: space-between;
    flex: 1;
    max-width: 500px;
    margin: 1rem auto 0 auto;
    
    li {
        display: flex;
        img {
            margin-right: 1rem;
            max-width: 32px;
        }
    }
`


const Iconos = ({ wc, aparcamientos, habitaciones}) => {
    
    const {iconos} = useStaticQuery(graphql`
        query {
            iconos: allFile(filter: {relativeDirectory: {eq: "iconos"}}) {
              edges {
                node {
                  id
                  publicURL
                }
              }
            }
          }
    `)
    const imagenesIconos = iconos.edges
    
    return (  
        <ListadoIconos>
            <li>
                <img src={imagenesIconos[5].node.publicURL} alt="icono wc"/>
                <p>{habitaciones}</p>
            </li>
            <li>
                <img src={imagenesIconos[4].node.publicURL} alt="icono wc"/>
                <p>{wc}</p>
            </li>
            <li>
                <img src={imagenesIconos[3].node.publicURL} alt="icono wc"/>
                <p>{aparcamientos}</p>
            </li>
        </ListadoIconos>
    );
}
 
export default Iconos;