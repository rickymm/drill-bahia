import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavLink,
  MobileIcon,
} from "./styles";
import links from "./links";
import MobileSidebar from "../mobileSidebar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <MobileSidebar isOpen={isOpen} toggle={toggle} />
      <Nav>
        <NavContainer>
          <NavLogo to="/">
            <img
              className="hide-mobile"
              src="./image/drill-bahia.png"
              alt="Drill Bahia"
              height="200px"
              width="250px"
            />
            <img
              className="hide-desktop"
              src="./image/favicon.ico"
              alt="Drill Bahia"
              height="50px"
              width="50px"
            />
          </NavLogo>
          <NavMenu>
            {links.map(({ to, title }, index) => (
              <NavItem key={index}>
                <NavLink to={to} spy={true} smooth={true} duration={500}>
                  {title}
                </NavLink>
              </NavItem>
            ))}
          </NavMenu>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
        </NavContainer>
      </Nav>
    </>
  );
};

export default Navbar;
