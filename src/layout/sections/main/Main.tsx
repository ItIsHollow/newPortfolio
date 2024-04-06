import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import photo from "../../../assets/images/photo.webp";
import { theme } from "../../../components/styles/Theme";
import { Container } from "../../../components/Container";

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper justify="space-between" align="center">
          <div>
            <MainTitle>Frontend developer</MainTitle>
            <Name>Артур Шпилёв</Name>
            <MiniAbout>Тут будет самую чуточку текста обо мне</MiniAbout>
          </div>
          <PhotoWrapper>
            <Photo src={photo} />
          </PhotoWrapper>
        </FlexWrapper>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  min-height: 100vh;
  display: flex;
`;

const PhotoWrapper = styled.div`
  position: relative;
  z-index: 0;

  &::before {
    content: "";
    display: inline-block;
    border-radius: 50px 15px 50px 15px;
    background-image: ${theme.color.gradientBorder};

    position: absolute;
    top: -3px;
    right: -3px;
    bottom: 0;
    left: -3px;
    z-index: -1;
  }
`;

const Photo = styled.img`
  border-radius: 50px 15px 50px 15px;
  width: 350px;
  min-height: 400px;
  object-fit: cover;
`;

const MiniAbout = styled.span`
  color: ${theme.color.text};
`;

const Name = styled.h2`
  font-size: 50px;
  font-weight: 700;
  letter-spacing: 0.5rem;
  margin: 20px 0;
  color: ${theme.color.font};
`;

const MainTitle = styled.h1`
  font-size: 30px;
  letter-spacing: 2px;
`;
