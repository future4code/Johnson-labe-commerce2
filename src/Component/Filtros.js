import React from 'react';
import styled from 'styled-components';


const ContainerFiltros = styled.div `
    width: 20%;
    height: 75vh;
    background-color: #DEC6A0;
      display: flex;
    align-items: center;
    flex-direction: column;
   
    

    
`
const InputFiltros = styled.input `
    width: 70%;
    height: 5%;
    

   `

class Filtros extends React.Component {

render () {

  return (
    <ContainerFiltros>
      <h2> Filtro </h2>
      <h4> Valor Mínimo:</h4>
        <InputFiltros
        value={this.props.valorMinimo}
        onChange={this.props.alterarValorMin}/>
    
      <h4> Valor Máximo:</h4>
        <InputFiltros
        value={this.props.valorMaximo}
        onChange={this.props.alterarValorMax}/>      

      <h4> Nome do Produto:</h4>
        <InputFiltros
        value={this.props.descricao}
        onChange={this.props.alterarDescricao}
        /> 

      
    </ContainerFiltros>
  )
}

}

export default Filtros;