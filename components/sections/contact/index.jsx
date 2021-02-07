import React from "react";
import {
  Container,
  Title,
  ItemsContainer,
  ItemsColumn,
  ContactItem,
  Phone,
  Whatsapp,
  Address,
  Mail,
} from "./styles";

const Contact = () => {
  return (
    <Container>
      <Title>Contatos</Title>
      <ItemsContainer>
        <ItemsColumn>
          <ContactItem>
            <Phone /> (71) 3025-6249
          </ContactItem>
          <ContactItem>
            <Whatsapp /> (71) 99182-6249
          </ContactItem>
        </ItemsColumn>

        <ContactItem>
          <Address /> Rua Praia de Itaparica, 231 - Vilas do Atlântico Lauro de
          Freitas - BA, 42700-000
        </ContactItem>

        <ContactItem>
          <Mail /> contato@drillbahia.com.br
        </ContactItem>
      </ItemsContainer>
    </Container>
  );
};

export default Contact;
