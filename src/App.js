import React from 'react';
import styled from 'styled-components';
import Filtros from './Component/Filtros';
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
    produtos: this.props.estoque,
    valorMinimo: 0,
    valorMaximo: 200000.00,
    descricao: "",
    conteudoCarrinho: [],
    decrescente: ""

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
  onChangeValor = (event) => {
    const valorProduto = event.target.value;
    const filtroValores = this.props.estoque.filter(
      (valor) => valor.preco <= valorProduto && valor.preco >= this.state.valorMinimo
    );
    this.setState({
      valorMaximo: valorProduto,
      produtos: valorProduto > 0 ? filtroValores : this.props.estoque,
    });
  };

  
  onChangeDecrescente = (event) => {
    this.setState({ decrescente: event.target.value });
  };

  OnChangeNomeProduto = (event) => {
    const nomeProduto = event.target.value;
   
    const produtosFiltrados = this.props.estoque.filter((produto) =>
      produto.nome.toLocaleLowerCase().includes(nomeProduto.toLocaleLowerCase())
    );
    this.setState({
      descricao: nomeProduto,
      produtos: produtosFiltrados,
    });

  };

  ordenaCrescente() {
    this.state.produtos.sort((a, b) => {
      if (a.preco > b.preco) {
        return 1;
      }
      if (a.preco < b.preco) {
        return -1;
      }
      
      return 0;
    });
  }

  ordenaDecrescente() {
    this.state.produtos.sort((a, b) => {
      if (a.preco < b.preco) {
        return 1;
      }
      if (a.preco > b.preco) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
  }

  render() {

    return (
      <div>
        <Header />
        <MainContainer>
          <Filtros
          valorMinimo={this.state.alterarValorMin}
          valorMaximo={this.state.alterarValorMax}
          nomeProduto={this.state.alterarDescricao}
          onChangeValor={this.onChangeValor}
          OnChangeNomeProduto={this.OnChangeNomeProduto}
        />
          <Produtos onClickProduto={this.onClickAdicionarCarrinho} />

          <Carrinho conteudo={this.state.conteudoCarrinho} onClickDelete={this.onClickDelete} />

        </MainContainer>
        <Footer />
      </div>
    )
  }

}

export default App;
