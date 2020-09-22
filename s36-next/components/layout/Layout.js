import React, { Fragment } from 'react';
import Header from './Header'
/** @jsx jsx */
import { Global, css, jsx } from '@emotion/core'
import Head from 'next/head'

const Layout = props => {
    return (
        <Fragment>
            <Global
                styles={css`
                    :root {
                        --gris: #3d3d3d;
                        --gris2: #6f6f6f;
                        --gris3: #e1e1e1;
                        --naranja: #da552f    
                    }
                    html {
                        font-size: 62.5%;
                        box-sizing: border-box;
                    }
                    *, *:before, *:after {
                        box-sizing: inherit;
                    }
                    body {
                        font-size: 1.6rem; /* 16px */
                        line-height: 1.5;
                        font-family: 'PT Sans', sans-serif;
                    }
                    h1,h2,h3 {
                        margin: 0 0 2rem 0;
                        line-height: 1.5;
                    }
                    h1,h2 {
                        font-family: 'Roboto Slab', serif;
                        font-weight: 700;
                    }
                    h3 {
                        font-family: 'PT Sans', sans-serif;
                        font-weight: 700;
                    }
                    ul {
                        list-style: none;
                        margin: 0;
                        padding: 0;
                    }
                    a {
                        text-decoration: none
                    }
                    img{
                        max-width: 100%;
                    }
                `}
            />
            <Head>
                <title>Product Hunt - Firebase & Next JS</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Roboto+Slab:wght@400;700&display=swap" rel="stylesheet"></link>
            </Head>
            <Header/> 
            <main>
                {props.children}
            </main>
        </Fragment>
    );
}
 
export default Layout;