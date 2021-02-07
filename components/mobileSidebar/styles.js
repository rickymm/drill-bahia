import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { FaTimes } from "react-icons/fa";
import theme from "../../styles/theme";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 20;
  width: 100%;
  height: 100%;
  background-color: ${theme.colors.white};

  display: grid;
  align-items: center;
  right: 0;
  transition: 0.4s ease-in-out;
  right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  box-shadow: -7px 1px 10px #0000000d;
`;

export const IconContainer = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 1.6rem;
  cursor: pointer;
  outline: none;
`;

export const CloseIcon = styled(FaTimes)`
  color: ${theme.colors.grey};
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 80px);
  text-align: center;
  padding: 0;
`;

export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  transition: 0.2s ease-in-out;
  color: ${theme.colors.grey};
  cursor: pointer;

  ::after {
    content: " ";
    background-color: ${theme.colors.yellow};
    height: 2px;
    width: 0px;
    position: absolute;
    margin-top: 40px;
    transition: width 0.2s ease-in;
  }

  &:hover {
    ::after {
      width: 30px;
    }
  }
`;
