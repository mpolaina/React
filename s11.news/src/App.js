import React, {Fragment, useState, useEffect} from 'react';
import Header from './components/Header'
import Formulario from './components/Formulario'
import Listado from './components/Listado'


function App() {
  
  // definir categoría y noticias
  const [categoria, setCategoria] = useState('')
  const [noticias, setNoticias] = useState([])
  
  useEffect(() => {
    const consultarAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=it&category=${categoria}&apiKey=0fb8c077ead6418284cc49a18b9c04b9`
      const respuesta = await fetch(url)
      const noticias = await respuesta.json()
      setNoticias(noticias.articles)
    }
    consultarAPI()
  }, [categoria])
  
  return (
      <Fragment>
          <div className="bg-gray-700 h-2"></div>
          <div className="bg-gray-800 h-2"></div>
          <Header titulo='Noticias'/>
          
          <div className="container bg-white mt-5">
              <Formulario
                  setCategoria={setCategoria}
              />
              <Listado
                  noticias={noticias}
              />
          </div>
      </Fragment>
  );
}

export default App;
