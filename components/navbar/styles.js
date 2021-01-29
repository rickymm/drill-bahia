import styled from "styled-components";
import Link from "../link";
import theme from "../../styles/theme";

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  background: ${theme.colors.white};
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  border-bottom: 1px solid ${theme.colors.grey}20;

  ${theme.device.desktop} {
    transition: 0.8s all ease;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  height: 100%;
  width: 100%;
  max-width: 1100px;
  z-index: 1;
`;

export const NavLogo = styled(Link)`
  justify-self: flex-start;
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  ${theme.device.mobile} {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  font-size: 0.9rem;
  cursor: pointer;

  &.active {
    border-bottom: 2px solid ${theme.colors.yellow};
  }
`;

export const MobileIcon = styled.div`
  display: none;
  color: ${theme.colors.grey};

  ${theme.device.mobile} {
    display: block;
    position: absolute;
    top: 8px;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.6rem;
    cursor: pointer;
  }
`;
