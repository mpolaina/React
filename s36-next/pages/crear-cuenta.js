import React, { useState } from 'react';
import Router from 'next/router'
/** @jsx jsx */ import { css, jsx } from '@emotion/core'
import Layout from '../components/layout/Layout'
import { Formulario, Campo, InputSubmit, Error } from '../components/ui/Formulario'
import firebase from '../firebase/index'
// VALIDACIONES
import useValidacion from '../hooks/useValidacion'
import validarCrearCuenta from '../validacion/validarCrearCuenta'


const CrearCuenta = () => {
    
    const [ error, setError ] = useState(false)
    
    const STATE_INICIAL = {
        nombre: '',
        email: '',
        password: ''
    }
    
    const { valores, errores, handleSubmit, handleChange, handleBlur } = useValidacion(STATE_INICIAL, validarCrearCuenta, crearCuenta)
    // Extraer valores
    const { nombre, email, password } = valores
    
    async function crearCuenta() {
        try {
                await firebase.registrar(nombre, email, password)
                Router.push('/')
        } catch (error) {
                console.log('Hubo un error al crear el usuario', error.message)
                setError(error.message)
        }
    }
    
    return (
        <div>
            <Layout>
                <>
                    <h1
                        css={css`
                            text-align: center;
                            margin-top: 5rem;
                        `}
                    >Crear cuenta</h1>
                    <Formulario
                        onSubmit={handleSubmit}
                    >
                        <Campo>
                            <label htmlFor='nombre'>Nombre</label>
                            <input
                                type='text'
                                id='nombre'
                                placeholder='Tu nombre'
                                name='nombre'
                                value={nombre}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </Campo>
                        { errores.nombre && <Error>{errores.nombre}</Error>}
                        <Campo>
                            <label htmlFor='email'>Email</label>
                            <input
                                type='email'
                                id='email'
                                placeholder='Tu email'
                                name='email'
                                value={email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </Campo>
                        { errores.email && <Error>{errores.email}</Error>}
                        <Campo>
                            <label htmlFor='password'>Password</label>
                            <input
                                type='password'
                                id='password'
                                placeholder='Tu password'
                                name='password'
                                value={password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </Campo>
                        { errores.password && <Error>{errores.password}</Error>}
                        
                        { error && <Error>{error}</Error>}
                        
                        <InputSubmit 
                            type='submit'
                            value='Crear cuenta'
                        />
                    </Formulario>
                </>
            </Layout>
        </div>
    )
}
        


export default CrearCuenta
