import React from 'react';
import Buscador from '../ui/Buscar'
import Navegacion from '../layout/Navegacion'
import Link from 'next/link'

const Header = () => {
    return (
        <header>
            <div>
                <div>
                    <p>P</p>
                    <Buscador/>
                    <Navegacion/>
                </div>
                <div>
                    <p>Hola: Manuel</p>
                    <button type='button'>Cerrar Sesión</button>
                    <Link href='/'>Login</Link>
                    <Link href='/'>Crear cuenta</Link>
                </div>
            </div>
        </header>
    );
}
 
export default Header;