import styled from "styled-components";
import { IoIosArrowUp } from "react-icons/io";
import Link from "../link";
import theme from "../../styles/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding: ${theme.containerPadding};
  background-color: ${theme.colors.blackDark};
  color: ${theme.colors.white};
  height: 250px;

  ${theme.device.desktop} {
    flex-direction: row;
  }
`;

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  order: 2;

  a {
    position: relative;
    transition: 0.2s ease-in-out;

    :not(:last-of-type) {
      margin-bottom: 10px;
    }

    :hover {
      cursor: pointer;
    }
  }

  ${theme.device.desktop} {
    order: 1;
    align-items: flex-start;
  }
`;

export const LogoContainer = styled.div`
  order: 1;
  ${theme.device.desktop} {
    order: 2;
  }
`;

export const Title = styled.h1`
  text-align: center;
  margin: 10px 0;
`;

export const Description = styled.div`
  text-align: center;
`;

export const ButtonTop = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  padding: 10px;
  border-radius: 8px;
  background-color: ${theme.colors.blackLight};
  cursor: pointer;
  transition: transform 150ms ease-in-out;
  order: 3;

  :hover {
    transform: translateY(-10%);
  }

  ${theme.device.mobile} {
    display: none;
  }
`;

export const ArrowUp = styled(IoIosArrowUp)`
  color: ${theme.colors.white};
  width: 20px;
  height: 20px;
`;

export const DevelopedBy = styled.div`
  position: absolute;
  bottom: 20px;
  font-size: 0.6rem;
  right: 15%;

  ${theme.device.mobile} {
    right: unset;
    left: 50%;
    transform: translateX(-50%);
  }
`;
