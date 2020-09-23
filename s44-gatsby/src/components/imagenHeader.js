import React from 'react';
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import styled from '@emotion/styled'

const ImageBackground = styled(BackgroundImage)`
    height: 700px;
`

const TextoImg = styled.div`
    background-image: linear-gradient(to top, rgba(0,0,0,.85), rgba(34,49,63,.25));
    color: white;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    justify-content: center;
    
    h1 {
        font-size: 5rem;        
        margin: 0%;

        @media (min-width: 992px) {
            font-size: 6.5rem;
        }
    }
    p {
        font-size: 2.5rem;
        @media (min-width: 992px) {
            font-size: 3rem;
        }
    }
`

const ImagenHeader = () => {
    
    const {image} = useStaticQuery(graphql`
    query {
        image: file(relativePath: { eq: "1.jpg"}){
          sharp:childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `)
    
    return (  
        <ImageBackground
            tag='section'
            fluid={image.sharp.fluid}
            fadeIn='soft'
        >
            <TextoImg>
                <h1>Bienvenido a Hotel Gatsby</h1>
                <p>El mejor hotel del mundo</p>
            </TextoImg>
        </ImageBackground>
    );
}
 
export default ImagenHeader;