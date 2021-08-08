import React from 'react';
import styled from 'styled-components';
import {Filtros} from './Component/Filtros';
import Carrinho from './Component/Carrinho';
import Produtos from './Component/Produtos';
import Header from './Component/Header';
import Footer from './Component/Footer';



const MainContainer = styled.div`
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
    descricao: "",
    conteudoCarrinho: []

  }

  alterarValorMin = (valor) => {
    this.setState({ valorMinimo: valor })
  }

  alterarValorMax = (valor) => {
    this.setState({ valorMaximo: valor })
  }

  alterarDescricao = (valor) => {
    this.setState({ descricao: valor })
  }

  onClickAdicionarCarrinho = (produto) => {
    const teste1 = this.state.conteudoCarrinho.find((item) => item.id === produto.id)
    let novoArray = []
    if (teste1) {
      novoArray = this.state.conteudoCarrinho.map((item) => {
        if (item.id === produto.id) {
          return { ...item, count: item.count + 1 }
        } else {
          return item
        }
      })

    } else {
      novoArray = [...this.state.conteudoCarrinho, {
        ...produto,
        count: 1,
      }]
    }
    this.setState({ conteudoCarrinho: novoArray })


  }
  onClickDelete = (id) => {
    const deletar = this.state.conteudoCarrinho.find((item) => item.id === id)
    let novoArray = []
    if (deletar.count > 1) {
      novoArray = this.state.conteudoCarrinho.map((item) => {
        if (item.id === id) {
          return { ...item, count: item.count - 1 }
        } else {
          return item
        }
      })
    } else {
      novoArray = this.state.conteudoCarrinho.filter((item) => item.id != id)

    }
    this.setState({ conteudoCarrinho: novoArray })
  }

  render() {

    return (
      <div>
        <Header />
        <MainContainer>
          <Filtros />
          <Produtos onClickProduto={this.onClickAdicionarCarrinho} />

          <Carrinho conteudo={this.state.conteudoCarrinho} onClickDelete={this.onClickDelete} />

        </MainContainer>
        <Footer />
      </div>
    )
  }

}

export default App;
