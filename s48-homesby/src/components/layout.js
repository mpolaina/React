import React from 'react';
import Helmet from 'react-helmet'
import { Global, css } from '@emotion/core'

import Header from './header'


const Layout = ({children}) => {
    return (  
        <>
            <Global
                styles={css`
                    html{ 
                        font-size: 62.5%;
                        box-sizing: border-box;
                    }
                    *, *:before, *:after {
                        box-sizing: inherit;
                    }
                    body{
                        font-size: 1.6rem; /* 1rem = 10px */
                        line-height: 1.8;
                        font-family: 'Lato', sans-serif;
                    }
                    h1, h2, h3 {
                        margin: 0;
                        line-height: 1.5;
                    }
                    h1, h2 {
                        text-align: center;
                        font-family: 'Raleway', sans-serif;
                        font-weight: 800;
                    }
                    h3 {
                        font-family: 'Lato', sans-serif;
                        font-weight: 400;
                    }
                    ul {
                        list-style: none;
                        margin: 0;
                        padding: 0;
                    }
                    .contenedor {
                        max-width: 120rem;
                        margin: 0 auto;
                        width: 95%;
                    }
                    img {
                        max-width: 100%;
                    }
                
                `}
            />
            <Helmet>
                <title>Homesby</title>
                <meta name="description" content="Sitio web en gatsby y strapi" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossorigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Raleway:wght@200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
            </Helmet>
            
            <Header/>
            
            {children}
        </>
    );
}
 
export default Layout;
