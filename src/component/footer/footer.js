import './footer.css'
import {Link} from "react-router-dom";

export default function Footer() {
    return (

        <footer>
            <div className='foot'><a className="fsto" href="">Studi <strong className="fstoo">o</strong> </a>
                <a className="fsto2" href=""><strong>Ornate</strong></a></div>
            <div>
                <ul className="text1">
                    
                    <li>
                        <Link to='/artes'>
                            <span>Artes</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/about'>
                            <span>Sobre o studio</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/contato'>
                            <span>profissionais</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/agendamento'>
                            <span>Agendar Aqui!</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/dashboard'>
                            <span>Dashboard</span>
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="icons">
                <ul>
                    <li><a href="#1">
                        <ion-icon name="logo-instagram"></ion-icon>
                    </a></li>
                    <li><a href="#2">
                        <ion-icon name="logo-whatsapp"></ion-icon>
                    </a></li>
                    <li><a href="#3">
                        <ion-icon name="mail-open"></ion-icon>
                    </a></li>
                </ul>
            </div>
        </footer>
    )
}