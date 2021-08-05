import React from 'react';
import styled from 'styled-components';

const ContainerCarrinho = styled.div `
    width: 20vw;
    height: 75vh;
    background-color: #f7f7f7;
    border: 1px solid black;

`


class Carrinho extends React.Component {

render () {

  return (
    <ContainerCarrinho>
        <div>
            <p> 3x Produto</p>
        </div>
        <div>
            <p> 2x Produto</p>
        </div>
        <div>
            <p>2x Produto</p>
        </div>
        <div>
            <p>2x Produto</p>
        </div>


        <button>Limpar Carrinho</button>
        <button>Finalizar Compra</button>
      
    </ContainerCarrinho>
  )
}

}

export default Carrinho;