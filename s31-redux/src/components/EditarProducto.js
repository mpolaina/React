import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux' 
import { editarProductoAction } from '../actions/productoActions'
import { useHistory } from 'react-router-dom'

const EditarProducto = () => {
    
    const history = useHistory()
    const dispatch = useDispatch()
    
    // nuevo state de producto
    const [producto, guardarProducto] = useState({
        nombre: '',
        precio: 0
    })
    
    // Producto a editar al state principal
    const productoEditar = useSelector(state => state.inventario.productoeditar)
    
    // Llenar el state de producto automáticamente
    useEffect(() => {
        guardarProducto(productoEditar)
    }, [productoEditar])
    
    // Leer datos del formulario para editar en state del producto
    const onChangeFormulario = e => {
        
        // parsear el valude del precio
        const value = ( e.target.name === 'precio')
            ? parseInt( e.target.value)
            : e.target.value
            
        guardarProducto({
            ...producto,
            [e.target.name] : value
        })
    }
    
    // Extraemos propiedades de producto
    const { nombre, precio } = producto
    
    // Al hacer submit en el formulario
    const submitEditar = e => {
        e.preventDefault();
        dispatch( editarProductoAction(producto) )
        history.push('/')
    }
    
    return (  
        <div className='row justify-content-center mt-5'>
            <div className='col-md-8'>
                <div className='card'>
                    <div className='card-body'>
                        <h2 className='text-center mb-4 font-weight-bold'>
                            Editar producto
                        </h2>
                        <form
                            onSubmit={submitEditar}
                        >
                            <div className='form-group'>
                                <label>Nombre Producto</label>
                                <input
                                    type='text'
                                    className='form-control'
                                    placeholder='Introduce un nombre...'
                                    name='nombre'
                                    value={nombre}
                                    onChange={onChangeFormulario}
                                />
                            </div>
                            <div className='form-group'>
                                <label>Precio Producto</label>
                                <input
                                    type='number'
                                    className='form-control'
                                    placeholder='Introduce el precio...'
                                    name='precio'
                                    value={precio}
                                    onChange={onChangeFormulario}
                                />
                            </div>
                            <button
                                type='submit'
                                className='btn btn-info font-weight-bold text-uppercase d-block w-100'
                            >
                                Guardar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default EditarProducto;