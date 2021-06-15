import React from 'react';
import { FooterContainer, FooterSubscription, FooterSubHeading, FooterSubText, Form, FormInput, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, SocialIcon, WebsiteRights, SocialIcons, SocialIconLink } from "./Footer.style";
import { Button } from "../../../globalStyles";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <>
           <FooterContainer>
                <FooterSubscription>
                    <FooterSubHeading>
                        Join our exclusive membership to receive the latest news and trends
                    </FooterSubHeading>
                    <FooterSubText>
                        You can unsubscribe at any time
                    </FooterSubText>
                    <Form>
                        <FormInput name="email" type="email" placeholder="Your Email" />
                            <Button fontBig >
                                Subscribe
                            </Button>
                    </Form>
                </FooterSubscription>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>
                                About Us
                            </FooterLinkTitle>
                            <FooterLink to="/sign-up"></FooterLink>
                            <FooterLink to="/testimonials">Testimonials</FooterLink>
                            <FooterLink to="/careers">Careers</FooterLink>
                            <FooterLink to="/investors">Investors</FooterLink>
                            <FooterLink to="/terms">Terms of Service</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>
                                Contact Us
                            </FooterLinkTitle>
                            <FooterLink to="/sign-up"></FooterLink>
                            <FooterLink to="/testimonials">Contact</FooterLink>
                            <FooterLink to="/careers">Support</FooterLink>
                            <FooterLink to="/investors">Destinations</FooterLink>
                            <FooterLink to="/terms">Sponsorships</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>
                                Videos
                            </FooterLinkTitle>
                            <FooterLink to="/sign-up"></FooterLink>
                            <FooterLink to="/testimonials">Submit Video</FooterLink>
                            <FooterLink to="/careers">Ambassadors</FooterLink>
                            <FooterLink to="/investors">Agency</FooterLink>
                            <FooterLink to="/terms">Influencer</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>
                                Social Media
                            </FooterLinkTitle>
                            <FooterLink to="/sign-up"></FooterLink>
                            <FooterLink to="/testimonials">Instagram</FooterLink>
                            <FooterLink to="/careers">Facebook</FooterLink>
                            <FooterLink to="/investors">Youtube</FooterLink>
                            <FooterLink to="/terms">Twitter</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/">
                            <SocialIcon />
                            Ultra
                        </SocialLogo>   
                        <WebsiteRights>Ultra 2021</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink aria-label="Facebook" href="/" target="_blank">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink aria-label="Instagram" href="/" target="_blank">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink aria-label="Youtube" href="/" target="_blank">
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink aria-label="Twitter" href="/" target="_blank">
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink aria-label="LinkedIn" href="/" target="_blank">
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterContainer> 
        </>
    );
};

export default Footer;