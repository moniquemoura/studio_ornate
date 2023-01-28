// import './formulario'
export default function Formulario() {
    return (
        <form>
            <div>
                <label className="form-label" for="nome">Nome: </label>
                <input className="form-control" type="text" id="nome" />
            </div>

            <div>
                <label className="form-label" for="data">Data de nascimento:</label>
                <input className="form-control" type="date" id="data" />
            </div>

            <div>
                <label className="form-label" for="telefone">Telefone:</label>
                <input className="form-control" type="number" id="telefone" />
            </div>

            <div>
                <label className="form-label" for="email">E-mail::</label>
                <input className="form-control" type="text" id="email" />
            </div>

            <div>
                <label className="form-label" for="tatuador">Qual o tatuador(a):</label>

                <select className="form-select" aria-label="Disabled select example" name="tatuador">
                    <option selected>selecione</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>

            <div>
                <label className="form-label" for="horario">Horário:</label>
                <input className="form-control" type="time" id="horario" />
            </div>

            <div>
                <label className="form-label" for="informacoes">Informações adicionais:</label>
                <textarea id="informacoes"></textarea>
            </div>

            <div>
                <button className='btn btn-primary' type='submit'>Agendar </button>
            </div>

        </form>
    )
}