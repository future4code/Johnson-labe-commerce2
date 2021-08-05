import React from 'react';
import styled from 'styled-components';
import Filtros from './Component/Filtros';
import Carrinho from './Component/Carrinho';
import Produtos from './Component/Produtos';
import ContainerProdutos from './Component/ContainerProdutos';
import Header from './Component/Header';
import Footer from './Component/Footer';


const MainContainer = styled.div `
    background-color: gray;
    width: 100vw;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;


`


class App extends React.Component {

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
