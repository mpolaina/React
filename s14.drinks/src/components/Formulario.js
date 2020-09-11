import React, {useContext, useState} from 'react';
import { CategoriasConext } from '../context/CategoriasContext'
import { RecetasContext } from '../context/RecetasContext'

const Formulario = () => {
  
  const [ busqueda, setBusqueda ] = useState({
    nombre: '',
    categoria: ''
  })
  
  // usamos el context
  const { categorias } = useContext(CategoriasConext)
  const { buscarRecetas, setConsultar } = useContext(RecetasContext)
  
  // función para leer los contenidos
  const obtenerDatosReceta = e => {
    setBusqueda({
      ...busqueda,
      [e.target.name] : e.target.value
    })
  }
  
  
  return (  
      <form
          className='col-12'
          onSubmit={ e => {
            e.preventDefault() 
            buscarRecetas(busqueda)
            setConsultar(true)
          }}
            
      >
          <fieldset className='text-center'>
              <legend>Busca bebidas por categoría o Ingrediente</legend>
          </fieldset>
          <div className='row mt-4'>
              <div className='col-md-4 my-2'>
                  <input
                      name='nombre'
                      className='form-control'
                      type='text'
                      placeholder='Buscar por ingrediente'
                      onChange={obtenerDatosReceta}
                  />
              </div>
              <div className='col-md-4 my-2'>
                  <select
                      className='form-control'
                      name='categoria'
                      onChange={obtenerDatosReceta}
                  >
                      <option value=''>-- Selecciona categoría</option>
                      {categorias.map(categoria => (
                          <option 
                              key={categoria.strCategory}
                              value={categoria.strCategory}
                          >
                            {categoria.strCategory}
                          </option>
                      ))}
                  </select>
              </div>
              <div className='col-md-4 my-2'>
                  <input
                      type='submit'
                      className='btn btn-block btn-primary'
                      value='Buscar recetas'    
                  />
              </div>
          </div>
      </form>
  );
}
 
export default Formulario;