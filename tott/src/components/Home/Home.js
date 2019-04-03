import React from 'react';
import styled from 'styled-components';
import logo from '../../Images/Galacticknight.png';
import space from '../../Images/HDR2382_1024x1024.jpg';

class Home extends React.Component{
    
    render(){
        return (
            <div>
                <UVP>
                    <img src={logo} alt=""/>
                </UVP>
                <CardCont>
                    <div></div>
                    <div></div>
                    <div></div>
                </CardCont>
            </div>
            
        )
    }
}

const UVP = styled.div`
    background-image: url(${space});
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
`;

const CardCont = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: black;
    padding: 50px 15%;
    div{
        background-color: rgba(97, 90, 122, .5);
        height: 400px;
        width: 300px;
        border-radius: 5px;
    }
`;

export default Home;