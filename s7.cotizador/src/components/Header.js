import React from 'react';
import styled from '@emotion/styled'

const ContenedorHeader = styled.header`
    background-color: #26c6da;
    padding: 10px;
    font-weight: bold;
    color: white;
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
 
export default Header
  