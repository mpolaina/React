import React from 'react';
import { Link } from 'gatsby'
import styled from '@emotion/styled'

const Nav = styled.nav`
    display: flex;
    justify-content: center;
    padding-bottom: 3rem;
    @media (min-width: 768px){
        padding-bottom: 0;
    }
`

const Enlace = styled(Link)`
    font-family: 'Kumbh Sans', sans-serif;
    font-size: 1.6rem;
    font-weight: 300;
    margin-right: 1rem;
    text-decoration: none;
    padding: 1rem;
    color: azure;
    &::last-of-type {
        margin-right: 0;
    }
    &.pagina-actual {
        font-weight: 600;
    }
`

const Navegacion = () => {
    return (  
        <Nav>
            <Enlace 
                to={'/'}
                activeClassName="pagina-actual"
            >inicio</Enlace>
            <Enlace 
                to={'/about'}
                activeClassName="pagina-actual"
            >nosotros</Enlace>
        </Nav>
    );
}
 
export default Navegacion;