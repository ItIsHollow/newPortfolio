import React from "react";
import { FlexWrapper } from "../../../components/FlexWrapper";
import photo from "../../../assets/images/photo.webp";
import { Container } from "../../../components/Container";
import { MS } from "./Main_Styles";

export const Main: React.FC = () => {
  return (
    <MS.Main>
      <Container>
        <FlexWrapper justify="space-between" align="center" gap="20px">
          <div>
            <MS.MiniAbout>Привет, меня зовут</MS.MiniAbout>
            <MS.Name>Артур Шпилёв</MS.Name>
            <MS.MainTitle>Frontend Разработчик</MS.MainTitle>
          </div>
          <MS.PhotoWrapper>
            <MS.Photo src={photo} />
          </MS.PhotoWrapper>
        </FlexWrapper>
      </Container>
    </MS.Main>
  );
};
