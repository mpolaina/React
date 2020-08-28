import React, { Fragment } from 'react';

const Producto = ({producto, carrito, agregarProducto, productos}) => {
  
  // extraer los valores
  const { nombre, precio, id } = producto
  
  // AGREGAR AL CARRITO
  const buyProduct = id => {
    // filter busca en cada producto y cuando producto.id sea = id que pasamos devolvera un array producto (const) con [0] accedemos al objeto directamente.
    const producto = productos.filter(producto => producto.id === id)[0]
    agregarProducto([
      ...carrito,
      producto
    ])
  }
  
  // ELIMINAR PRODUCTO DEL CARRITO
  const eliminarProducto = id => {
      const productos = carrito.filter(producto => producto.id !== id)
      agregarProducto(productos) // agrega los productos filtrados quitando el eliminado
  }
  
  return (
    <Fragment>
      <h2>{nombre} - {precio}€</h2>
      { productos
      ?
        ( // return implicito
            <button
            type="button"
            onClick={() => buyProduct(id)}
            >Comprar</button>
        )
      :
        (
            <button
            type="button"
            onClick={ () => eliminarProducto(id)}
            >Eliminar</button>  
        )
      }
    </Fragment>
  );
}
 
export default Producto;