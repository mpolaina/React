import React, { useState } from 'react';
import Header from './components/Header'
import Formulario from './components/Formulario'
import Resumen from './components/Resumen'
import Resultado from './components/Resultado'
import Spinner from './components/Spinner'


import styled from '@emotion/styled'

const Contenedor = styled.div`
    max-width: 600px;
    margin: 30px auto;
    height: 100vh;
    padding: 0 12px;
`
const ContenedorFormulario = styled.div`
    background-color: white;
    padding: 2rem;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    box-shadow: 0 1rem 3rem rgba(0,0,0,.175)!important;
`

function App() {
  
  const [ resumen, setResumen ]  = useState({
      cotizacion: 0,
      datos: {
        marca: '',
        yeaer: '',
        plan: ''
      }
  })
  
  // State para el spinner
  const [cargando, setCargando] = useState(false)
  // Extraer datos
  const { cotizacion, datos } = resumen
  
  return (
    <Contenedor>
        <Header
            titulo='Cotizador de Seguros'
        />
        <ContenedorFormulario>
            <Formulario
                setResumen={setResumen}
                setCargando={setCargando}
            />
            { cargando ? <Spinner/> : null}
            
            <Resumen
                datos={datos}
            />
            { !cargando 
            ? <Resultado
                  cotizacion={cotizacion}
              />
            : null
            }
            
        </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
