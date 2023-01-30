import './agendamento.css'
import mulher_tattoo from './mulher_tattoo.jpg'
import Formulario from './formulario'

export default function Agendamento() {
    return (
        <div className="container agendamento">
            <br></br>
            <h1> AGENDAMENTO</h1>
            <br></br>
            <h3>Conheça o nosso studio e tenha sua primeira conversa com o seu tatuador(a) preferido(a).</h3>
            <h3> Faça agora o seu agendamento!</h3>
            <br></br>

            <h5 >Preencha o formulário abaixo. Entraremos em contato com você.</h5>
            <div className="container col-md-12">
                <div className="row">

                    <div className="col-md-6">
                        <Formulario/>
                    </div>

                    <div className="col-md-6">
                        <img src={mulher_tattoo} className="img-fluid" loading='lazy' alt='Mulher da Tattoo' style={{
                            border: '1px solid',
                            borderColor: 'yellow'
                        }}/>
                    </div>
                </div>
            </div>

        </div>
    )
}