import React from 'react';
import styled from 'styled-components';


const CardProduto = styled.div `
    width: 180px;
    height: 220px;
    border: 3px solid #6C9477;
    border-radius: 10px;
    box-shadow: 1px 2px 4px;
    background-color: #fff;
    margin-top: 15px;

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
    }

`

 


class Produtos extends React.Component {

render () {

  return (
      <CardProduto>
        <p>{this.props.descricao}</p>
        <img src={this.props.imagem} />
          <p>Preço: {this.props.preco}</p>
        
          
      </CardProduto>
    
  )
}

}

export default Produtos;