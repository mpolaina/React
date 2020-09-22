import '../styles/globals.css'
import App from 'next/app'
import firebase, { FirebaseContext } from '../firebase/index'
import useAuth from '../hooks/useAuth'

const MyApp = props => {
    
    const usuario = useAuth()
    
    const { Component, pageProps } = props;    
    return (
        <FirebaseContext.Provider
            value={{
                firebase,
                usuario            
            }}
        >
            <Component {...pageProps} />
        </FirebaseContext.Provider>
)
}

export default MyApp
