import React from "react";
import { SectionTitle } from "../../../components/SectionTitle";
import { Description } from "./description/Description";
import { Container } from "../../../components/Container";
import { AS } from "./About_Styles";

export const About: React.FC = () => {
  return (
    <AS.About id="about">
      <Container>
        <SectionTitle>Обо мне</SectionTitle>
        <AS.AboutText>Тут немного личной информации обо мне.</AS.AboutText>
        <Description />
      </Container>
    </AS.About>
  );
};
