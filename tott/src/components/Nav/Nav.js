import React from 'react';
import styled from 'styled-components';

class Nav extends React.Component{
    render(){
        return (
            <NavBar>
                <h2>Tott</h2>
                <Links>
                    <h4>About</h4>
                    <h4>Blog</h4>
                    <h4>Merch</h4>
                    <h4>Contact</h4>
                </Links>
            </NavBar>
        )
    }
}


const NavBar = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 50px 0 30px;
    width: 95.8%;
    background-color: white;
    color: black;
`;

const Links = styled.div`
    display: flex;
    width: 20%;
    justify-content: space-between;
    padding-right: 5%;
`;

export default Nav;