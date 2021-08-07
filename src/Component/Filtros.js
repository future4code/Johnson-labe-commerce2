import React from 'react';
import styled from 'styled-components';


const ContainerFiltros = styled.div`
  
  background-color: #F5D5E0;
  padding-left: 12px;
  width: 15%;
      
`
const InputFiltros = styled.div`
  display: grid;
  gap: 12px;
 `
export class Filtros extends React.Component {

  render() {

    return (
      <ContainerFiltros>
        <h3> Filtro </h3>
        <InputFiltros>
          <div>
            <label>
              Valor Mínimo:
              <input
                value={this.props.valorMinimo}
                onChange={this.props.alterarValorMin} />
            </label>
          </div>
          <div>
            <label>
              Valor Máximo:
              <input
                value={this.props.valorMaximo}
                onChange={this.props.alterarValorMax} />
            </label>
          </div>
          <div>
            <label>
              Nome do Produto:
              <input
                value={this.props.descricao}
                onChange={this.props.alterarDescricao} />
            </label>
          </div>
        </InputFiltros>

      </ContainerFiltros>
    )
  }

}

