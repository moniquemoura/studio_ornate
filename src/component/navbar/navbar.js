import './navbar.css'
import {Link} from "react-router-dom";

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
                            <Link to='/historia'>
                                <span className="btnn">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    HIstória
                                </span>
                            </Link>
                        </li>
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
                            <Link to='/about'>
                                <span className="btnn">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    O Studio</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/contato'>
                                <span className="btnn">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    Contato</span>
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