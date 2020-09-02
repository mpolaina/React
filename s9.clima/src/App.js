import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header'
import Formulario from './components/Formulario'
import Clima from './components/Clima'
import Error from './components/Error'

function App() {
  
  // state de formulario
  const [busqueda, setBusqueda] = useState({
    ciudad: '',
    pais: ''
  })
  // state para llamar a la api
  const [consultar, setConsultar] = useState(false)
  const [resultado, setResultado] = useState({})
  const [error, seterror] = useState(false)
  
  const { ciudad, pais } = busqueda
  
  useEffect(() => {
    const consultarAPI = async () => {
        if(consultar){
          const appId = '9d64a61a2a91b9b708d8e32413e94096'
          const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}&units=metric&lang=es`
          const respuesta = await fetch(url)
          const resultado = await respuesta.json()
          setResultado(resultado)
          setConsultar(false)
          
          // Comprobar resultado correcto
          if(resultado.cod === "404"){
            seterror(true)
          } else {
            seterror(false)
          }
        }
    }
    consultarAPI()
  }, [consultar, ciudad, pais]);
    
  return (
    <Fragment>
        <Header
          titulo='React ClimApp'
        />
        
        <div className="contenedor-form">
            <div className="container">
                <div className="row">
                    <div className="col m6 s12">
                      <Formulario
                          busqueda={busqueda}
                          setBusqueda={setBusqueda}
                          setConsultar={setConsultar}
                      />
                    </div>
                    <div className="col m6 s12">
                      { error 
                      ? <Error mensaje="No hay resultados" /> 
                      : <Clima
                            resultado={resultado}
                        /> 
                      }
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
  );
}

export default App;
