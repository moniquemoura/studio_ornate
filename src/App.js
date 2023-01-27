import * as React from "react";
import {Outlet, Route, Routes} from "react-router-dom";

import Home from './componentPage/home'
import Navbar from './component/navbar/navbar'
import Footer from "./component/footer/footer";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>}/>

                <Route path="*" element={<NotFound/>}/>
            </Route>
        </Routes>
    );
}

function NotFound() {
    return <h1>Not Found</h1>;
}

function Layout() {
    return (
        <div>
            <Navbar />
            <Outlet/>
            <Footer />
        </div>
    );
}