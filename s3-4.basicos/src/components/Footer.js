import React from 'react'; // imr snippet
// sfc SNIPPET 
// Function expression, podemos elminar "return" y {}, el () -> return implícito
const Footer = ({fecha}) => ( 
    <footer id="footer">
      <p>Todos los derechos reservados &copy; {fecha}</p>
    </footer>
);
 
export default Footer;