import './navbar.css'
export default function Navbar(){
return (
    <header>
       <nav>
          <a className="studionome">STUDIO ORNATE</a>
             <ul>
                 <li><a href="">O Studio</a></li>
                 <li><a href="">Artes</a></li>
                 <li><a href="">Contatos</a></li>
                 <li><a href="" className="btn">Agende Agora!</a></li>
             </ul>
       </nav>
    </header>
)
}