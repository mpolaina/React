import { combineReducers } from 'redux'
import productosReducer from './productosReducer'
import alertaReducer from './alertaReducer'

// combinamos los reducers para pasarle al store un objeto con multiples reducers-states
export default combineReducers({
    // definimos el state de inventario, para productos y el state de alertas
    inventario: productosReducer,
    alerta: alertaReducer
})