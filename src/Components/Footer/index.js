import React from "react";
// import { animateScroll as scroll } from "react-scroll";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";

const Footer = () => {
  // const toggleHome = () => {
  //   scroll.scrollToTop();
  // };
  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>About Us</FooterLinkTitle>
                <FooterLink to="/">How It Works</FooterLink>
                <FooterLink to="/">Testimonials</FooterLink>
                <FooterLink to="/">Careers</FooterLink>
                <FooterLink to="/">Investors</FooterLink>
                <FooterLink to="/">Terms of Services</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Hooks</FooterLinkTitle>
              <FooterLink to="/usetitle">useTitle</FooterLink>
              <FooterLink to="/useref">useRef</FooterLink>
              <FooterLink to="/usememo">useMemo</FooterLink>
              <FooterLink to="/">09</FooterLink>
            </FooterLinkItems>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>Social Medias</FooterLinkTitle>
                <FooterLink to="/">Twitter</FooterLink>
                <FooterLink to="/">Instagram</FooterLink>
                <FooterLink to="/">Facebook</FooterLink>
                <FooterLink to="/">Youtube</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
          </FooterLinksContainer>
          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo to="/">hyesech</SocialLogo>
              <WebsiteRights>
                hyesech © {new Date().getFullYear()} All rights reserved.
              </WebsiteRights>
              <SocialIcons>
                <SocialIconLink
                  href="www.twitter.com/hyesech"
                  target="_blank"
                  aria-label="Twitter"
                >
                  <FaTwitter />
                </SocialIconLink>
                <SocialIconLink to="/" target="_blank" aria-label="Instagram">
                  <FaInstagram />
                </SocialIconLink>
                <SocialIconLink to="/" target="_blank" aria-label="Facebook">
                  <FaFacebook />
                </SocialIconLink>
                <SocialIconLink to="/" target="_blank" aria-label="Youtube">
                  <FaYoutube />
                </SocialIconLink>
                <SocialIconLink to="/" target="_blank" aria-label="Linkedin">
                  <FaLinkedin />
                </SocialIconLink>
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    </>
  );
};

export default Footer;
