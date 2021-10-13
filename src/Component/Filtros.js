import React from 'react';
import styled from 'styled-components';


const ContainerFiltros = styled.div`
  
  background-color: #430D4B;
  padding:0 12px;
  width: 20%;
  color: #F5D5E0;
  border-right: 1px solid #7B337D;
  display: flex;
  flex-direction: column;
  align-items: center;
    
`
const TituloFiltro = styled.div`
  margin-top: 24px;
  width: 100%;
  text-align: center;
  border-bottom: 2px solid #7B337D;
  letter-spacing:2px;
  font-weight: bold;
  padding-bottom: 16px;
`
const InputFiltros = styled.div`
  margin-top:24px;
  width: 90%;
  display: flex;
  flex-direction: column;
  text-align: center;
  
 `
const InputStyled = styled.input`
  margin:12px 8px;
  
 `
class Filtros extends React.Component {

  render() {

    return (
      <ContainerFiltros>
        <TituloFiltro> Filtro </TituloFiltro>
        <InputFiltros>
          <div>
            <label>
              Valor Mínimo:
              <InputStyled
                value={this.props.valorMinimo}
                onChange={this.props.alterarValorMin} />
            </label>
          </div>
          <div>
            <label>
              Valor Máximo:
              <InputStyled
                value={this.props.valorMaximo}
                onChange={this.props.alterarValorMax} />
            </label>
          </div>
          <div>
            <label>
              Busca por Produto:
              <InputStyled
                value={this.props.descricao}
                onChange={this.props.alterarDescricao} />
            </label>
          </div>
        </InputFiltros>

      </ContainerFiltros>
    )
  }

}

export default Filtros