import React from 'react';
import styled from 'styled-components';

const ContainerFiltros = styled.div `
    width: 20vw;
    height: 75vh;
    background-color: darkgreen;
    border: 1px solid black;
    
`
const InputFiltros = styled.input `
    padding: 5px;
    margin: 5px;

`

class Filtros extends React.Component {

render () {

  return (
    <ContainerFiltros>
        <InputFiltros />
        <InputFiltros />
        <InputFiltros />

      
    </ContainerFiltros>
  )
}

}

export default Filtros;