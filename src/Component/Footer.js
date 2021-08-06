import React from 'react';
import styled from 'styled-components';


const StyleFooter = styled.div `
    width: 100vw;
    height: 70px;
    border: 2px solid #6C9477;
    background-color:#BFDEA0;
    text-align: center;
    align-items: center;
    font-weight: bold;
    

`


class Footer extends React.Component {

render () {

  return (
      <StyleFooter>
          <p>Todos os direitos reservados</p>
      </StyleFooter>
    
  )
}

}

export default Footer;