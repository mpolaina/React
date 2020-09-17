import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import combineReducers from './reducers';

const store = createStore(
    combineReducers,
    compose( applyMiddleware(thunk),
        // Para cargar redux devtools si está instalado, pero sino está que no "casque"
        typeof window === 'object' &&
            typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? 
                window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
);

export default store;