import React from "react";
import {
  SidebarContainer,
  IconContainer,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
} from "./styles";
import links from "../navbar/links";

const MobileSidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <IconContainer onClick={toggle}>
        <CloseIcon />
      </IconContainer>
      <div>
        <SidebarMenu>
          {links.map(({ to, title }, index) => (
            <SidebarLink
              key={index}
              to={to}
              onClick={toggle}
              spy={true}
              smooth={true}
              duration={500}
            >
              {title}
            </SidebarLink>
          ))}
        </SidebarMenu>
      </div>
    </SidebarContainer>
  );
};

export default MobileSidebar;
