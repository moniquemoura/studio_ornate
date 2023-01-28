import './footer.css'
export default function Footer(){
return (
  
  <footer>
  <div><a className="fsto" href="">Studi <strong className="fstoo" >o</strong> </a>
    <a className="fsto2" href=""><strong>Ornate</strong></a></div>
  <div>
      <ul className="text1">
          <a href="">HIstória</a>
          <a href="">Artes</a>
          <a href="">Sobre o studio</a>
          <a href="">Contato</a>
          <a href="">Agendar Aqui!</a>
      </ul>
  </div>

  <div className="icons">
    <ul>
        <li> <a href="#1"> <ion-icon name="logo-instagram"></ion-icon> </a> </li>
        <li> <a href="#2"> <ion-icon name="logo-whatsapp"></ion-icon> </a></li>
        <li> <a href="#3"> <ion-icon name="mail-open"></ion-icon> </a></li>
    </ul>
</div>



</footer>

)
}