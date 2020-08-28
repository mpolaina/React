import React, { Fragment, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types'


const Formulario = ({crearCita}) => {
  
  // STATE de citas
  const [cita, actualizarCita] = useState({
      nombre: '',
      apellido: '',
      fecha: '',
      hora: '',
      sintomas: ''
  })
  // STATE para error en validación
  const [error, actualizarError] = useState(false)
  
  // Función ejecutada al escribir en el input
  const actualizarState = e => {
      actualizarCita({
          ...cita,
          [e.target.name]: e.target.value
      })
  }
  // Extraer los valores con destructuring para no usar this.
  const {nombre, apellido, fecha, hora, sintomas} = cita
  
  // Enviar formulario
  const submitCita = e => {
      e.preventDefault();
      // Validar
      if(nombre.trim() === '' || apellido.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === ''){
        actualizarError(true)
        return // para que no siga ejecutando
      }
      // Eliminar mensaje previo
      actualizarError(false)
      // Asignar un id
      cita.id = uuidv4()
      // Crear la cita
      crearCita(cita)
      // Reiniciar form
      actualizarCita({
        nombre: '',
        apellido: '',
        fecha: '',
        hora: '',
        sintomas: ''
      })
  }
  
  return ( 
    <Fragment>
        <h2>Crear Cita</h2>
        {error ? <p className="alerta-error">Todos los campos requeridos</p> : null}
        <form
            onSubmit={submitCita}
        >
          <label>Paciente</label>
          <input
              type="text"
              name="nombre"
              className="u-full-width"
              placeholder="Nombre"
              onChange={actualizarState}
              value={nombre}
          />
          <input
              type="text"
              name="apellido"
              className="u-full-width"
              placeholder="Apellido"
              onChange={actualizarState}
              value={apellido}
          />
          <label>Fecha</label>
          <input
              type="date"
              name="fecha"
              className="u-full-width"
              onChange={actualizarState}
              value={fecha}
          />
          <label>Hora</label>
          <input
              type="time"
              name="hora"
              className="u-full-width"
              onChange={actualizarState}
              value={hora}
          />
          <label>Síntomas</label>
          <textarea
              className="u-full-width"
              name="sintomas"
              onChange={actualizarState}
              value={sintomas}
          ></textarea>
          <button
              type="submit"
              className="u-full-width button-primary"
          >Agregar Cita</button>
        
      </form>
    </Fragment>
   );
}

Formulario.propTypes = {
    crearCita: PropTypes.func.isRequired
}
export default Formulario;