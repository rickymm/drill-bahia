import styled from "styled-components";
import theme from "../../../styles/theme";

export const Container = styled.div`
  padding: 60px;
  display: flex;

  ${theme.device.mobile} {
    flex-direction: column;
    padding: 20px;
  }
`;

export const ImageContainer = styled.div`
  max-width: 700px;
  ${theme.device.mobile} {
    margin-bottom: 20px;
  }
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
`;

export const DescriptionContainer = styled.div`
  padding-left: 20px;

  ${theme.device.mobile} {
    padding: 0 20px;
  }
`;

export const Title = styled.h1`
  margin: 0;
`;

export const Description = styled.p`
  div {
    margin-top: 10px;
  }
`;
