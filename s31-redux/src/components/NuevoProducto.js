import React, { useState } from 'react';
// Redux
import { useDispatch, useSelector } from 'react-redux'
import { newProductAction } from '../actions/productoActions'
import { mostrarAlertaAction, ocultarAlertaAction } from '../actions/alertaActions'


const NuevoProducto = ({history}) => {
    
    // STATE del componente
    const [nombre, guardarNombre] = useState('')
    const [precio, guardarPrecio] = useState(0)
    
    // Usar useDisptach para crear una función 
    const dispatch = useDispatch()
    
    // Acceder al state del store
    const cargando = useSelector( state => state.inventario.loading)
    const error = useSelector( state => state.inventario.error)
    const alerta = useSelector( state => state.alerta.alerta)
    
    // ejecuta el action newProductAction
    const agregarProducto = producto => dispatch ( newProductAction(producto) )
    
    // SUBMIT DEL FORMULARIO
    const submitNuevoProducto = e => {
        e.preventDefault();
        
        // Validar formulario
        if(nombre.trim() === '' || precio <= 0 ) {
            
            const alerta = {
                msg: 'Todos los campos son obligatorios',
                classes: 'alert alert-danger text-center text-uppercase p3'
            }
            dispatch( mostrarAlertaAction(alerta) )
            
            return;
        }
        // Revisar si no hay errores
        dispatch( ocultarAlertaAction() )
        
        // crear producto y lo pasa con la fn al action newProductAction
        agregarProducto({
            nombre,
            precio
        });
        
        // Redireccionar
        history.push('/')
    }
    
    return (  
        <div className='row justify-content-center mt-5'>
            <div className='col-md-8'>
                <div className='card'>
                    <div className='card-body'>
                        <h2 className='text-center mb-4 font-weight-bold'>
                            Agregar nuevo producto
                        </h2>
                        
                        { alerta ? <p className={alerta.classes}>{alerta.msg}</p> : null }
                        
                        <form
                            onSubmit={submitNuevoProducto}
                        >
                            <div className='form-group'>
                                <label>Nombre Producto</label>
                                <input
                                    type='text'
                                    className='form-control'
                                    placeholder='Introduce un nombre...'
                                    name='nombre'
                                    value={nombre}
                                    onChange={ e => guardarNombre( e.target.value )}
                                />
                            </div>
                            <div className='form-group'>
                                <label>Precio Producto</label>
                                <input
                                    type='text'
                                    className='form-control'
                                    placeholder='Introduce el precio...'
                                    name='precio'
                                    value={precio}
                                    onChange={ e => guardarPrecio( Number(e.target.value) )}
                                />
                            </div>
                            <button
                                type='submit'
                                className='btn btn-info font-weight-bold text-uppercase d-block w-100'
                            >
                                Agregar
                            </button>
                        </form>
                        { cargando ? <p>Cargando...</p> : null}
                        { error ? <p className='alert alert-danger p-2 mt-4 text-center'>Hubo un error</p> : null}
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default NuevoProducto;