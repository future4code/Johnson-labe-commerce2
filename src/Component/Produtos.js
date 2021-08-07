import React from 'react';
import styled from 'styled-components';


const CardProduto = styled.div `
    width: 180px;
    height: 220px;
    margin-top: 15px;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-items: center;
    gap: 12px;
    padding-bottom: 20px;

    

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
        {listaProdutos} 
      </CardProduto>
    
    
  )
}

}

export default Produtos;