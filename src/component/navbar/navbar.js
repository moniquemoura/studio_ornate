import { Link } from 'react-router-dom'
import './navbar.css'
export default function Navbar(){
return (
    <header>
       <nav>
          <a className="studionome">STUDIO ORNATE</a>
             <ul>
                 <li>
                   <Link to="/agendamento">
                    <a >O Studio</a>
                    </Link>
                    </li>
                 <li><a >Artes</a></li>
                 <li><a >Contatos</a></li>
                 <li>
                     <button className="btn">Agende Agora!</button>
                 </li>
             </ul>
       </nav>
    </header>
)
}