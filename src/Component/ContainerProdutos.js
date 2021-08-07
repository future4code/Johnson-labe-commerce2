import React from 'react';
import styled from 'styled-components';
import Produtos from './Produtos';


const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: #F5D5E0;
    padding-left: 26px;
    
  
`



class ContainerProdutos extends React.Component {

    render () {
    
      return (
          <Container>
              <Produtos />
          
    
          </Container>
        
      )
    }
    
    }
    
    export default ContainerProdutos;