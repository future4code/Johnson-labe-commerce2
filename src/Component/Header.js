import React from 'react';
import styled from 'styled-components';
import logo from '../img/LABCOMMERCE.png';
import img from '../img/Banner.jpg'



const Topo = styled.div`
    width: 100%;
    height: 90px;
    border: 2px solid #7B337D;
    box-shadow: 1px 1px 1px;
    background-color:#444;
    overflow: auto;
    background-image: url(${img});
    
    
    
    
    
    img{
      
      height: 85px;
      padding-left: 40px;
      background-color:rgba(1,1,1,.6);
      
    }

`



class Header extends React.Component {

  render() {

    return (
      <Topo>

        <img src={logo} alt="logo" />




      </Topo>

    )
  }

}

export default Header;