import React, { createContext, useState, useEffect } from 'react';
import Axios from 'axios'

export const RecetasContext = createContext()

const RecetasProvider = (props) => {
 
    const [recetas, setRecetas] = useState([])
    const [busqueda, buscarRecetas] = useState({
      nombre: '',
      categoria: ''
    })
    const [consultar, setConsultar] = useState(false)
    
    // destructuring de la busqueda
    const { nombre, categoria } = busqueda
    
    useEffect(() => {
        if(consultar) {
          const obtenerRecetas = async () => {
              const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`
              const resultado = await Axios.get(url)
              //console.log(resultado.data.drinks)
              setRecetas(resultado.data.drinks)
          }
          obtenerRecetas()
        }
    }, [busqueda, categoria, consultar, nombre])
    
    
    return(
      
      <RecetasContext.Provider
          value={{
            recetas,
            buscarRecetas,
            setConsultar
          }}
      >
          {props.children}
      </RecetasContext.Provider>
      
    )
  
}

export default RecetasProvider;