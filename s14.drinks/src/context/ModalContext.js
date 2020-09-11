import React, { createContext, useState, useEffect } from 'react';
import Axios from 'axios'

// crear el context
export const ModalContext = createContext()

const ModalProvider = (props) => {
  
    // State del provider
    const [ idreceta, setIdReceta] = useState(null)
    const [infoReceta, setReceta] = useState({})
    
    // tenemos receta, llamamos a la api
    useEffect(() => {
         const obtenerReceta = async () => {
            if(!idreceta) return
            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idreceta}`
            const resultado = await Axios.get(url)
            setReceta(resultado.data.drinks[0]) 
         } 
         obtenerReceta()
    }, [idreceta])
    
    return (  
        <ModalContext.Provider
            value={{
                infoReceta,
                setIdReceta,
                setReceta
            }}
        >
            {props.children}
        </ModalContext.Provider>
    );
}
 
export default ModalProvider;

