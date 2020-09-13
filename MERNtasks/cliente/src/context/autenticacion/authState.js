import React, { useReducer } from 'react';
import authContext from './authContext'
import authReducer from './authReducer'
import clienteAxios from '../../config/axios'

// eslint-disable-next-line
import {
  REGISTRO_EXITOSO,
  REGISTRO_ERROR,
  OBTENER_USUARIO,
  LOGIN_EXITOSO,
  LOGIN_ERROR,
  CERRAR_SESION,
} from '../../types'

const AuthState = props => {
  
    const initialState = {
        token: localStorage.getItem('token'),
        autenticado: null,
        usuario: null,
        mensaje: null
          
    } 
    
    const [ state, dispatch ] = useReducer(authReducer, initialState)
    
    // FUNCIONES
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
    
    // Obtener el usuario autenticado
    const obtenerUsuario = async () => {
        const token = localStorage.getItem('token')
        if(token) {
            // Función para enviar el token por headers
            //
            // ******** AQUÍ ME HE QUEDADO ********
            //
            //
            
        }
        try {
            const respuesta = await clienteAxios.get('/api/auth')
            console.log(respuesta)
        } catch (error) {
            console.log(error)
            dispatch({
                type: LOGIN_ERROR
            })
        }      
    }
  
    return(
        <authContext.Provider
            value={{
                token: state.token,
                autenticado: state.autenticado,
                usuario: state.usuario,
                mensaje: state.mensaje,
                registrarUsuario
            }}
        >
            {props.children}
        </authContext.Provider>
    )
  
}

export default AuthState;