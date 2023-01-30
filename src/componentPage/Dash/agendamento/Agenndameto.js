import {useEffect, useState} from "react";
import axios from "axios";
import Loader from "../../../component/Loader/Loader";
import ElementoAgendamento from "./ElementoAgendamento";

export default function Agendamento() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios.get(`http://localhost:3200/agendamentos`)
            .then(res => {
                setData(res.data);
                setLoading(false);
            })
            .catch(console.error);
    }, [])
    if (loading) {
        return <Loader/>;
    }
    return (

        <div style={{width: '100%'}}>
            <div className='card-header'>
                <h3> Agendamentos</h3>
            </div>
            <div className='card-body'>
                <div className='row'>
                    <table className=' table-striped table-responsive' style={{width: '100%'}}>
                        <thead>
                        <tr className='text-white'>
                            <th>Nome</th>
                            <th>Email</th>
                            <th>Telefone</th>
                            <th>Data De Nascimento</th>
                            <th>Tatuador</th>
                            <th>Horário</th>
                            <th>Informações</th>
                            <th>Ação</th>
                        </tr>
                        </thead>
                        <tbody>
                        {data?.map(item => <ElementoAgendamento key={item.id} item={item}/>)}
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}