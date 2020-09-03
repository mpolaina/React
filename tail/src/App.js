import React, {Fragment, useState} from 'react';
import Navbar from './components/Navbar'


function App() {
  
  // estilos agrupados
  const cajikas = 'inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mt-2 lg:mr-3'
  const [perfil, verPerfil] = useState(false)
 
  return (
    <Fragment>
        <Navbar 
            verPerfil={verPerfil} 
            perfil={perfil}/>
        {perfil ? 
          <div className="max-w-sm lg:max-w-xl mx-auto mt-5 rounded-lg overflow-hidden shadow-lg bg-white justify-center">
            <div className="flex mt-4">
              <div className="w-1/4 flex items-center">
                  <img className="w-3/5 mx-auto " src={require('./mpl.png')} alt="Display" />
              </div>
              <div className="w-3/4">
                  <div className="px-6 py-4">
                    <div className="font-bold text-purple-500 text-xl mb-2">
                      Manuel Polaina
                    </div>
                    <p className="text-gray-700 text-base">
                      When i’m not coding i switch to netflix with biscuits and cold tea as my companion. <span></span>😜
                    </p>
                  </div>
              </div>
            </div>
            <div id="skills" className="px-6 py-4 flex flex-col sm:flex-col lg:flex-row"  >
                  <span className={cajikas}>#Web Designer</span>
                  <span className={cajikas}>#Graphic Designer</span>
                  <span className={cajikas}>#Creative</span>
              </div> 
          </div>          
        : null
        }
    </Fragment>
  );
}

export default App;
