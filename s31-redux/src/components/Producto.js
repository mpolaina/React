import React from 'react';
import { useHistory } from 'react-router-dom'
import Swal from 'sweetalert2'

// REDUX
import { useDispatch } from 'react-redux'
import { borrarProductoAction, selectToEditAction } from '../actions/productoActions'

const Producto = ({producto}) => {
    
    // extraemos el propiedades del objeto producto
    const { nombre, precio, id } = producto
    
    const dispatch = useDispatch()
    const history = useHistory() // Habilitar history para redireccionar
    
    // Confirmar la eliminacion
    const confirmarEliminar = id => {
        // Preguntar al usuario
        Swal.fire({
            title: '¿Estás seguro?',
            text: "Si eliminas el producto no se podrá recuperar",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, elimínalo ya!',
            cancelButtonText: 'Mejor no'
        }).then((result) => {
            if (result.isConfirmed) {
                // Pasarlo al action
                dispatch( borrarProductoAction(id) )
            }
        })
    }
    
    // FN que redirige de forma programada para poder colocar el producto en el state con redux
    const redirectEdicion = producto => {
        dispatch( selectToEditAction(producto) )
        history.push(`/productos/editar/${producto.id}`)
    }
    
    
    return ( 
        <tr>
            <td>{nombre}</td>
            <td>
                <span className='font-weight-bold'>
                    {precio} €
                </span>
            </td>
            <td className='acciones'>
                <button 
                    type='button'
                    className='btn btn-outline-primary mr-2'
                    onClick={ () => redirectEdicion(producto)}
                >Editar</button>
                <button
                    type='button'
                    className='btn btn-outline-danger'
                    onClick={() => confirmarEliminar(id)}
                >Eliminar</button>
            </td>
        </tr>
    );
}
 
export default Producto;