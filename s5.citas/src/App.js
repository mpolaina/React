import React, { Fragment, useState, useEffect} from 'react';
import Formulario from './components/Formulario'
import Cita from './components/Cita'

function App() {
  
  // Citas en localStorage
  let citasIniciales = JSON.parse(localStorage.getItem('citas'))
  if(!citasIniciales){
    citasIniciales = []
  }
  
  // Array de citas - STATE
  const [citas, guardarCitas] = useState(citasIniciales)
  
  // useEffect - operaciones cuando cambia el state
  useEffect(() => {
      
      // si hay citas iniciales, colocar en lS
      if(citasIniciales){
        localStorage.setItem('citas', JSON.stringify(citas))
      } else {
        localStorage.setItem('citas', JSON.stringify([]))
      }
  }, [citas, citasIniciales]) // se usa [vacio] para que se pase 1 vez
  
  // Función citas actuales + nueva cita
  const crearCita = cita => {
    guardarCitas([
      ...citas, // copia del state citas
      cita
    ])
  }
  
  // Función Eliminar Cita por id, devuelve array - eliminada
  const eliminarCita = id => {
    const nuevasCitas = citas.filter(cita => cita.id !== id)
    guardarCitas(nuevasCitas)
  }
  
  // Mensaje condicional
  const titulo = citas.length === 0 ? 'Agrega tus citas' : 'Administrar citas'
  
  return (
    <Fragment>
      <h1>Gestión de Citas</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
              <Formulario 
                  crearCita={crearCita}
              />
          </div>
          <div className="one-half column">
            <h2> { titulo } </h2>
            {citas.map(cita => (
                <Cita 
                  key={cita.id}
                  cita={cita}
                  eliminarCita={eliminarCita}
                />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
    
  );
}

export default App;
