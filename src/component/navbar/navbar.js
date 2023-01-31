import './navbar.css'
import {Link} from "react-router-dom";
import React from 'react';

export default function Navbar() {
    return (
        <header>
            <nav>
                <div className='title'>
                    <Link to='/'>
                        <span className="sto">Studi <strong className="stoo">o</strong> </span>
                        <span className="sto2"><strong>Ornate</strong></span>
                    </Link>
                </div>

                <div className="menu">
                    <ul>
                        
                        <li>
                            <Link to='/artes'>
                                <span className="btnn">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    Artes</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/studio'>
                                <span className="btnn">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    O Studio</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/equipe'>
                                <span className="btnn">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    profissionais</span>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="agen">
                    <Link to='/agendamento'>
                        <span className="agend">Agendar Agora!!</span>
                    </Link>
                </div>
            </nav>
        </header>

    )
}