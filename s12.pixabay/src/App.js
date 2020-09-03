import React, { useState, useEffect } from 'react';
import Formulario from './components/Formulario'
import Listado from './components/Listado'

function App() {
  
    // State de la app
    const [busqueda, setBusqueda] = useState('')
    const [imagenes, setImagenes] = useState([])
    const [ paginaactual, guardarPaginaActual ] = useState(1);
    const [ totalpaginas, guardarTotalPaginas] = useState(1);
    
    useEffect(()=> {
        const consultarAPI = async () => {
            if(busqueda === '') return
            const imgPorPag = 30;
            const key = '1565297-e3cbed380c28eea9e94220469'
            const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imgPorPag}&page=${paginaactual}`
            const respuesta = await fetch(url)
            const resultado = await respuesta.json()
            console.log(resultado)
            setImagenes(resultado.hits)
            
            // Calcular total de páginas
            const calcTotalPag = Math.ceil(parseInt(resultado.totalHits / imgPorPag))
            guardarTotalPaginas(calcTotalPag)
            
            // Scroll hacia arriba al pasar página
            const parriba = document.querySelector('#arriba')
            parriba.scrollIntoView({ behavior: 'smooth'})
        }
        consultarAPI() 
    }, [busqueda, paginaactual])
    
    // Definir página anterior
    const paginaAnterior = () => {
        const nuevaPagActual = paginaactual - 1
        console.log(nuevaPagActual)
        if(nuevaPagActual === 0) return;
        guardarPaginaActual(nuevaPagActual)
    }
    // Definir página siguiente
    const paginaSiguiente = () => {
        const nuevaPagActual = paginaactual + 1
        if(nuevaPagActual > totalpaginas) return;
        guardarPaginaActual(nuevaPagActual)
  }
    
    return (
      <div className=''>
          <div id="arriba" className='jumbotron bg-success w-full'>
              <p className='lead text-center'>Buscador de imágenes</p>
          </div>
          
          <Formulario
                setBusqueda={setBusqueda}
          />
          
          <div className='row justify-content-center'>
              <Listado
                  imagenes={imagenes}
              />
              
              { (paginaactual === 1) ? null : (
                <button
                  type='button'
                  className='btn btn-info mr-1'
                  onClick={paginaAnterior}
                >
                  &laquo; Anterior 
                </button>
              )}
              
              { (paginaactual === totalpaginas || totalpaginas === 0) ? null : (
                <button
                type='button'
                className='btn btn-info mr-1'
                onClick={paginaSiguiente}
                >
                  Siguiente &raquo;
                </button>
              )}
          
              
              
          </div>
      </div>
    );
}

export default App;
