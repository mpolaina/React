import React from 'react';
import Noticia from './Noticia'
import PropTypes from 'prop-types'

const Listado = ({noticias}) => {
  return (  
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        {noticias.map(noticia => (
          <Noticia
              key={noticia.url}
              noticia={noticia}
          />
        ))}
      </div>
  );
}

Listado.propTypes = {
  noticias: PropTypes.array.isRequired,
};
export default Listado;