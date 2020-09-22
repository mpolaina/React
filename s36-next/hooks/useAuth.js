import React, { useState, useEffect } from 'react';
import firebase from '../firebase/index'

function useAuth() {
    const [usuarioAuth, setUsuarioAuth] = useState(null)
    
    useEffect(() => {
        const unsuscribe = firebase.auth.onAuthStateChanged(usuario => {
            if( usuario ) {
                setUsuarioAuth(usuario)
            } else {
                setUsuarioAuth(null)
            }    
        })
        return () => unsuscribe();
    }, [])
    
    return usuarioAuth;
}

export default useAuth;