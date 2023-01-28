import './navbar.css'
export default function Navbar(){
return (

    <>
<header> 

      <div><a className="sto" href="">Studi <strong className="stoo" >o</strong> </a>
      <a className="sto2" href=""><strong>Ornate</strong></a></div>

        <div className="menu">
            <ul>
              <li>
                <a className="btnn" href="">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                HIstória</a></li>
              <li><a className="btnn" href="">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Artes</a></li>
              <li><a className="btnn" href="">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                O Studio</a></li>
              <li><a className="btnn" href="">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Contato</a></li>
            </ul> 
          </div>
          
        <div className="agen" ><a className="agend" href="">Agendar Agora!!</a></div>
    
    </header>
    

    
    </>
)
}