import styled, { keyframes } from "styled-components";
import { IoIosArrowRoundDown } from "react-icons/io";
import theme from "../../../styles/theme";
import Link from "../../link";

export const HeroContainer = styled.div`
  height: 92vh;
  padding: 0 30px;
  top: 0;
  right: 0;
  left: 0;
  display: grid;
  position: relative;
  color: ${theme.colors.white};

  background-image: url("../../../image/hero-bg.png");
  background-size: cover;

  /* &::after {
    content: " ";
    height: 130px;
    width: 100%;
    position: absolute;
    bottom: 0;

    background-image: url("../../../image/v-element.svg");
    background-size: cover;
  } */
`;

export const HeroInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin: 0;
`;

export const Description = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  text-align: center;
`;

export const StyledLink = styled(Link)`
  margin-top: 30px;
  padding: 10px 20px;
  border: 1px solid ${theme.colors.yellow};
  font-weight: 600;
  transition: background-color 0.2s ease-in, color 0.2s ease-in;
  color: ${theme.colors.yellow};
  text-transform: uppercase;

  :hover {
    cursor: pointer;
    color: ${theme.colors.white};
    background-color: ${theme.colors.yellow};
  }
`;

export const ArrowDown = styled(IoIosArrowRoundDown)`
  height: 40px;
  width: 40px;

  &:hover {
    cursor: pointer;
  }
`;

const Bounce = keyframes`
  50% {
    transform: translateY(-15px);
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 40px;

  &:hover {
    animation: ${Bounce} 1.6s infinite cubic-bezier(0.445, 0.05, 0.55, 0.95);
  }
`;
