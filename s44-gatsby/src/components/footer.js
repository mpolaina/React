import React from 'react';
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import {Link} from 'gatsby'
import Navegacion from './nav'

const EnlaceHome = styled(Link)`
    color: azure;
    text-align: center;
    text-decoration: none;
`

const Footer = ({siteName}) => {
    
    const year = new Date().getFullYear()
    return (  
        <>
            <footer
                css={css`
                background-color: #222;
                margin-top: 8rem;
                padding: 0.5rem 0 0;
                position: relative;
                bottom: 0;
                width: 100%;
                `}
            >
                <div
                    css={css`
                        max-width: 1200px;
                        margin: 0 auto;
                        padding: 0 2rem;
                        
                        @media (min-width: 768px) {
                            display: flex;
                            align-items: center;
                            justify-content: space-between
                        }
                    `}
                >
                    <Navegacion/>
                    <EnlaceHome
                        to='/'
                    >
                        <h1>{siteName}</h1>
                    </EnlaceHome>
                    
                </div>
            <p 
                css={css`
                    text-align: center;
                    color: white;
                    background-color: #111;
                    margin: 0;
                    padding: 1rem;
                    bottom: 0;
                    width: 100%;
                `}
            >&copy; {siteName}. Todos los derechos reservados {year}</p>
            </footer>
        </>
    );
}
 
export default Footer;