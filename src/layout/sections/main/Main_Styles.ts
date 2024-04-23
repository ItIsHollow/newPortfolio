import styled from "styled-components";
import { theme } from "../../../components/styles/Theme";
import { font } from "../../../components/styles/Common";
import { FlexWrapper } from "../../../components/FlexWrapper";

const Main = styled.section`
  /* position: relative; */
  min-height: 100vh;
  display: flex;

  ${FlexWrapper} {
    @media ${theme.media.tablet} {
      flex-wrap: wrap;
      justify-content: space-around;
    }
  }
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
  max-width: 400px;
  width: 100%;
  /* width: 350px; */
  min-height: 400px;
  object-fit: cover;

  @media ${theme.media.mobile} {
    max-width: 350px;
  }
  @media screen and (max-width: 450px) {
    max-width: 310px;
  }
`;

const MiniAbout = styled.span`
  ${font({
    weight: 500,
    Fmax: 20,
    Fmin: 12,
    color: `${theme.color.text}`,
  })}
`;

const Name = styled.h2`
  ${font({
    weight: 700,
    Fmax: 50,
    Fmin: 30,
  })}
  letter-spacing: 4px;
  margin: 10px 0 20px;

  @media ${theme.media.tablet} {
    margin: 0 0 5px;
  }
`;

const MainTitle = styled.h1`
  ${font({
    weight: 600,
    Fmax: 36,
    Fmin: 20,
  })}

  p {
    display: none;
  }
`;

export const MS = {
  Main,
  PhotoWrapper,
  Photo,
  MiniAbout,
  Name,
  MainTitle,
};
