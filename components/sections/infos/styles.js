import styled from "styled-components";
import theme from "../../../styles/theme";

export const Container = styled.div`
  display: flex;
  padding: 30px 50px;
  background-color: #fafafa;

  ${theme.device.mobile} {
    flex-direction: column;
    padding: 20px;
  }
`;

export const Info = styled.div`
  padding: 10px 20px;

  &:not(:last-of-type) {
    border-bottom: 1px solid ${theme.colors.grey}10;
    margin-bottom: 20px;
  }

  ${theme.device.desktop} {
    &:not(:last-of-type) {
      margin-bottom: 0px;
      margin-right: 20px;
      border-bottom: none;
      border-right: 1px solid ${theme.colors.grey}10;
    }
  }
`;

export const Title = styled.h2`
  margin: 0px;
`;

export const Description = styled.p``;
