import React, { useState } from 'react'
import data from './data'
import Model from './Model'

const Home = () => {

    // Gerenciamento de estado usando useState.
    // model é usado para controlar a exibição ou esconder o modelo.
    // tempdata é usado para armazenar temporariamente os dados do cartão.
    const [model, setModel] = useState(false)
    const [tempdata, setTempData] = useState([])

    // Função chamada quando o usuário clica no botão "Click aqui" de um cartão específico.
    // Recebe como argumentos img, title e desc e armazena esses dados no estado tempdata.
    // Em seguida, define o estado do model como true para exibir o modelo.
    const getData = (img, tittle, desc) => {
        let tempData = [img, tittle, desc];
        setTempData(item => [1, ...tempData])
        return setModel(true)
    }

    // Renderização do componente Home
    return (
        <>

            {/* Exibição de dados de cartões armazenados em data.cardData */}
            <section className="py-4 py-lg-5 container">
                <div className="row justify-content-center align-item-center" >
                    {data.cardData.map((item, index) => {
                        return (
                            <div className='col-11 col-md-6 col-lg-3 mx-0 mb-4' key={index}>
                                <div className="card p-0 overflow-hidden h100 shadow" >
                                    <img src={item.imgSrc} className="card-img-top" alt="lorem" />
                                    <div className="card-body">
                                        <h5 className="card-title text-black">{item.title}</h5>
                                        <p className="card-text">{item.desc}</p>
                                        <button className="btn btn-primary" onClick={() => getData(item.imgSrc, item.title, item.desc)}>Clique aqui</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}


                </div>

            </section>

            {
                // Condicionalmente renderiza o componente Model dependendo do estado do model.
                // Se o model estiver como true, o componente Model é renderizado na tela.
                model === true ? <Model img={tempdata[1]} title={tempdata[2]} desc={tempdata[3]} hide={() => setModel(false)} /> : ''
            }


        </>
    )
}

export default Home
