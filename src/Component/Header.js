import React from 'react';
import styled from 'styled-components';
import logo from '../img/LABCOMMERCE.png'



const Topo = styled.div `
    width: 99.7%;
    height: 80px;
    border: 2px solid #210535;
    box-shadow: 1px 1px 1px;
    /* background-color:#C874B2; */
    background-color: #444;
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
        
              <img src={logo} alt="logo" />


          
          
      </Topo>
    
  )
}

}

export default Header;