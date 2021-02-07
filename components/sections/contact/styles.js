import styled from "styled-components";
import { FiMapPin } from "react-icons/fi";
import {
  AiOutlinePhone,
  AiOutlineWhatsApp,
  AiOutlineMail,
} from "react-icons/ai";
import theme from "../../../styles/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${theme.containerPadding};
  padding-bottom: 10%;
`;

export const Title = styled.h2`
  margin-bottom: 40px;
`;

export const ItemsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  ${theme.device.mobile} {
    flex-direction: column;
    align-items: center;
    justify-content: center;

    div:not(:last-of-type) {
      margin-bottom: 20px;
    }
  }
`;

export const ItemsColumn = styled.div`
  div:not(:last-of-type) {
    margin-bottom: 8px;
  }
  ${theme.device.mobile} {
    div:not(:last-of-type) {
      margin-bottom: 20px;
    }
  }
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  max-width: 400px;
  svg {
    color: ${theme.colors.yellow};
    height: 20px;
    width: 20px;
    margin-right: 8px;
  }

  ${theme.device.desktop} {
    :not(:last-of-type) {
      margin-right: 80px;
    }
  }
`;

export const Phone = styled(AiOutlinePhone)`
  && {
    transform: scale(-1, 1);
    height: 22px;
    width: 22px;
  }
`;

export const Address = styled(FiMapPin)`
  && {
    height: 30px;
    width: 30px;
  }
`;

export const Whatsapp = styled(AiOutlineWhatsApp)``;
export const Mail = styled(AiOutlineMail)``;
