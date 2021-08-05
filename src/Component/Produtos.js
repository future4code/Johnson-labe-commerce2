import React from 'react';
import styled from 'styled-components';


const CardProduto = styled.div `
    width: 140px;
    height: 160px;
    border: 1px solid black;
    background-color: white;
    margin-top: 15px;

`


class Produtos extends React.Component {

render () {

  return (
      <CardProduto>
          <p>imagem</p>
          <p>Descrição</p>
          <p>Preço</p>
      </CardProduto>
    
  )
}

}

export default Produtos;