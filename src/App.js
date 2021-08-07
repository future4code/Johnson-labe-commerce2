import React from 'react';
import styled from 'styled-components';
import {Filtros} from './Component/Filtros';
import Carrinho from './Component/Carrinho';
import ContainerProdutos from './Component/ContainerProdutos';
import Header from './Component/Header';
import Footer from './Component/Footer';


const MainContainer = styled.div `
    background-color: #F5D5E0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;


`


class App extends React.Component {

state = {
  valorMinimo: 0,
  valorMaximo: 200000.00,
  descricao: ""
  
}

alterarValorMin = (valor) => {
  this.setState({valorMinimo: valor})
}

alterarValorMax = (valor) => {
  this.setState({valorMaximo: valor})
}

alterarDescricao = (valor) => {
  this.setState({descricao: valor})
}

onClickProduto = () =>{

}

render () {

  return (
    <div>
      <Header />
      <MainContainer>
        <Filtros />
        <ContainerProdutos />
        
        <Carrinho />

      </MainContainer>
      <Footer />
    </div>
  )
}

}

export default App;
