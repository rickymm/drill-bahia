import React from "react";
import Link from "../link";
import links from "../navbar/links";
import {
  Container,
  Links,
  LogoContainer,
  Title,
  Description,
  ButtonTop,
  ArrowUp,
  DevelopedBy,
} from "./styles";

const Footer = () => {
  return (
    <Container>
      <Links>
        {links.map(({ to, title }, index) => (
          <Link key={index} to={to}>
            {title}
          </Link>
        ))}
      </Links>
      <LogoContainer>
        <Title>Drill Bahia</Title>
        <Description>CNPJ: 15.943.257/0001-01</Description>
      </LogoContainer>
      <ButtonTop to="hero">
        <ArrowUp />
      </ButtonTop>
      <DevelopedBy>© Developed by Ricky MM</DevelopedBy>
    </Container>
  );
};

export default Footer;
