import React, {Fragment} from 'react';
import PropTypes from 'prop-types'

const Header = ({titulo}) => {
  return (  
    
    <Fragment>
      <nav className="flex bg-gradient-to-r from-gray-900 to-gray-700 p-6">
        <div className="flex items-center justify-center text-white mx-auto">
          <span className="font-semibold text-4xl text-center">{titulo}</span>
        </div>
      </nav>
    </Fragment>
    
  );
}

Header.propTypes = {
  titulo: PropTypes.string.isRequired,
};
export default Header;