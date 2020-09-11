import React, { useReducer } from 'react';
import tareaContext from './tareaContext'
import tareaReducer from './tareaReducer';
import { v4 as uuidv4 } from 'uuid';

import { 
    TAREAS_PROYECTO,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    ESTADO_TAREA,
    TAREA_ACTUAL,
    ACTUALIZAR_TAREA,
    LIMPIAR_TAREA 
} from '../../types'

const TareaState = props => {
    
    const initialState = {
        tareas: [
            { id: 1, nombre: 'Aprender Hooks', estado: false, proyectoId: 1 },
            { id: 2, nombre: 'Aprender useState', estado: true, proyectoId: 2 },
            { id: 3, nombre: 'Aprender Redux', estado: false, proyectoId: 1 },
            { id: 4, nombre: 'Aprender Next.Js', estado: false, proyectoId: 1 },
            { id: 5, nombre: 'Aprender useContext', estado: false, proyectoId: 2 },
            { id: 6, nombre: 'Aprender useReducer', estado: false, proyectoId: 2 },
            { id: 7, nombre: 'Tailwind CSS', estado: false, proyectoId: 3 },
        ],
        tareasproyecto: null,
        errortarea: false,
        tareaseleccionada: null
    }
    
    // Crear dispatch y el state
    const [state, dispatch] = useReducer(tareaReducer, initialState)
    
    // FUNCIONES
    
    // Obtener las tareas de un proyecto
    const obtenerTareas = proyectoId => {
        dispatch({
            type: TAREAS_PROYECTO,
            payload: proyectoId
        })
    }
    
    // Agregar una tarea
    const agregarTarea = tarea => {
      tarea.id = uuidv4()  
      dispatch({
            type: AGREGAR_TAREA,
            payload: tarea
        })
    }
    
    // Valida y muestra error en la tarea
    const validarTarea = () => {
        dispatch({
            type: VALIDAR_TAREA
        })
    }
    
    // Eliminar tarea por id
    const eliminarTarea = id => {
        dispatch({
            type: ELIMINAR_TAREA,
            payload: id
        })
    }
    
    // Cambia estado tarea
    const estadoTarea = tarea => {
        dispatch({
            type: ESTADO_TAREA,
            payload: tarea
        })
    }
    
    // Extraer la tarea para edición
    const guardarTareaActual = tarea => {
        dispatch({
            type: TAREA_ACTUAL,
            payload: tarea
        })
    }
    
    // Editar tarea
    const actualizarTarea = tarea => {
        dispatch({
          type: ACTUALIZAR_TAREA,
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
                tareas: state.tareas,
                tareasproyecto: state.tareasproyecto,
                errortarea: state.errortarea,
                tareaseleccionada: state.tareaseleccionada,
                obtenerTareas,
                agregarTarea,
                validarTarea,
                eliminarTarea,
                estadoTarea,
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