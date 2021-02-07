import styled from "styled-components";
import theme from "../../../styles/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${theme.containerPadding};
  background-color: ${theme.colors.greyLight};
`;

export const Title = styled.h2``;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  ${theme.device.desktop} {
    flex-direction: row;
  }
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 40px;
  padding: 20px;
  width: 140px;
  height: 140px;
  border-radius: 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.06);
  background-color: ${theme.colors.white};
`;
