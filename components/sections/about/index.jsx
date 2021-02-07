import React from "react";
import {
  Container,
  ImageContainer,
  Image,
  DescriptionContainer,
  Title,
  Description,
} from "./styles";

const About = () => {
  return (
    <Container>
      <ImageContainer>
        <Image src="./image/construction-workers.jpg" alt="Drill Bahia foto" />
      </ImageContainer>
      <DescriptionContainer>
        <Title>Sobre nós</Title>
        <Description>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur
          facilis pariatur animi, nemo eveniet est aliquam hic cumque ea,
          placeat ratione sit voluptatem id ullam. Provident praesentium
          repudiandae quod sed.
          <span>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consectetur facilis pariatur animi, nemo eveniet est aliquam hic
            cumque ea, placeat ratione sit voluptatem id ullam. Provident
            praesentium repudiandae quod sed.
          </span>
        </Description>
      </DescriptionContainer>
    </Container>
  );
};

export default About;
