import React from "react";
import { Container, Title, CardsContainer, Card } from "./styles";

const partnersList = [
  {
    src: "./image/bahia-gas.png",
    alt: "Bahia Gás",
  },
  {
    src: "./image/bahia-gas.png",
    alt: "Bahia Gás",
  },
  {
    src: "./image/bahia-gas.png",
    alt: "Bahia Gás",
  },
];

const Partners = () => {
  return (
    <Container>
      <Title>Parceiros</Title>
      <CardsContainer>
        {partnersList.map(({ src, alt }, index) => (
          <Card key={index}>
            <img src={src} alt={alt} height="100%" width="100%" />
          </Card>
        ))}
      </CardsContainer>
    </Container>
  );
};

export default Partners;
