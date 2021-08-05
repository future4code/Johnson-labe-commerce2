import React from 'react';
import styled from 'styled-components';
import Produtos from './Produtos';


const Container = styled.div`
    width: 60vh;
    height: 90%;
    background-color: rgb(77,77,77);
    border: 1px solid black;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    
    

`


class ContainerProdutos extends React.Component {

render () {

  return (
      <Container>
          <Produtos/>
          <Produtos/>
          <Produtos/>
          <Produtos/>
          <Produtos/>
          <Produtos/>
          <Produtos/>
          <Produtos/>
          <Produtos/>
          <Produtos/>
          <Produtos/>
          <Produtos/>


      </Container>
    
  )
}

}

export default ContainerProdutos;