import React from "react";
import { Container, Description, Info, Title } from "./styles";

const infosItems = [
  {
    title: "MND",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, cum.",
    align: "left",
  },
  {
    title: "Qualidade",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, cum.",
    align: "center",
  },
  {
    title: "Preço justo",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, cum.",
    align: "right",
  },
];

const Infos = () => {
  return (
    <Container>
      {infosItems.map(({ title, description, align }, index) => (
        <Info key={index} align={align}>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </Info>
      ))}
    </Container>
  );
};

export default Infos;
