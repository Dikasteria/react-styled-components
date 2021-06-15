import React from 'react';
import { Container, Logo, Menu, MenuItem } from './styles';

const NavBar = () => {
    return (
        <>
            <Container>
                <Logo>Logo</Logo>
                <Menu>
                    <MenuItem>About</MenuItem>
                    <MenuItem>Contact</MenuItem>
                </Menu>
            </Container>
        </>
    );
};

export default NavBar;