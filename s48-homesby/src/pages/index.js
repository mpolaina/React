import React from 'react';
import Layout from '../components/layout'
import useInicio from '../hooks/useInicio'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import BackgroundImage from 'gatsby-background-image'
import heroCSS from '../css/hero.module.css'
import Encuentra from '../components/encuentra'
import ListadoPropiedades from '../components/listadoPropiedades'

const ImagenBg = styled(BackgroundImage)`
    height: 700px;
    h1 {
        color: white;
    }
`

const Index = () => {
    
    const inicio = useInicio()
    const { nombre, contenido, imagen } = inicio[0]
    return (  
        <Layout>
            <ImagenBg
                tag="section"
                fluid={imagen.sharp.fluid}
                fadeIn="soft"
            >
                <div className={heroCSS.imagenbg}>
                    <h1 className={heroCSS.titulo}>
                        Hogares para soñar
                    </h1>
                    <button>Conócelos</button>
                </div>
            </ImagenBg>
            <main>
                <div
                    css={css`
                        max-width: 800px;
                        margin: 8rem auto;
                    `}
                >
                    <h1>{ nombre }</h1>
                    <p
                        css={css`
                            text-align: center;
                        `}
                    >{ contenido }</p>
                </div>
            </main>
            
            <Encuentra/>
            
            <ListadoPropiedades/>
            
        </Layout>
    );
}
 
export default Index;