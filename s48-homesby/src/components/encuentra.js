import React from 'react';
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import styled from '@emotion/styled'
import heroCSS from '../css/hero.module.css'

const ImageBackground = styled(BackgroundImage)`
    height: 300px;
`

const Encuentra = () => {
    
    const { imagen } = useStaticQuery(graphql`
    query {
        imagen: file(relativePath: {eq: "encuentra.jpg"}) {
          sharp: childImageSharp {
              fluid ( maxWidth: 1500 ) {
                  ...GatsbyImageSharpFluid_withWebp
              }
          }
        }
      }
      
    `)
    console.log(imagen)
    return (  
        <ImageBackground
            tag="section"
            fluid={imagen.sharp.fluid}
            fadeIn="soft" 
        >
            <div className={heroCSS.imagenbg}>
                <h3 className={heroCSS.titulo}>Encuentra la casa de tu vida</h3>
                <p>Casas, apartamentos y lujo</p>
            </div>
        </ImageBackground>
    );
}
 
export default Encuentra;