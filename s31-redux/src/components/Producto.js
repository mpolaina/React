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
                >
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
</svg>
                </button>
                <button
                    type='button'
                    className='btn btn-outline-danger'
                    onClick={() => confirmarEliminar(id)}
                >
                      <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                      <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                    </svg>  
                </button>
            </td>
        </tr>
    );
}
 
export default Producto;