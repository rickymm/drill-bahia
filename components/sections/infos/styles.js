import styled from "styled-components";
import theme from "../../../styles/theme";

export const Container = styled.div`
  display: flex;
  padding: ${theme.containerPadding};
  background-color: ${theme.colors.greyLight};

  ${theme.device.mobile} {
    flex-direction: column;
    padding: 20px;
  }
`;

export const Info = styled.div`
  padding: 10px 20px;
  text-align: ${({ align }) => align};

  &:not(:last-of-type) {
    margin-right: 20px;
    border-bottom: none;
    border-right: 1px solid ${theme.colors.grey}10;
  }

  ${theme.device.mobile} {
    text-align: center;
    &:not(:last-of-type) {
      border-bottom: 1px solid ${theme.colors.grey}10;
      border-right: none;
      margin-bottom: 20px;
    }
  }
`;

export const Title = styled.h2`
  margin: 0px;
`;

export const Description = styled.p``;
