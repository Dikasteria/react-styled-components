import React, { useState, useEffect } from 'react';
import { Nav, NavbarContainer, NavLogo, NavIcon, MobileIcon } from "./Navbar.style";
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

const Navbar = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);
    }

    return (
        <>
            <IconContext.Provider value={{color: "#fff"}}>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">
                        <NavIcon />
                        Ultra
                    </NavLogo>
                    <MobileIcon
                    onClick={() => handleClick()}
                    >
                        {click ? <FaTimes /> : <FaBars />}
                    </MobileIcon>
                </NavbarContainer>
            </Nav>
            </IconContext.Provider>
        </>
    );
};

export default Navbar;