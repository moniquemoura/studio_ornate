import './agendamento.css'
import Formulario from './formulario'
export default function Agendamento() {
    return (
        <div className="container agendamento">
            <br></br>
            <h1> AGENDE AGORA!</h1>
            <br></br>
            <h3>Conheça o nosso studio e tenha sua primeira conversa com o seu tatuador(a) preferido.</h3>
            <h3> Faça agora o seu agendamento!</h3>
            <br></br>
            <hr></hr>
            <h4>Preencha o formulário abaixo. Entraremos em contato com você.</h4>
            <div className="container col-md-12">
                <div className="row">

                    <div className="col-md-6">
                        <Formulario />
                    </div>

                    <div className="col-md-6">

                    </div>
                </div>
            </div>

        </div>
    )
}