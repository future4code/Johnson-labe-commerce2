import React from 'react';
import styled from 'styled-components';


const StyleFooter = styled.div `
    width: 100vw;
    height: 70px;
    border: 1px solid black;
    background-color: yellow;
    

`


class Footer extends React.Component {

render () {

  return (
      <StyleFooter>
          <p>Obrigado</p>
      </StyleFooter>
    
  )
}

}

export default Footer;