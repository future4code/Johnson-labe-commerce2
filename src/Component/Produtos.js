import React from 'react';
import styled from 'styled-components';


const CardProduto = styled.div `
    width: 180px;
    height: 240px;
    border: 3px solid #6C9477;
    border-radius: 10px;
    box-shadow: 1px 2px 4px rgba(0, 0, 0,.8);
    background-color: #fff;
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;


    p{
        font-size: 12px;
        text-align: center;
        justify-content: center;
        font-weight: bold;
        

    }
    
    img{
        width: 150px;
        height: 130px;
        margin-left: 15px;
        margin-right: 15px;
        border:1px solid black;
        box-shadow: 2px 2px 2px 1px rgba(0, 0, 0,.6)
    }

`
const BotaoAdicionar = styled.button `
    text-align: center;
    color: black;
    background-color: #b09db9;
    width: 150px;
    border-radius: 25px;
`
 

const estoque = [
    {
        id: 1,
        imagem:  "https://picsum.photos/200/201",
        descricao: "Dev Master Senior",
        preco: 750.00
    },
    {
        id: 2,
        imagem:  "https://picsum.photos/200/199",
        descricao: "Quadro Foguete",
        preco: 100.00
    },
    {
        id: 3,
        imagem:  "https://picsum.photos/200/198",
        descricao: "Buscador de Satélite",
        preco: 450.00
    },
    {
        id: 4,
        imagem:  "https://picsum.photos/200/197",
        descricao: "Meteoro 01",
        preco: 130.00
    },
    {
        id: 5,
        imagem:  "https://picsum.photos/200/196",
        descricao: "Meteoro 02",
        preco: 300.00
    },
    {
        id: 6,
        imagem:  "https://picsum.photos/200/195",
        descricao: "Meteoro 03",
        preco: 450.00
    },
    {
        id: 7,
        imagem:  "https://picsum.photos/200/194",
        descricao: "Meteoro 04",
        preco: 500.00
    },
    {
        id: 8,
        imagem:  "https://picsum.photos/200/193",
        descricao: "Satélite Usado",
        preco: 15000.00
    }
    

]
 
const listaProdutos = estoque.map((produto, indice) => {
    return (
        <div key = {indice}>
            <p>{produto.descricao}</p>
            <img src={produto.imagem} />
            <p>Preço: {produto.preco}</p>
        </div>
    )

})


class Produtos extends React.Component {

render () {

  return (
    
      <CardProduto>
        <p>{this.props.descricao}</p>
        <img src={this.props.imagem} />
          <p>Preço: {this.props.preco}</p>
          <BotaoAdicionar>Adicionar ao Carrinho</BotaoAdicionar>
        
      </CardProduto>
    
    
  )
}

}

export default Produtos;