import styled from "styled-components";
import { theme } from "../../components/styles/Theme";
import { font } from "../../components/styles/Common";
import { FlexWrapper } from "../../components/FlexWrapper";

const Footer = styled.footer`
  position: relative;
  padding: 40px 0 30px;
  background-color: ${theme.color.primary};
  /* ${FlexWrapper} {
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 30px;
  } */
`;

const Cheer = styled.span`
  ${font({
    weight: 500,
    Fmax: 20,
    Fmin: 16,
  })}
  text-align: center;
  letter-spacing: 1px;
`;

const InfoBox = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const InfoText = styled.span`
  ${font({
    weight: 500,
    color: `${theme.color.text}`,
    Fmax: 16,
    Fmin: 12,
  })}
`;

const InfoContact = styled.span`
  ${font({
    weight: 500,
    Fmax: 18,
    Fmin: 14,
  })}

  a {
    transition: 0.2s ease-in-out;
  }

  &:hover {
    a {
      color: ${theme.color.hoverFont};
    }
  }
`;

const SocialBox = styled.div`
  display: flex;
  gap: 15px;
`;

const SocialLink = styled.a.attrs(() => ({
  target: "_blanc",
}))`
  width: 40px;
  height: 40px;
  /* color: ${theme.color.primary}; */

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  z-index: 1;
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background-image: ${theme.color.gradientBorder};
    z-index: -1;
  }

  transform: translateY(0);
  transition: 0.2s ease-in-out;

  &:hover {
    transform: translateY(-10%);
    color: ${theme.color.hoverFont};
  }
`;

export const FS = {
  Footer,
  Cheer,
  InfoBox,
  InfoText,
  InfoContact,
  SocialBox,
  SocialLink,
};
