import React, { Fragment } from 'react';

function Header({titulo}){
    // CÓDIGO JS
    // const edad = 18 // se injecta con {}
  return (
    <Fragment>
      <h1 id="titulo" className="encabezado">{titulo}</h1>
      {/* <h2>Desde el header, edad {edad}</h2> */}
    </Fragment>
  )
}

export default Header