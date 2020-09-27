import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby'
import { css } from '@emotion/core'


import Navegacion from './navegacion'

const Header = () => {
    
    // consultar el logo.svg
    const { logo }= useStaticQuery(graphql`
        query {
            logo: file(relativePath: {eq: "logo.svg"}) {
              publicURL
            }
          }
    `)
    
    return (  
        <header
            css={css`
                background-color: #E0FFFF;
                padding: 1rem;
            `}
        >
            <div
                css={css`
                    max-width: 120rem;
                    margin: 0 auto;
                    text-align: center;
                    @media (min-width: 768px) {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                    }
                `}
            >
                <Link to={'/'}>
                    <img src={logo.publicURL} alt="Logo Homesby"
                        css={css`
                            width: 200px;
                            padding: 1rem;
                        `}
                    />
                </Link>
                <Navegacion/>
            </div>
        </header>
    );
}
 
export default Header;