import React from 'react';
import { Link } from 'gatsby'
import styled from '@emotion/styled'

const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    
    @media (min-width: 768px) {
        padding: 0;
        flex-direction: row;
    }
`;

const NavLink= styled(Link)`
    font-family: 'Raleway', sans-serif;
    font-weight: 800;
    color: #191970;
    padding: .5rem;
    margin-right: 4rem;
    text-decoration: none;
    &:last-of-type {
        margin-right: 0;
    }
    &.pagina-actual {
        color: #4169E1;

    }
`

const Navegacion = () => {
    return (  
        <Nav>
            <NavLink to={'/'} activeClassName="pagina-actual">Inicio</NavLink>
            <NavLink to={'/nosotros'} activeClassName="pagina-actual">Nosotros</NavLink>
            <NavLink to={'/propiedades'} activeClassName="pagina-actual">Propiedades</NavLink>
        </Nav>
    );
}
 
export default Navegacion;