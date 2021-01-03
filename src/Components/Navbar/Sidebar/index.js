import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarLink,
  SidebarMenu,
  SidebarWrap,
  SidebarRoute,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="hyesech" onClick={toggle}>
            HYESECH
          </SidebarLink>
          <SidebarLink to="hooks" onClick={toggle}>
            Hooks?
          </SidebarLink>
          <SidebarLink to="hooklist" onClick={toggle}>
            Hook List
          </SidebarLink>
          <SidebarLink to="signup" onClick={toggle}>
            Sign Up
          </SidebarLink>
        </SidebarMenu>
        <SidebarWrap>
          <SidebarRoute to="/">Sign In</SidebarRoute>
        </SidebarWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
