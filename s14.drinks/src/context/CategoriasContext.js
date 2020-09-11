import React, { createContext, useState, useEffect } from 'react';
import Axios from 'axios';

// CREAR EL CONTEXT
export const CategoriasConext = createContext()

// PROVIDER es donde se encuentran las funciones y el state
const CategoriasProvider = (props) => {
    
    // Creamos el state del context
    const [categorias, setCategorias] = useState([])
    
    // ejecutar la llamada a la API
    useEffect(() => {
        const obtenerCategorias = async () => {
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
            const categorias = await Axios.get(url)
            setCategorias(categorias.data.drinks)
          }
          obtenerCategorias()
    },[])
    
    return(
        <CategoriasConext.Provider
            value={{
                categorias
            }}
        >
            {props.children}
        </CategoriasConext.Provider>
    )
}

export default CategoriasProvider;