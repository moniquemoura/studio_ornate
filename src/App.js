import * as React from "react";
import {useContext} from "react";
import {Navigate, Outlet, Route, Routes} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css"
import "./App.css"
import Catalogo from './componentPage/catalogo/Catalogo'
import Navbar from './component/navbar/navbar'
import Footer from "./component/footer/footer";
import Agendamento from "./componentPage/agendamento/agendamento";
import {Login} from "./componentPage/Login/login";

import {AuthProvider, Context} from "./context/UserContext";
import Dashboard from "./componentPage/Dash/Dashboard";

/**
 * Caso não esteja autenticado redireciona para página Inicial
 * @param redirectPath
 * @param children
 * @returns {JSX.Element|*}
 * @constructor
 */
const ProtectedRoute = ({redirectPath = '/login', children}) => {
    const {authenticated} = useContext(Context);
    if (!authenticated) {
        return <Navigate to={redirectPath} replace/>;
    }
    return children ? children : <Outlet/>;
};
export default function App() {
    return (
        <AuthProvider>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route path="/" element={<NotFound/>}/>
                    <Route path="/agendamento" element={<Agendamento/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/artes" element={<Catalogo/>}/>

                    <Route path='/dashboard' element={
                        <ProtectedRoute>
                            <Dashboard/>
                        </ProtectedRoute>
                    }/>

                    <Route path="*" element={<NotFound/>}/>
                </Route>
            </Routes>
        </AuthProvider>
    );
}

/**
 * Caso alguma Rota não exista.
 * @returns {JSX.Element}
 * @constructor
 */
function NotFound() {
    return <div className='container text-center'><h1 style={{color: 'white'}}>Not Found</h1></div>;
}

function Layout() {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
}
