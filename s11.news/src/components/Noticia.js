import React from 'react';
import PropTypes from 'prop-types'

const Noticia = ({noticia}) => {
  
  // extraer datos de la noticia
  const { urlToImage, url, title, description, source } = noticia
  
  const imagen = (urlToImage) ? 
      <div className="card-image">
        <img className="rounded-lg mt-1 mb-3" src={urlToImage} alt="{title}"/>
        <span className="card-title pl-8">{source.name}</span>
      </div>
      : null
  
  return (
      <div className="shadow-xl pt-3 px-4 border border-gray-300 rounded-lg h-auto">
          {imagen}
          <div className="bg-black h-px w-5/6 mx-auto mt-1"></div>
          <div className="px-6 pb-6 pt-2">
              <h3 className="font-sans text-2xl font-medium">{title}</h3>
              <p className="font-mono text-sm font-hairline mt-4">{description}</p>
          </div>
          <div className="card-action">
            <button
              className="w-full py-2 px-4 my-4 mx-auto 
              text-gray-700 font-semibold hover:text-white 
              bg-transparent hover:bg-gray-800
              border border-gray-700 hover:border-transparent rounded"
            >
              <a href={url}
              target="_blank"
              rel="noopener noreferrer">
                Ver Noticia
              </a>
            </button>
          </div>
      </div> 
  )
  
}

Noticia.propTypes = {
  noticia: PropTypes.object.isRequired,
};
export default Noticia;