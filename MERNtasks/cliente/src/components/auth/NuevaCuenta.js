import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom'
import alertaContext from '../../context/alertas/alertaContext'
import authContext from '../../context/autenticacion/authContext'

const NuevaCuenta = (props) => {
  
    // Extraer valores del alertContext
    const contextalerta = useContext(alertaContext);
    const { alerta, mostrarAlerta } = contextalerta
    
    // Extraer valores del authContext
    const contextauth = useContext(authContext);
    const { mensaje, autenticado, registrarUsuario } = contextauth
    
    // Si el usuario está registrado/autenticado
    useEffect(() => {
        if(autenticado) {
            props.history.push('/proyectos')
        }
        if(mensaje) {
            mostrarAlerta(mensaje.msg, mensaje.categoria)
        }
        // eslint-disable-next-line
    }, [mensaje, autenticado, props.history])
    
    // State para iniciar sesión
    const [usuario, guardarUsuario] = useState({
        nombre: '',
        email: '',
        password: '',
        confirmar: ''
    })
    
    // extraer de usuario
    const { nombre, email, password, confirmar } = usuario;
    
    const onChange = e => {
        guardarUsuario( {
            ...usuario,
            [e.target.name] : e.target.value
        })
    }  
  
    // Cuando se inicia sesión
    const onSubmit = e => {
        
        e.preventDefault();
        
        // Validación campos rellenos
        if ( nombre.trim() === '' || email.trim() === '' || password.trim() === '' || confirmar.trim() === '' ) {
            mostrarAlerta('Todos los campos requeridos', 'alerta-error')
            return
        }
        // Password minimo 6 caracteres
        if ( password.length < 6 ) {
            mostrarAlerta('Password mínimo 6 caracteres', 'alerta-error')
            return
        }
        // Passwords iguales
        if ( password !== confirmar) {
            mostrarAlerta('Password no coincide', 'alerta-error')
            return
        }
        // Pasarlo al action
        registrarUsuario({
            nombre,
            email,
            password
        })
      
    }
    
    return (  
      <div className='form-usuario'>
          { alerta ? ( <div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div> ) : null}
          <div className='contenedor-form sombra-dark'>
              <h1>Obtener una cuenta</h1>
              
              <form
                  onSubmit={onSubmit}
              >
                  <div className='campo-form'>
                      <label htmlFor='nombre'>Nombre</label>
                      <input
                          type='text'
                          id='nombre'
                          name='nombre'
                          placeholder='Tu nombre'
                          value={nombre}
                          onChange={onChange}
                      />
                  </div>
                  <div className='campo-form'>
                      <label htmlFor='email'>Email</label>
                      <input
                          type='email'
                          id='email'
                          name='email'
                          placeholder='Tu email'
                          value={email}
                          onChange={onChange}
                      />
                  </div>
                  <div className='campo-form'>
                      <label htmlFor='password'>Password</label>
                      <input
                          type='password'
                          id='password'
                          name='password'
                          placeholder='Tu password'
                          value={password}
                          onChange={onChange}
                      />
                  </div>
                  <div className='campo-form'>
                      <label htmlFor='confirmar'>Confirmar password</label>
                      <input
                          type='password'
                          id='confirmar'
                          name='confirmar'
                          placeholder='Repite tu password'
                          value={confirmar}
                          onChange={onChange}
                      />
                  </div>
                  <div className='campo-form'>
                      <input 
                          type='submit'
                          className='btn btn-primario btn-block'
                          value='Registrar'
                      />
                  </div>
              </form>
              
              <Link to={'/'} className='enlace-cuenta'>
                  Inicar sesión
              </Link>
          </div>
      </div>
    );
}
 
export default NuevaCuenta;