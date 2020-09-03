import React from 'react';
//import styles from './formulario-module.css'
import useSelect from '../hooks/useSelect';
import PropTypes from 'prop-types'

const Formulario = ({setCategoria}) => {
  
  // Opciones del select
  const OPCIONES = [
      {value: 'general', label: 'General'},
      {value: 'businnes', label: 'Negocios'},
      {value: 'entertainment', label: 'Entretenimiento'},
      {value: 'health', label: 'Salud'},
      {value: 'science', label: 'Ciencia'},
      {value: 'sports', label: 'Deportes'},
      {value: 'technology', label: 'Tecnología'}
  ]
  
  // Utilizar el custom hook
  const [categoria, SelectNoticias] = useSelect('general', OPCIONES)
  
  // submit, pasar categoria a app.js
  const buscarNoticias = e => {
    e.preventDefault();
    setCategoria(categoria)
  }
  
  return ( 
      <div className="flex justify-center mt-8 xs:w-full md:w-2/4 mx-auto p-4">
        <form
            onSubmit={buscarNoticias}
        >
            <h2 className="text-3xl mb-8">Encuentra Noticias por Categoría</h2>
            
            <SelectNoticias/>
            
            <div className="input-field col s12">
                
                <button className={estiloBuscar}
                    type="submit"
                >
                  Buscar
                </button>
            </div>
        </form>
      </div>  
  );
}

const estiloBuscar = `
w-full py-2 px-4 mt-4
text-gray-700 font-semibold hover:text-white 
bg-transparent hover:bg-gray-800
border border-gray-700 hover:border-transparent rounded
transform hover:-translate-y-1 hover:scale-110 
transition duration-500 ease-in-out`

Formulario.propTypes = {
  setCategoria: PropTypes.func.isRequired,
};

export default Formulario;