import './formulario'
export default function Agendamento (){
    return (
        <form>
           <div>
              <label for="nome">Nome: </label>
              <input type="text" id="nome"> </input>
           </div>

           <div>
               <label for="data">Data de nascimento:</label>
               <input type="number" id="data"></input>
           </div>

           <div>
               <label for="telefone">Telefone:</label>
               <input type="number" id="telefone"></input>
           </div>

           <div>
               <label for="email">E-mail::</label>
               <input type="text" id="email"></input>
           </div>

           <div>
               <label for="tatuador">Qual o tatuador(a):</label>
               <input type="text" id="tatuador"></input>
           </div>

           <div>
               <label for="horario">Horário:</label>
               <input type="number" id="horario"></input>
           </div>

           <div>
               <label for="informacoes">Informações adicionais:</label>
               <textarea id="informacoes"></textarea>
           </div>

           <div>
               <button type='submit'>Agendar </button>
           </div>

        </form>
    )
    }