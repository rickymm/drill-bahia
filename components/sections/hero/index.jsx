import React from "react";
import {
  HeroContainer,
  HeroInfo,
  Title,
  Description,
  StyledLink,
  IconContainer,
  ArrowDown,
} from "./styles";
import Link from "../../link";

const Hero = () => {
  return (
    <HeroContainer>
      <HeroInfo>
        <Title>Drill Bahia</Title>
        <Description>Empresa especializada em perfuraçōes MND</Description>
        <StyledLink to="contact">Fale conosco</StyledLink>
      </HeroInfo>
      <IconContainer>
        <Link to="about">
          <ArrowDown />
        </Link>
      </IconContainer>
    </HeroContainer>
  );
};

export default Hero;
