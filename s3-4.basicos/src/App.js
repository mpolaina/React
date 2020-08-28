import React, { Fragment, useState } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Producto from './components/Producto'
import Carrito from './components/Carrito'
import './App.css';

// function declaration
function App() {
  
  // const [valorState, modificador] = useState()
  const [productos, guardarProductos] = useState([ // STATE -Crear listado de productos
    { id: 1, nombre: 'Gorra React', precio: 30},
    { id: 2, nombre: 'Camiseta React', precio: 25},
    { id: 3, nombre: 'Llavero Angular', precio: 20},
    { id: 4, nombre: 'Chapa VueJs', precio: 10},
  ])
  // STATE - para un carrito de compras
  const [carrito, agregarProducto] = useState([]) 
  // obtener la fecha
  const fecha = new Date().getFullYear() 
  
  return (

    <Fragment>
      <Header
          titulo='Título desde App con props'
      />
      <h1>Lista de productos</h1>
      {productos.map(producto => (
        <Producto
            key={producto.id} 
            producto={producto}
            productos={productos}
            carrito={carrito}
            agregarProducto={agregarProducto}
        />
      ))}
      <Carrito
          carrito={carrito}
          agregarProducto={agregarProducto} // necesario para el filtrado al eliminar
      />
      <Footer 
          fecha={fecha}
      />
    </Fragment>
  );
}

export default App;
