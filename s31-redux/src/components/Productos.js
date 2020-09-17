import React, { Fragment, useEffect } from 'react';
import Producto from './Producto'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { getProductsAction } from '../actions/productoActions'

const Productos = () => {
    
    const dispatch = useDispatch()
    
    useEffect(() => {
        // consultar API - ejecutando al Action
        const cargarProductos = () => dispatch( getProductsAction() ) 
        cargarProductos()   
       // eslint-disable-next-line
    }, [])
    
    // Acceder al state del store
    const productos = useSelector( state => state.inventario.productos )
    const error = useSelector( state => state.inventario.error )
    const cargando = useSelector( state => state.inventario.loading )
    
    
    return (  
        <Fragment>
            <h2 className='text-center my-5'>Listado de Productos</h2>
            
            { error ? <p className='font-weight-bold alert alert-danger text-center mt-4'>Hubo un error</p>: null}
            { cargando ? <p className='text-center'>Cargando...</p> : null}
            
            <table className='table table-stripped'>
                <thead className='bg-secondary table-dark'>
                    <tr>
                        <th scope='col'>Nombre</th>
                        <th scope='col'>Precio</th>
                        <th scope='col'>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    { productos.length === 0 ? <tr className='mt-3 bg-white'><td>No hay productos</td></tr> : (
                        productos.map(producto => (
                            <Producto
                                key={producto.id}
                                producto={producto}
                            />
                        ))
                    )}
                </tbody>
            </table>
            
        </Fragment>
    );
}
 
export default Productos;