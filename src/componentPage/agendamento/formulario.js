import axios from "axios";
import { useState } from "react"

export default function Formulario() {
    const [agendamento, setAgendamento] = useState();
    const [enviado, setEnviado] = useState(false);
    const valueInput = e => setAgendamento({ ...agendamento, [e.target.name]: e.target.value });

    const handleSubmit = async e => {
        e.preventDefault();
        setEnviado(true)
        await axios.post(`http://localhost:3200/agendamentos`, agendamento)
            .then(() => setEnviado(true))
            .catch((err) => {
                console.error(err);
                setEnviado(false);
            })
    }

    if (enviado) {
        return <h3 >Nossa equipe entrará em contato confirmando!</h3>
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='my-4'>
                <label className="form-label " >Nome: </label>
                <input className="form-control" type="text" id="nome" name="nome" placeholder="Nome" onChange={valueInput} />
            </div>

            <div className='my-4'>
                <label className="form-label" >E-mail:</label>
                <input className="form-control" type="text" id="email" name="email" placeholder="E-mail" onChange={valueInput} />
            </div>

            <div className='row'>
                <div className='my-4 col'>
                    <label className="form-label" >Data de nascimento:</label>
                    <input className="form-control" type="date" id="data" name="data_nascimento" onChange={valueInput} />
                </div>

                <div className='my-4 col'>
                    <label className="form-label" >Telefone:</label>
                    <input className="form-control" type="text" id="telefone" name="telefone" placeholder="Telefone" onChange={valueInput} />
                </div>
            </div>

            <div className='row'>
                <div className='my-4 col'>
                    <label className="form-label" >Qual o tatuador(a):</label>
                    <div className="form-text mb-2">Escolha o seu tatuador(a) preferido(a).</div>
                    <select className="form-select" aria-label="Disabled select example" name="tatuador" onChange={valueInput}>
                        <option >selecione</option>
                        <option value="Juan Rodriguez">Juan Rodriguez</option>
                        <option value="Samantha Smith">Samantha Smith</option>
                        <option value="Michael Johnson">Michael Johnson</option>
                        <option value="Emma Lee">Emma Lee</option>
                        <option value="David Brown">David Brown</option>
                    </select>
                </div>

                <div className='my-4 col'>
                    <label className="form-label" >Horário:</label>
                    <div className="form-text mb-2">Escolha o melhor horário para você.</div>
                    <select className="form-select" aria-label="Disabled select example" name="horario" onChange={valueInput}>
                        <option >selecione</option>
                        <option value="08:00">08:00</option>
                        <option value="10:00">10:00</option>
                        <option value="14:00">14:00</option>
                        <option value="16:00">16:00</option>
                        <option value="18:00">18:00</option>
                    </select>
                </div>

            </div>

            <div className='my-4'>
                <label className="form-label" >Informações adicionais:</label>
                <input className='form-control' id="informacoes" name="informacoes" placeholder="Escreva aqui as informações adicionais, para o seu tatuador(a)." onChange={valueInput} />
            </div>

            <div className='my-4 text-end'>
                <button className='btn btn-lg' style={{
                    color: 'black',
                    background: 'yellow'
                }} type='submit'>Agendar </button>
            </div>
            
        </form>
    )
}