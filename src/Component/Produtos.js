import React from 'react';
import styled from 'styled-components';



const CardProduto = styled.div `


    width: 180px;
    border: 3px solid #430D4B;
    border-radius: 10px;
    box-shadow: 1px 2px 4px rgba(0, 0, 0,.8);
    background-color: #fff;
    text-align: center;
    
      

 
    p{
        font-size: 12px;
        text-align: center;
        font-weight: bold;
        

    }
    
    img{
        margin: auto;
        width: 150px;
        border: 1px solid #430D4B;
        box-shadow: 2px 2px 2px 1px rgba(0, 0, 0,.6)
    } 

`

const ProdutosGrid = styled.div`

    margin-top: 16px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 20px;
    background-color: #F5D5E0;  
    margin-bottom: 16px;

    

`


const BotaoAdicionar = styled.button `
    text-align: center;
    color: black;
    background-color: #b09db9;
    width: 150px;
    border-radius: 25px;
    margin-bottom: 8px;
`
 

const estoque = [
    {
        id: 1,
        imagem: "/img/devEsp.png",
        descricao: "Dev Master Senior",
        preco: 750.00
    },
    {
        id: 2,
        imagem:  "/img/fogP01.png",
        descricao: "Acelerador de Passos",
        preco: 1000.00
    },
    {
        id: 3,
        imagem:  "/img/img05.png",
        descricao: "Buscador de Satélite",
        preco: 450.00
    },
    {
        id: 4,
        imagem:  "/img/met01.png",
        descricao: "Lixo espacial 1993",
        preco: 130.00
    },
    {
        id: 5,
        imagem:  "/img/met02.png",
        descricao: "Meteoro previsto para 2025",
        preco: 3000.00
    },
    {
        id: 6,
        imagem:  "/img/met03.png",
        descricao: "Meteoro previsto para 2030",
        preco: 4500.00
    },
    {
        id: 7,
        imagem:  "/img/met04.png",
        descricao: "Kripton - 1850 D.C.",
        preco: 500.00
    },
    {
        id: 8,
        imagem:  "/img/taxi01.png",
        descricao: "Quadro decorativo",
        preco: 150.00
    },
    {
        id: 9,
        imagem:  "/img/taxi02.png",
        descricao: "Quadro decorativo",
        preco: 150.00
    },
    {
        id: 10,
        imagem:  "/img/travel.png",
        descricao: "Passagens para Marte",
        preco: 15000.00
    },{
        id: 11,
        imagem:  "/img/trufaEsp.png",
        descricao: "Trufas Espaciais",
        preco: 80.00
    },{
        id: 12,
        imagem:  "/img/sat01.png",
        descricao: "Satélite semi novo",
        preco: 250000.00
    }
    
    

]
 
const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: #F5D5E0;
    padding-left: 26px;
    
  
`




class Produtos extends React.Component {
    
    listaProdutos = () => estoque.map((produto, indice) => {
        return (
            <CardProduto key="CardProduto">
                <div key={indice}>
                    <p>{produto.descricao}</p>
                    <img src={produto.imagem} alt={produto.descricao}/>
                    <p>Preço: {produto.preco}</p>
                    <BotaoAdicionar onClick={() => this.props.onClickProduto(produto)}>Adicionar ao Carrinho</BotaoAdicionar>
                </div>
            </CardProduto>
        )
        
    })
    
    render() {
        
        return (
            <Container>
                <ProdutosGrid>


                    {this.listaProdutos()}


                </ProdutosGrid>
            </Container>


        )
    }

}

export default Produtos;