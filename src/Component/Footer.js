import React from 'react';
import styled from 'styled-components';


const StyleFooter = styled.div `
    width: 99.7%;
    height: 70px;
    border: 2px solid #210535;
    background-color:#C874B2;
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