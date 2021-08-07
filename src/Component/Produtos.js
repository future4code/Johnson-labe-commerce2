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