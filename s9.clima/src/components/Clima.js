import React from 'react';
import PropTypes from 'prop-types';

const Clima = ({resultado}) => {

  // extraer los valores del resultado
  const { name, main, weather } = resultado
  if(!name){ return null}
  
  const urlIcon = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`
  

  return (  
      <div className="card-panel white col s12">
          <div className="black-text pb-3">
              <h2>El clima de {name} es:</h2>
              
              <img src={urlIcon} alt="weather"/>
              <p>{weather[0].description}</p>
              
              <p className="temperatura">
                {main.temp} <span>&#x2103;</span>
              </p>
              <p className="small">
                Máx: {main.temp_max}<span>&#x2103;</span> - 
                Mín: {main.temp_min}<span>&#x2103;</span>
              </p>
          </div>
      </div>
  );
}

Clima.propTypes = {
  resultado: PropTypes.object.isRequired
};

export default Clima;