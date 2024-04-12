import React from "react";
import { SectionTitle } from "../../../components/SectionTitle";
import { AccordionAbout } from "./description/Description";
import { Container } from "../../../components/Container";
import { AS } from "./About_Styles";

export const About: React.FC = () => {
  return (
    <AS.About>
      <Container>
        <SectionTitle>Обо мне</SectionTitle>
        <AS.AboutText>
          Тут немного всякой личной информации обо мне.
        </AS.AboutText>
        <AccordionAbout />
      </Container>
    </AS.About>
  );
};
