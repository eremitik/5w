import React from 'react';
import styled from 'styled-components';
import { HamburgerMenu } from '../hamburgerMenu';

const NavbarContainer = styled.div`
    width: 100%;
    height: 55px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0rem;
`;

const NavbarLogin = styled.div`
    text-align: right;
    padding-right: 15px;
    width: 100%;
    font-family: "Homemade Apple"; 

    a{
      text-decoration: none;
      color: white;
    }
`

export function Navbar(props) {
    return (
        <NavbarContainer>
            <HamburgerMenu />
          <NavbarLogin>
            <a href="">Sign in.</a>
          </NavbarLogin>
        </NavbarContainer>
    )
}
