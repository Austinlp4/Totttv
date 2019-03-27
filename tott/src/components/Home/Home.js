import React from 'react';
import styled from 'styled-components';
import logo from '../../Images/Galacticknight.png';

class Home extends React.Component{
    
    render(){
        return (
            <UVP>
                <img src={logo} alt=""/>
            </UVP>
        )
    }
}

const UVP = styled.div`
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
`;

export default Home;