import React from 'react';
import { Global, css} from '@emotion/core'
import Helmet from 'react-helmet'
import Header from './header'
import Footer from './footer'
import useSeo from '../hooks/useSeo'

const Layout = (props) => {
    
    const seo = useSeo() 
    const { siteName, fallbackSeo: {description} } = seo
    
    return (
        <>
            <Global
                styles={css`
                    html {
                        font-size: 62.5%;
                        box-sizing: border-box;
                        height: 100%;
                    }
                    *, *:before, *:after {
                        box-sizing: inherit;
                    }
                    body {
                        position: relative;
                        font-size: 16px;
                        font-size: 1.6rem;
                        line-height: 1.5;
                        font-family: 'Jost', sans-serif;
                        font-weight: 300;
                        min-height: 100%;
                    }
                    h1, h2, h3 {
                        margin: 0;
                        line-height: 1.5;
                    }
                    h1, h2 {
                        font-family: 'Kumbh Sans', sans-serif;
                    }
                    h3 {
                        font-family: 'Jost', sans-serif;
                    }
                    ul {
                        list-style: none;
                        margin: 0;
                        padding: 0;
                    }
                `}
            />
            <Helmet>
                <title>{siteName}</title>
                <meta name="description" content={description} />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css" integrity="sha512-oHDEc8Xed4hiW6CxD7qjbnI+B07vDdX7hEPTvn9pSZO1bcRqHp8mj9pyr+8RVC2GmtEfI2Bi9Ke9Ass0as+zpg==" crossorigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Jost:wght@200;300;500;600;700&family=Kumbh+Sans:wght@300;400;700&display=swap" rel="stylesheet" />
            </Helmet>
            <Header />  
            {props.children}
            <Footer
                siteName={siteName}
            />
            
        </>
    );
}
 
export default Layout;