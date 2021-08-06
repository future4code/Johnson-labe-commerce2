import React from 'react';
import styled from 'styled-components';
import logo from '../img/LABCOMMERCE.png'



const Topo = styled.div `
    width: 100vw;
    height: 70px;
    border: 2px solid #6C9477;
    box-shadow: 1px 1px 1px;
    background-color:#BFDEA0;
    overflow: auto;
    
    
    
    
    img{
      
      height: 60px;
      padding: 8px;
    }

`



class Header extends React.Component {

render () {

  return (
      <Topo>
        
              <img src={logo} />


          
          
      </Topo>
    
  )
}

}

export default Header;