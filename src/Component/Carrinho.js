import React from 'react';
import styled from 'styled-components';

const ContainerCarrinho = styled.div `
    width: 20%;
    height: 75vh;
    background-color: #DEC6A0;
 

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