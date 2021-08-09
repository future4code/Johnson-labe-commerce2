import React from 'react';
import styled from 'styled-components';


const ContainerCarrinho = styled.div`
    width: 20%;
    background-color: #430D4B;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-left: 1px solid #7B337D;
    justify-content: space-between;
    padding: 0 12px;
    `

const TituloCarrinho = styled.div`
  margin-top: 24px;
  width: 100%;
  text-align: center;
  border-bottom: 2px solid #7B337D;
  letter-spacing:2px;
  font-weight: bold;
  padding-bottom: 16px;
  color: #F5D5E0;
                

  `
 


const ContainerSelecao = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    `


const BotaoCarrinho = styled.button`
        text-align: center;
        color: #430D4B;
        background-color: #b09db9;
        width: 150px;
        border-radius: 25px;
        padding: 5px;
        margin-bottom: 200px;
        border:1px solid #210535;
        cursor: pointer;
    `
const ListaProdutos = styled.div`
        background-color: #210535; 
        color:#F5D5E0;
        border:1px solid #F5D5E0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin:8px;
        width: 99%;
        font-size: 16px;

    `
const Produto = styled.div`
        display:flex;
        justify-content: space-between;
        align-items: center;
    `
const BotaoExcluir = styled.button`
        background-color: #F5D5E0;
        color: #210535;
        border-radius: 50%;
        border:none;
        cursor: pointer;
    
    `
const Preco = styled.div`
display:flex;
justify-content: space-evenly;
align-items: center;
`
const Total = styled.div`
    margin-top: 24px;
  width: 100%;
  text-align: center;
  border-bottom: 2px solid #7B337D;
  border-top: 2px solid #7B337D;
  letter-spacing:2px;
  font-weight: bold;
  padding:16px 0;
  color: #F5D5E0;
`

class Carrinho extends React.Component {

    render() {

        return (
            <ContainerCarrinho>
                <TituloCarrinho> Carrinho</TituloCarrinho>
                <ContainerSelecao>
                    {this.props.conteudo.map((produto) => (
                        <ListaProdutos>
                            <div>
                                
                                <Produto>{produto.count} X {produto.descricao} </Produto>
                                <Preco>R$ {produto.preco} <BotaoExcluir onClick={() => this.props.onClickDelete(produto.id)}>X</BotaoExcluir></Preco> 
                            </div>

                        </ListaProdutos>
                    ))}
                </ContainerSelecao>

                        <Total>Total: R$ {this.props.valorCarrinho()},00</Total>
                <BotaoCarrinho >Finalizar Compra</BotaoCarrinho>


            </ContainerCarrinho>
        )
    }

}

export default Carrinho;