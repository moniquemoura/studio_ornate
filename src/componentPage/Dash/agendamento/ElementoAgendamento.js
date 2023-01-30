import axios from "axios";
import {useState} from "react";

export default function ElementoAgendamento({item}) {
    const [agendamento, setAgendamento] = useState(item);
    const valueInput = e => setAgendamento({...agendamento, [e.target.name]: e.target.value});

    function deleteItem(id) {
        axios.delete(`http://localhost:3200/agendamentos/${id}`)
            .then(res => alert("Removido com sucesso!"));
    }

    function editItem(id) {
        axios.put(`http://localhost:3200/agendamentos/${id}`, agendamento)
            .then(res => alert("Alterado com sucesso!"));
    }

    return (
        <tr>
            <td>
                <input type='text' name='nome' defaultValue={item?.nome} onChange={valueInput}/>
            </td>
            <td>
                <input type='text' name='email' defaultValue={item?.email} onChange={valueInput}/>
            </td>
            <td>
                <input type='text' name='telefone' defaultValue={item?.telefone} onChange={valueInput}/>
            </td>
            <td>
                <input type='date' name='data_nascimento' defaultValue={item?.data_nascimento} onChange={valueInput}/>
            </td>
            <td>
                <input type='text' name='tatuador' defaultValue={item?.tatuador} onChange={valueInput}/>
            </td>
            <td>
                <input type='time' name='horario' defaultValue={item?.horario} onChange={valueInput}/>
            </td>
            <td>
                <input type='text' name='informacoes' defaultValue={item?.informacoes} onChange={valueInput}/>
            </td>
            <td>
                <button className='btn btn-primary m-1' onClick={() => editItem(item.id)}>Atualizar</button>
                <button className='btn btn-danger m-1' onClick={() => deleteItem(item.id)}>Deletar</button>
            </td>
        </tr>
    )
}