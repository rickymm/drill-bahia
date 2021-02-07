import styled from "styled-components";
import theme from "../../../styles/theme";

export const Container = styled.div`
  padding: ${theme.containerPadding};
  display: flex;

  ${theme.device.mobile} {
    flex-direction: column;
    padding: 20px;
  }
`;

export const ImageContainer = styled.div`
  width: 50%;
  max-width: 750px;
  ${theme.device.mobile} {
    width: 100%;
    margin-bottom: 20px;
  }
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
`;

export const DescriptionContainer = styled.div`
  width: 50%;
  padding-left: 20px;

  ${theme.device.mobile} {
    width: 100%;
    padding: 0;
  }
`;

export const Title = styled.h1`
  margin: 0;
`;

export const Description = styled.p`
  text-align: justify;

  div {
    margin-top: 10px;
  }
`;
