import React, { useState, useContext } from 'react';
import Router, { useRouter } from 'next/router'
import FileUploader from 'react-firebase-file-uploader'
/** @jsx jsx */ import { css, jsx } from '@emotion/core'
import Layout from '../components/layout/Layout'
import { Formulario, Campo, InputSubmit, Error } from '../components/ui/Formulario'
import { FirebaseContext } from '../firebase/index'

import Error404 from '../components/layout/404'
// VALIDACIONES
import useValidacion from '../hooks/useValidacion'
import validarCrearProducto from '../validacion/validarCrearProducto'

const STATE_INICIAL = {
    nombre: '',
    empresa: '',
    imagen: '',
    url: '',
    descripcion: ''
}
const NuevaProducto = () => {
    
    // STATE DE LAS IMAGENES
    const [imgName, setImgName] = useState('')
    const [uploading, setUploading] = useState(false)
    const [progreso, setProgreso] = useState(0)
    const [urlImg, setUrlImg] = useState('')
    
    const [ error, setError ] = useState(false)
        
    const { valores, errores, handleSubmit, handleChange, handleBlur } = useValidacion(STATE_INICIAL, validarCrearProducto, crearProducto)
    // Extraer valores
    const { nombre, empresa, imagen, url, descripcion } = valores
    
    // hook de routing para redireccionar
    const router = useRouter()
    // context con las operaciones CRUD de firebase
    const { usuario, firebase } = useContext( FirebaseContext )
   
    async function crearProducto() {
        // si el usuario no está autenticado llevar al login
        if(!usuario) {
            return router.push('login')
        }
        // Crear objeto de nuevo producto
        const producto = {
            nombre,
            empresa,
            url,
            urlImg,
            descripcion,
            votos: 0,
            comentarios: [],
            creado: Date.now(),
            creador: {
                id: usuario.uid,
                nombre: usuario.displayName
            },
            haVotado: []
        }
        // Insertar en la base de datos
        firebase.db.collection('productos').add(producto)
        // redirección
        return router.push('/')
    }
    
    const handleUploadStart = () => {
        setProgreso(0)
        setUploading(true)
    }
    const handleProgress = progreso => setProgreso({ progreso })
    const handleUploadError = error => {
        setUploading(error)
        console.log(error)
    }
    const handleUploadSuccess = nombre => {
        setProgreso(100)
        setUploading(false)
        setImgName(nombre)
        firebase
            .storage
            .ref('productos')
            .child(nombre)
            .getDownloadURL()
            .then(url => {
                console.log(url)
                setUrlImg(url)
            })
    }
    
    
    
    return (
        <div>
            <Layout>
                { !usuario ? <Error404/> : (
                    <>
                    <h1
                        css={css`
                            text-align: center;
                            margin-top: 5rem;
                        `}
                    >Nuevo Producto</h1>
                    <Formulario
                        onSubmit={handleSubmit}
                    >
                        <fieldset>
                            <legend>Información General</legend>
                            <Campo>
                                <label htmlFor='nombre'>Nombre</label>
                                <input
                                    type='text'
                                    id='nombre'
                                    placeholder='Nombre del producto'
                                    name='nombre'
                                    value={nombre}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </Campo>
                            { errores.nombre && <Error>{errores.nombre}</Error>}
                            
                            <Campo>
                                <label htmlFor='empresa'>Empresa</label>
                                <input
                                    type='text'
                                    id='empresa'
                                    placeholder='Nombre empresa'
                                    name='empresa'
                                    value={empresa}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </Campo>
                            { errores.empresa && <Error>{errores.empresa}</Error>}
                            
                            <Campo>
                                <label htmlFor='imagen'>Imagen</label>
                                <FileUploader
                                    accept='image/*'
                                    id='imagen'
                                    name='imagen'
                                    randomizeFilename
                                    storageRef={firebase.storage.ref('productos')}
                                    onUploadStart={handleUploadStart}
                                    onUploadError={handleUploadError}
                                    onUploadSuccess={handleUploadSuccess}
                                    onProgress={handleProgress}
                                />
                            </Campo>
                            
                            <Campo>
                                <label htmlFor='url'>Url</label>
                                <input
                                    type='url'
                                    id='url'
                                    placeholder='Url de tu empresa'
                                    name='url'
                                    value={url}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </Campo>
                            { errores.url && <Error>{errores.url}</Error>}
                        </fieldset>
                        <fieldset>
                            <legend>Sobre tu producto</legend>
                            <Campo>
                                <label htmlFor='descripcion'>Descripción</label>
                                <textarea
                                    id='descripcion'
                                    name='descripcion'
                                    value={descripcion}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </Campo>
                            { errores.descripcion && <Error>{errores.descripcion}</Error>}
                        </fieldset>
                        
                        { error && <Error>{error}</Error>}
                        
                        <InputSubmit 
                            type='submit'
                            value='Crear Producto'
                        />
                    </Formulario>
                </>
                )}
                
            </Layout>
        </div>
    )
}

export default NuevaProducto
