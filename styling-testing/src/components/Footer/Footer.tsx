import React from 'react';
import { Container, FooterNav, FooterNavItem } from './styles';

const Footer = () => {
    return (
        <>
            <Container>
                <FooterNav>
                    <FooterNavItem> {'Terms & Conditions'}</FooterNavItem>
                    <FooterNavItem> Privacy Notice </FooterNavItem>
                </FooterNav>
            </Container>
        </>
    );
};

export default Footer;