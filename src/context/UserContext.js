import React, {createContext, useState} from 'react';
import {useNavigate} from "react-router-dom";

/**
 * Criação do Contexto
 * @type {React.Context<{authenticated: boolean, signIn: signIn, handleLogout: handleLogout, user: {}}>}
 */
const Context = createContext({
    authenticated: false, user: {}, signIn: () => {
    }, handleLogout: () => {
    }
});
Context.displayName = 'Contexto do Usuário';

/**
 * Provedor de Autenticação
 * @param children
 * @returns {JSX.Element}
 * @constructor
 */
function AuthProvider({children}) {

    const [authenticated, setAuthenticated] = useState(false);
    const [user, setUser] = useState({name: 'Administrator'});
    const navigate = useNavigate();
    const signIn = () => {
        setAuthenticated(true)
        navigate('/dashboard');
    };
    const handleLogout = () => {
        setAuthenticated(false);
        navigate('/');
    };

    return (
        <Context.Provider value={{authenticated, user, signIn, handleLogout}}>
            {children}
        </Context.Provider>
    );
}

export {Context, AuthProvider};