import React from 'react';
import styled from 'styled-components';


const ContainerCarrinho = styled.div `
    width: 20%;
    background-color: #F5D5E0;
    display: flex;
    flex-direction: column;
    align-items: center;
    

    h3{
        font-size: 1em;
        text-align: center;
        background-color: #b09db9;
        padding: 5px 25px;
        border-radius: 25px;
        border: 1px solid black;
        margin-top: 35px;
                

    }
 

`
const ContainerSelecao = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    `
const ContainerBotao = styled.div`
    display: flex;
    flex-direction: column;
    
    `
    const BotaoCarrinho = styled.button `
        text-align: center;
        color: black;
        background-color: #b09db9;
        width: 150px;
        border-radius: 25px;
        padding: 5px;
        margin: 10px;
    `
class Carrinho extends React.Component {

render () {

  return (
      <ContainerCarrinho>
          <h3> Carrinho</h3>
          <ContainerSelecao>
              {this.props.conteudo.map((produto) => (
               <div>
                   <div> {produto.count} : {produto.descricao} <button onClick={() => this.props.onClickDelete(produto.id)}>X</button> </div>
                   
               </div>   
              ))}
          </ContainerSelecao>

        <ContainerBotao>
        <BotaoCarrinho>Limpar Carrinho</BotaoCarrinho>
        <BotaoCarrinho >Finalizar Compra</BotaoCarrinho>
        </ContainerBotao>
      
    </ContainerCarrinho>
  )
}

}

export default Carrinho;