import React from 'react';
import styled from 'styled-components';


const Topo = styled.div `
    width: 100vw;
    height: 70px;
    border: 1px solid black;
    background-color: blue;
    

`


class Header extends React.Component {

render () {

  return (
      <Topo>
          <p>Bem vindo a loja</p>
      </Topo>
    
  )
}

}

export default Header;