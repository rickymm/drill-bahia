import React from "react";
import {
  HeroContainer,
  HeroInfo,
  Title,
  Description,
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
