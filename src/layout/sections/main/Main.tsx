import React from "react";
import { FlexWrapper } from "../../../components/FlexWrapper";
import photo from "../../../assets/images/photo.webp";
import { Container } from "../../../components/Container";
import { MS } from "./Main_Styles";
import Typewriter from "typewriter-effect";

export const Main: React.FC = () => {
  return (
    <MS.Main id="home">
      <Container>
        <FlexWrapper justify="space-between" align="center" gap="20px">
          <div>
            <MS.MiniAbout>Привет, меня зовут</MS.MiniAbout>
            <MS.Name>Артур Шпилёв</MS.Name>

            <MS.MainTitle>
              <p>Frontend Разработчик</p>
              <Typewriter
                options={{
                  strings: ["Frontend Разработчик"],
                  autoStart: true,
                  loop: true,
                  delay: 100,
                  deleteSpeed: 50,
                }}
              />
            </MS.MainTitle>
          </div>
          <MS.PhotoWrapper>
            <MS.Photo src={photo} />
          </MS.PhotoWrapper>
        </FlexWrapper>
      </Container>
    </MS.Main>
  );
};
