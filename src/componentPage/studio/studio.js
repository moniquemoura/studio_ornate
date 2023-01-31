import './studio.css'
import Img1 from './imgstudio/img_1.jpeg'
import Img2 from './imgstudio/img_2.jpeg'
import Img3 from './imgstudio/img_3.jpeg'

export default function Studio() {
  return (
    <div id="carouselExampleCaptions" className="carousel slide">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={Img1} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Arte na pele</h5>
            <p> Bem-vindo ao nosso estúdio de tatuagem, onde criamos arte única e permanente em sua pele. Nossos artistas talentosos combinam habilidade e paixão para transformar suas ideias em realidade. Seja para uma tatuagem nova ou para dar vida à uma tatuagem antiga, você está em boas mãos conosco.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={Img2} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Crie sua história</h5>
            <p>Aqui no nosso estúdio de tatuagem, cada tatuagem é uma história única e significativa. Nós acreditamos que as tatuagens são mais do que simples desenhos, são uma forma de expressão e uma jornada pessoal. Nós trabalhamos com você para criar uma obra de arte que capture sua personalidade e história. Vamos criar juntos sua próxima história</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={Img3} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Nossa sala de espera</h5>
            <p>Espere em estilo. Nossa sala de espera acolhedora oferece conforto e privacidade enquanto você aguarda sua próxima obra de arte. Sinta-se à vontade para desfrutar de uma bebida ou ler uma revista antes da sua tatuagem. Aqui, sua jornada de arte começa antes mesmo do agulhão.</p>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}