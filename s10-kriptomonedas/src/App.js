import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled'
import imagen from './cryptomonedas.png'
import Formulario from './components/Formulario'
import Cotizacion from './components/Cotizacion'
import Axios from 'axios';
import Spinner from './components/Spinner';

const Contenedor = styled.div`
    max-width: 900px;
    margin: 0 auto;
    padding: 0 12px 12px;
    
    @media (min-width: 992px){
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 2rem;
    }
`
const Imagen = styled.img`
    max-width: 100%;
    margin-top: 5rem;
    
    @media (max-width: 600px){
      max-width: 200px;
      margin: 20px auto 0;
      display: block;
    }
`
const Heading = styled.h1`
    font-family: 'Bebas Neue', cursive;
    color: #fff;
    text-align: left;
    font-weight: 700;
    font-size: 50px;
    margin: 40 auto;
    
    @media (max-width: 600px){
      font-size: 38px;
      text-align: center;
      &::after {
        content: '';
        width: 100px;
        height: 6px;
        background-color: #66a2fe;
        display: block;
        margin: 0 auto;
      }
    }
    
    &::after {
      content: '';
      width: 100px;
      height: 6px;
      background-color: #66a2fe;
      display: block;
    }
`

function App() {
  
  const [moneda, setmoneda] = useState('')
  const [criptomoneda, setcriptomoneda] = useState('')
  const [resultado, setresultado] = useState({})
  const [cargando, setcargando] = useState(false)
  
  useEffect(() => {
    
    const cotizarCriptomoneda = async() => {
        
        // Evitar ejecución la primera vez
        if(moneda === '') return
        
        // consultar la API para la cotización
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
        const resultado = await Axios.get(url);
        
        // mostrar el SPINNER
        setcargando(true)
        // ocultar el spinner y mostrar resultado
        setTimeout(() => {
          setcargando(false)
          setresultado(resultado.data.DISPLAY[criptomoneda][moneda])
          var element = document.getElementById('logo'); 
          element.style.display = "none";
          console.log('Parriba')
        }, 2000);
        
    }
    cotizarCriptomoneda()
    
  }, [moneda, criptomoneda])
  
  // Mostrar spinner o resultado
  const componente = (cargando) ? <Spinner/> : <Cotizacion resultado={resultado} />
  
  return (
    <Contenedor>
        <div>
           <Imagen
              src={imagen}
              alt="imagen criptomonedas"
              id="logo"
           />  
        </div>
        <div id="lateralIzq">
            
            <Heading>Cotiza tus criptomonedas al instante</Heading>
            <Formulario
                setmoneda={setmoneda}
                setcriptomoneda={setcriptomoneda}
            />
            {componente}
            
        </div>
    </Contenedor>
  );
}

export default App;
