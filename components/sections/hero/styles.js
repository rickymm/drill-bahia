import styled, { keyframes } from "styled-components";
import { FaArrowDown } from "react-icons/fa";
import theme from "../../../styles/theme";

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
`;

export const HeroInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

export const Title = styled.h1`
  font-weight: 600;
`;

export const Description = styled.div`
  text-align: center;
`;

export const ArrowDown = styled(FaArrowDown)`
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
  padding-bottom: 20px;

  &:hover {
    animation: ${Bounce} 1.6s infinite cubic-bezier(0.445, 0.05, 0.55, 0.95);
  }
`;
