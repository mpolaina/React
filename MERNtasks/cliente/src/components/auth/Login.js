import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom'
import alertaContext from '../../context/alertas/alertaContext'
import authContext from '../../context/autenticacion/authContext'

const Login = (props) => {
  
    // Extraer valores del alertContext
    const contextalerta = useContext(alertaContext);
    const { alerta, mostrarAlerta } = contextalerta
    
    // Extraer valores del authContext
    const contextauth = useContext(authContext);
    const { mensaje, autenticado, iniciarSesion } = contextauth
    
     // Si el usuario o password no existe
     useEffect(() => {
      if(autenticado) {
          props.history.push('/proyectos')
      }
      if(mensaje) {
          mostrarAlerta(mensaje.msg, mensaje.categoria)
      }
      
  }, [mensaje, autenticado, props.history])
    
    // State para iniciar sesión
    const [usuario, guardarUsuario] = useState({
        email: '',
        password: ''
    })
    
    // extraer de usuario
    const { email, password } = usuario;
    
    const onChange = e => {
        guardarUsuario( {
            ...usuario,
            [e.target.name] : e.target.value
        })
    }  
  
    // Cuando se inicia sesión
    const onSubmit = e => {
      e.preventDefault();
      
      // Validación sin campos vacios
      if(email.trim() === '' || password.trim() === ''){
          mostrarAlerta('Todos los campos requeridos', 'alerta-error')
          return
      }
      // Pasarlo al action
      iniciarSesion({
          email,
          password
      })
    }
    
    return (  
      <div className='form-usuario'>
          { alerta ? ( <div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div> ) : null}
          <div className='contenedor-form sombra-dark'>
              <h1>Iniciar sesión</h1>
              
              <form
                  onSubmit={onSubmit}
              >
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
                      <input 
                          type='submit'
                          className='btn btn-primario btn-block'
                          value='Iniciar sesión'
                      />
                  </div>
              </form>
              
              <Link to={'/nueva-cuenta'} className='enlace-cuenta'>
                  Regístrate
              </Link>
          </div>
      </div>
    );
}
 
export default Login;