import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    COMENZAR_DESCARGA_PRODUCTOS,
    COMENZAR_DESCARGA_EXITO,
    COMENZAR_DESCARGA_ERROR,
    OBTENER_PRODUCTO_ELIMINAR,
    PRODUCTO_ELIMINADO_EXITO,
    PRODUCTO_ELIMINADO_ERROR,
    OBTENER_PRODUCTO_EDITAR,
    COMENZAR_EDICION_PRODUCTO,
    PRODUCTO_EDITADO_EXITO,
    PRODUCTO_EDITADO_ERROR
} from '../types'
import clienteAxios from '../config/axios'
import Swal from 'sweetalert2'

// ACTION - CREAR NUEVOS PRODUCTOS ----------------------- //
export function newProductAction(producto){
    return async (dispatch) => {
        dispatch( agregarProducto() )
        try {
            // Insertar en la API
            await clienteAxios.post('/productos', producto)
            // si todo OK, actualizamos el state
            dispatch( agregarProductoExito(producto) )
            
            // Alerta sweet
            Swal.fire({
                title: 'Olé!',
                text: 'El producto se agregó con éxito',
                icon: 'success',
                confirmButtonText: 'Yeah!'
            })
        } catch (error) {
            console.log(error)
            // si hay un error cambios el state
            dispatch( agregarProductoError(true) )
            
            // Alerta error
            Swal.fire({
                title: 'Ups!',
                text: 'Ocurrió un error',
                icon: 'error',
                confirmButtonText: 'Volver a intentar'
            })
        }
    }
}

const agregarProducto = () => ({
    type: AGREGAR_PRODUCTO,
    payload: true
})

// si el producto se guarda en la BD, se modifica el state (payload)
const agregarProductoExito = producto => ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto
    
})
// si ocurre ERROR
const agregarProductoError = estado => ({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: estado
})


// ACTION - DESCARGAR PRODUCTOS DE LA BD ----------------------- //
export function getProductsAction() {
    return async (dispatch) => {
        dispatch( descargarProductos() )
        
        try {
            // si todo ok
            const respuesta = await clienteAxios.get('/productos')
            dispatch( descargarProductosExito(respuesta.data) )
            
        } catch (error) {
            console.log(error)
            dispatch ( descargarProductosError() )
        }
    }
}

const descargarProductos = () => ({
    type: COMENZAR_DESCARGA_PRODUCTOS,
    payload: true
})

const descargarProductosExito = productos => ({
    type: COMENZAR_DESCARGA_EXITO,
    payload: productos
})

const descargarProductosError = estado => ({
    type: COMENZAR_DESCARGA_ERROR,
    payload: true
})


// ACTION - Seleccionar y eliminar producto  ----------------------- //

export function borrarProductoAction(id) {
    
    return async (dispatch) => {
        dispatch( obtenerProductoEliminar(id) )
        
        try {
            await clienteAxios.delete(`/productos/${id}`)
            dispatch( eliminarProducto())
            Swal.fire(
                'Eliminado!',
                'Ya no volverás a ver el producto',
                'success'
            )
        } catch (error) {
            console.log(error)
            dispatch( eliminarProductoError() )
        }
        
    }
}

const obtenerProductoEliminar = id => ({
    type: OBTENER_PRODUCTO_ELIMINAR,
    payload: id
})
const eliminarProducto = () => ({
    type: PRODUCTO_ELIMINADO_EXITO,
})
const eliminarProductoError = () => ({
    type: PRODUCTO_ELIMINADO_ERROR,
    payload: true
})

// ACTION - SELECCIONAR PARA EDITAR  ----------------------- //

export function selectToEditAction(producto) {
    
    return (dispatch) => {
        dispatch( obtenerProductoEditar(producto) )
    }
}

const obtenerProductoEditar = producto => ({
    type: OBTENER_PRODUCTO_EDITAR,
    payload: producto
})

// ACTION - EDITAR en API y state  ----------------------- //

export function editarProductoAction(producto) {
    return async (dispatch) => {
        dispatch ( editarProducto() )
        
        try {
            await clienteAxios.put(`/productos/${producto.id}`, producto)
            dispatch( editarProductoExito(producto))
            Swal.fire(
                'Hecho!',
                'Producto editado con éxito',
                'success'
            )
        } catch (error) {
            console.log(error)
            dispatch( editarProductoError() )   
        }
    }
}

const editarProducto = () => ({
    type: COMENZAR_EDICION_PRODUCTO,
})

const editarProductoExito = producto => ({
    type: PRODUCTO_EDITADO_EXITO,
    payload: producto
})

const editarProductoError = () => ({
    type: PRODUCTO_EDITADO_ERROR,
    payload: true
})