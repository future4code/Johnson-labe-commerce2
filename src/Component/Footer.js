import React from 'react';
import styled from 'styled-components';


const StyleFooter = styled.div`
    width: 100%;
    height: 80px;
    border: 2px solid #210535;
    background-color: #7B337D;
    text-align: center;
    align-items: center;
    font-weight: bold;
    color: #F5D5E0;
    font-size: 16px;
    
    

`


class Footer extends React.Component {

    render() {

        return (
            <StyleFooter>
                <p>Todos os direitos reservados &copy; </p>
                <p>João Ferrão, Hernan Barrientos, Fernanda Bittencourt</p>
            </StyleFooter>

        )
    }

}

export default Footer;