import React from "react";
import { Container, Description, Info, Title } from "./styles";

const infosItems = [
  {
    title: "MND",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, cum.",
  },
  {
    title: "Qualidade",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, cum.",
  },
  {
    title: "Preço justo",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, cum.",
  },
];

const Infos = () => {
  return (
    <Container>
      {infosItems.map(({ title, description }, index) => (
        <Info key={index}>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </Info>
      ))}
    </Container>
  );
};

export default Infos;
