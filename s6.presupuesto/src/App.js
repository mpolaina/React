import React, { useState, useEffect } from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario'
import Listado from './components/Listado'
import Disponible from './components/Disponible'

function App() {

  // Definir el ppto y el restante  
  const [presupuesto, setPresupuesto] = useState(0)
  const [disponible, setDisponible] = useState(0);
  // State mostrar/ocultar presupuesto(pregunta)/formulario
  const [mostrarpregunta, actualizarPregunta] = useState(true)
  const [gastos, setGastos] = useState([]);
  const [gasto, setGasto] = useState({})
  // Ocultar gasto al inicio (useEffect)
  const [vergasto, setVergasto] = useState(false)
  
  // UseEffect que actualiza el disponible
  useEffect(()=> {
    
      if(vergasto){
        // Agrega el nuevo gasto
        setGastos([
          ...gastos,
          gasto
        ])
        
        // Resta del presupuesto actual
        const restante = disponible - gasto.cantidad
        setDisponible(restante)
        
        // Resetear a false
        setVergasto(false)
      }
      
  }, [gasto, vergasto, disponible, gastos])
    
  return (
    <div className="container">
      <header>
        <h1>
          <svg width="0.7em" height="0.7em" viewBox="0 0 16 16" class="bi bi-wallet2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499L12.136.326zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484L5.562 3zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z"/>
          </svg> Gasto Semanal</h1>
        <div className="contenido-principal contenido">
            { mostrarpregunta // Carga condicional de componentes
            ? (
                <Pregunta
                    setPresupuesto={setPresupuesto}
                    setDisponible={setDisponible}
                    actualizarPregunta={actualizarPregunta}
                />
              ) 
            : (
                <div className="row">
                  <div className="one-half column">
                    <Formulario
                        setGasto={setGasto}
                        setVergasto={setVergasto}
                    />  
                  </div>
                  <div className="one-half column">
                    <Listado
                        gastos={gastos}
                    />
                    <Disponible
                        presupuesto={presupuesto}
                        disponible={disponible}
                    />
                  </div>
                </div>
              )
            }
            
            
        </div>
      </header>
    </div>
  );
}

export default App;
