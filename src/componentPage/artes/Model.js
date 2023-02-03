import React, { Component } from 'react'

export default class Model extends Component {
  render() {
    // Estilo para a modal
    let modelStyle = {
      display: 'block',
      backgroundColor: 'rgba(0,0,0,0.8)',
    }

    return (
      // Div principal da modal
      <div className="modal show fade" style={modelStyle}>
        <div className="modal-dialog">
          <div className="modal-content">
            {/* Cabeçalho da modal */}
            <div className="modal-header">
              {/* Título da modal, vindo como propriedade */}
              <h5 className="modal-title">{this.props.title}</h5>
              {/* Botão para fechar a modal, ao clicar chama a função hide, vindo como propriedade */}
              <button type="button" className="btn-close" onClick={this.props.hide}></button>
            </div>
            <div className="modal-body">
              {/* Imagem da modal, vindo como propriedade */}
              <img src={this.props.img} className="img-fluid" />
              {/* Descrição da modal, vindo como propriedade */}
              <p>{this.props.desc}</p>
            </div>

          </div>
        </div>
      </div>
    )
  }
}
