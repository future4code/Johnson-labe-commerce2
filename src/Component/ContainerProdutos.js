import React from 'react';
import styled from 'styled-components';
import Produtos from './Produtos';
import devEsp from  '../img/devEsp.png';
import aceleradorDePasso from '../img/fogP01.png';
import met01 from '../img/met01.png'
import met02 from '../img/met02.png'
import met03 from '../img/met03.png'
import met04 from '../img/met04.png'
import sat01 from '../img/sat01.png'
import taxi01 from '../img/taxi01.png'
import taxi02 from '../img/taxi02.png'
import travel from '../img/travel.png'
import trufa from  '../img/trufaEsp.png'
import img05 from '../img/img05.png'

const Container = styled.div`
    width: 60%;
    height: 100%;
    background-color: #98C6A0;
    
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-items: center;
    gap: 4px 12px;
    padding-bottom: 20px;

    
  
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