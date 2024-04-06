import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../components/FlexWrapper";
import { theme } from "../../components/styles/Theme";
import { Container } from "../../components/Container";
import { Icon } from "../../components/icon/Icon";

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <FlexWrapper
          justify="space-between"
          align="center"
          direction="column"
          gap="15px"
        >
          <Cheer>Буду рад новым знакомствам и беседам</Cheer>
          <FlexWrapper justify="space-between" align="center">
            <InfoBox>
              <TextBox>Можете позвонить мне</TextBox>
              <TextBox>
                <a href="tel:+79017098581">8-901-709-85-81</a>
              </TextBox>
            </InfoBox>
            <InfoBox>
              <TextBox>Или написать</TextBox>
              <TextBox>
                <a href="mailto:kuoraku@mail.ru">kuoraku@mail.ru</a>
              </TextBox>
            </InfoBox>
            <InfoBox>
              <TextBox>Ещё варианты</TextBox>
              <SocialBox>
                <SocialLink href="https://vk.me/id91578022">
                  <Icon
                    iconId="vk"
                    width="35px"
                    height="35px"
                    viewBox="0 0 22 22"
                  />
                </SocialLink>
                <SocialLink href="https://t.me/HelloHollow">
                  <Icon
                    iconId="telegram"
                    width="35px"
                    height="35px"
                    viewBox="0 0 22 22"
                  />
                </SocialLink>
                <SocialLink href="https://wa.me/79017098581">
                  <Icon
                    iconId="whatsApp"
                    width="30px"
                    height="30px"
                    viewBox="0 0 22 22"
                  />
                </SocialLink>
                <SocialLink href="https://github.com/ItIsHollow">
                  <Icon
                    iconId="gitHub"
                    height="30px"
                    width="30px"
                    viewBox="0 0 25 25"
                  />
                </SocialLink>
              </SocialBox>
            </InfoBox>
          </FlexWrapper>
          <Text>Спасибо за просмотр</Text>
        </FlexWrapper>
      </Container>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  padding: 40px 0 30px;
  background-color: ${theme.color.primary};
`;

const Cheer = styled.span`
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 1px;
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const TextBox = styled.span`
  font-weight: 500;
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
`;

const Text = styled.span`
  color: ${theme.color.text};
  font-size: 15px;
`;
