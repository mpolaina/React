import React from 'react';
import styled from '@emotion/styled'

const ContenedorFrase = styled.div`
    padding: 2rem;
    border-radius: .5rem;
    background-color: white;
    width: 93%;
    max-width: 800px;
    
    h1 {
      text-align: left;
      position: relative;
      padding-left: 1.5rem;
      font-family: 'Noto Serif', serif;
      font-size: 1.8em;
      &::before {
        content: open-quote;
        font-size: 5rem;
        color: black;
        position: absolute;
        left: -1rem;
        top: -2rem;
      }
    }
    
    p {
      font-family: 'Noto Serif', serif;
      font-size: 1.4rem;
      text-align: right;
      color: #666;
      margin-top: 2rem;
    }
`

const Frase = ({frase}) => {
 
  return ( 
      <ContenedorFrase>
          <h1>{frase.quote}</h1>
          <p>{frase.author}</p>
      </ContenedorFrase>
  );
}
 
export default Frase;