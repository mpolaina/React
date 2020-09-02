import React from 'react';
import styled from '@emotion/styled'
import PropTypes from 'prop-types';

const ContenedorHeader = styled.header`
    background-color: #26c6da;
    padding: 16px;
    font-weight: bold;
    color: white;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
`

const TextoHeader = styled.h1`
    font-size: 2rem;
    margin: 0;
    font-family: 'Blinker', sans-serif;
    font-weight: 600;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 2px;
`

const Header = ({titulo}) => {
  return ( 
    <ContenedorHeader>
      <TextoHeader>{titulo}</TextoHeader>
    </ContenedorHeader>    
   );
}

Header.propTypes = {
  titulo: PropTypes.string.isRequired
}

export default Header
  