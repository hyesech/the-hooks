import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
// import Sidebar from "./Sidebar/index";

const Navbar = () => {
  // const [isOpen, setIsOpen] = useState(false);

  // const toggle = () => {
  //   setIsOpen(!isOpen);
  // };

  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      {/* <IconContext.Provider value={{ color: "red" }}> */}
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            The Hooks
          </NavLogo>
          {/* <MobileIcon onClick={toggle}> */}
          {/* <FaBars />
          </MobileIcon> */}
          <NavMenu>
            <NavItem>
              {/* <NavLinks
                to="hyesech"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={0}
              >
                Hyesech
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="hooks"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={0}
              >
                Hooks?
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="hooklist"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={0}
              >
                Hook List
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="signup"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={0}
              >
                Sign Up
              </NavLinks> */}
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="hyesech">HYESECH</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
      {/* </IconContext.Provider> */}
      {/* <Sidebar isOpen={isOpen} toggle={toggle} /> */}
    </>
  );
};

export default Navbar;
