import React, { useReducer } from 'react';
import authContext from './authContext'
import authReducer from './authReducer'
import clienteAxios from '../../config/axios'
import tokenAuth from '../../config/token'

// eslint-disable-next-line
import {
  REGISTRO_EXITOSO,
  REGISTRO_ERROR,
  OBTENER_USUARIO,
  LOGIN_EXITOSO,
  LOGIN_ERROR,
  CERRAR_SESION
} from '../../types'

const AuthState = props => {
  
    const initialState = {
        token: localStorage.getItem('token'),
        autenticado: null,
        usuario: null,
        mensaje: null,
        cargando: true
          
    } 
    
    const [ state, dispatch ] = useReducer(authReducer, initialState)
    
    // FUNCIONES
    // REGISTRO de usuario
    const registrarUsuario = async datos => {
        
        try {
              const respuesta = await clienteAxios.post('/api/usuarios', datos)
              console.log(respuesta.data)
              
              dispatch({
                  type: REGISTRO_EXITOSO,
                  payload: respuesta.data
              })
              
              // al registrarse OBTENERMOS EL USUARIO
              obtenerUsuario()
            
        } catch (error) {
              //console.log(error.response.data.msg)
              const alerta = {
                  msg: error.response.data.msg,
                  categoria: 'alerta-error'
              }
              dispatch({
                  type: REGISTRO_ERROR,
                  payload: alerta              
              })
        }
    }
    
    // OBTENER USUARIO autenticado
    const obtenerUsuario = async () => {
        // obtenemos el token del localStorage colocado por REGISTRO_EXITOSO
        const token = localStorage.getItem('token')
        
        if(token) {
            tokenAuth(token)
        }
        
        try {
              const respuesta = await clienteAxios.get('/api/auth')
              //console.log(respuesta.data)
              dispatch({
                  type: OBTENER_USUARIO,
                  payload: respuesta.data.usuario
              })
            
        } catch (error) {
              console.log(error.response)
              dispatch({
                  type: LOGIN_ERROR
              })
        }      
    }
    
    // INICIO DE SESIÓN
    const iniciarSesion = async datos => {
        try {
              const respuesta = await clienteAxios.post('/api/auth', datos)
              //console.log(respuesta)
              dispatch({
                  type: LOGIN_EXITOSO,
                  payload: respuesta.data // pasa el token 
              })
              // al iniciar sesión OBTENERMOS EL USUARIO
              obtenerUsuario()
        } catch (error) {
              console.log(error.response.data.msg)
              const alerta = {
                msg: error.response.data.msg,
                categoria: 'alerta-error'
              }
              dispatch({
                  type: LOGIN_ERROR,
                  payload: alerta              
              }) 
        }
    }
    
    // CERRAR SESIÓN
    const cerrarSesion = () => {
        dispatch({
            type: CERRAR_SESION
        })
    }
    
    
  
    return(
        <authContext.Provider
            value={{
                token: state.token,
                autenticado: state.autenticado,
                usuario: state.usuario,
                mensaje: state.mensaje,
                cargando: state.cargando,
                registrarUsuario,
                iniciarSesion,
                obtenerUsuario,
                cerrarSesion
            }}
        >
            {props.children}
        </authContext.Provider>
    )
  
}

export default AuthState;