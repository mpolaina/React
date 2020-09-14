import React, { useReducer } from 'react';
import tareaContext from './tareaContext'
import tareaReducer from './tareaReducer';

import { 
    TAREAS_PROYECTO,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    TAREA_ACTUAL,
    ACTUALIZAR_TAREA,
    LIMPIAR_TAREA 
} from '../../types'
import clienteAxios from '../../config/axios';

const TareaState = props => {
    
    const initialState = {
        tareasproyecto: [],
        errortarea: false,
        tareaseleccionada: null
    }
    
    // Crear dispatch y el state
    const [state, dispatch] = useReducer(tareaReducer, initialState)
    
    // FUNCIONES
    
    // Obtener las tareas de un proyecto
    const obtenerTareas = async proyecto => {

        console.log(proyecto);

        try {
            const resultado = await clienteAxios.get('../api/tareas', { params: { proyecto }});
            console.log(resultado.data.tareas);
            dispatch({
                type: TAREAS_PROYECTO,
                payload: resultado.data.tareas
            })
        } catch (error) {
            console.log(error);
        }
    }
    
    // Agregar una tarea
    const agregarTarea = async tarea => {
        try {
            const resultado = await clienteAxios.post('/api/tareas', tarea)
            //console.log(resultado.data)
            dispatch({
                type: AGREGAR_TAREA,
                payload: resultado.data.tarea
            })
        } catch (error) {
            console.log(error)
        }
    }
    
    // Valida y muestra error en la tarea
    const validarTarea = () => {
        dispatch({
            type: VALIDAR_TAREA
        })
    }
    
    // Eliminar tarea por id
    const eliminarTarea = async (id, proyecto) => {
        try {
            await clienteAxios.delete(`/api/tareas/${id}`, { params: { proyecto }})
            dispatch({
                type: ELIMINAR_TAREA,
                payload: id
            })
            
        } catch (error) {
            
        }
    }
    
    // Editar tarea
    const actualizarTarea = async tarea => {
        try {
            const resultado = await clienteAxios.put(`/api/tareas/${tarea._id}`, tarea)
            dispatch({
                type: ACTUALIZAR_TAREA,
                payload: resultado.data.tarea
            })
        } catch (error) {
            console.log(error)
        }
    }
    
    // Extraer la tarea para edición
    const guardarTareaActual = tarea => {
        dispatch({
            type: TAREA_ACTUAL,
            payload: tarea
        })
    }
    
    // Limpiar la tarea seleccionada
    const limpiarTarea = () => {
        dispatch({
            type: LIMPIAR_TAREA
        })
    }
  
    return(
        <tareaContext.Provider
            value={{
                tareasproyecto: state.tareasproyecto,
                errortarea: state.errortarea,
                tareaseleccionada: state.tareaseleccionada,
                obtenerTareas,
                agregarTarea,
                validarTarea,
                eliminarTarea,
                guardarTareaActual,
                actualizarTarea,
                limpiarTarea
            }}
        >
          {props.children}
        </tareaContext.Provider>   
    )
}

export default TareaState;