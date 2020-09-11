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
      <div className='w-full mx-auto'>
          <div id="arriba" className='bg-gradient-to-r from-teal-400 via-teal-200 to-teal-400 w-full mb-12'>
              <h1 className='text-center font-bold text-4xl py-4'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-16 mx-auto">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              PixAppbay
              </h1>
          </div>
          
              <Formulario
                    setBusqueda={setBusqueda}
              />
              
              <div className='flex flex-col mt-4 mx-auto mb-8'>
                  <Listado
                      imagenes={imagenes}
                  />
                  <div className='flex flex-row justify-center'>
                      { (paginaactual === 1) ? null : (
                        <button
                          type='button'
                          className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mx-2'
                          onClick={paginaAnterior}
                        >
                          &laquo; Anterior 
                        </button>
                      )}
                      
                      { (paginaactual === totalpaginas || totalpaginas === 0) ? null : (
                        <button
                        type='button'
                        className='flex-shrink bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mx-2'
                        onClick={paginaSiguiente}
                        >
                          Siguiente &raquo;
                        </button>
                      )}
                  </div>
              </div>
          
        </div>
    );
}



export default App;
