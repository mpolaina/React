import React from 'react';
const Error = ({mensaje}) => {
  return ( 
      <p class='alert alert-dismissible alert-danger col-sm-12 text-center my-3 p-4'>
        <strong>{mensaje}</strong>
      </p>
   );
}
 
export default Error;
