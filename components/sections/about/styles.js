import styled from "styled-components";
import theme from "../../../styles/theme";

export const Container = styled.div`
  padding: 60px;
  display: grid;
  grid-template-areas: "image description";

  ${theme.device.mobile} {
    display: flex;
    flex-direction: column;
  }
`;

export const ImageContainer = styled.div`
  grid-area: "image";
  ${theme.device.mobile} {
    margin-bottom: 20px;
  }
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
`;

export const DescriptionContainer = styled.div`
  grid-area: "description";
  padding-left: 20px;
`;

export const Title = styled.h1`
  margin: 0;
`;

export const Description = styled.p`
  div {
    margin-top: 10px;
  }
`;
