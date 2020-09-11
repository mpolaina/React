import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './components/Formulario'
import Cancion from './components/Cancion'
import Info from './components/Info'
import Axios from 'axios'

function App() {

  // definir el state
  const [buscarletra, setBuscarLetra] = useState({})
  const [letra, setLetra] = useState('')
  const [info, setInfo] = useState({})
  
  useEffect(() => {
    if(Object.keys(buscarletra).length === 0) return;
    
    const consultarAPIletra = async () => {
      const { artista, cancion } = buscarletra
      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`
      const url2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;
      
      const [letra, informacion] = await Promise.all([
        Axios.get(url),
        Axios.get(url2)
      ])
      
      setLetra(letra.data.lyrics);
      setInfo(informacion.data.artists[0]);
      // CON ESTA LINEA EVITAMOS LOOP
      setBuscarLetra({});
    }
    consultarAPIletra()
  }, [buscarletra, info])

  return (
      <Fragment>
          <Formulario
              setBuscarLetra={setBuscarLetra}
          />
          <div className='container mt-5'>
              <div className='row'>
                  <div className='col-md-6'>
                      <Info
                          info={info}
                      />
                  </div>
                  <div className='col-md-6'>
                      <Cancion
                          letra={letra}
                      />
                  </div>
              </div>
          </div>
          
      </Fragment>
  );
}

export default App;
