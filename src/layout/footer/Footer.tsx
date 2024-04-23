import React from "react";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Container } from "../../components/Container";
import { Icon } from "../../components/icon/Icon";
import { FS } from "./Footer_Styles";

const socialLinkData = [
  {
    href: "https://vk.me/id91578022",
    iconId: "vk",
    width: "35px",
    height: "35px",
    viewBox: "0 0 22 22",
  },
  {
    href: "https://t.me/HelloHollow",
    iconId: "telegram",
    width: "35px",
    height: "35px",
    viewBox: "0 0 22 22",
  },
  {
    href: "https://wa.me/79017098581",
    iconId: "whatsApp",
    width: "30px",
    height: "30px",
    viewBox: "0 0 22 22",
  },
  {
    href: "https://github.com/ItIsHollow",
    iconId: "gitHub",
    width: "30px",
    height: "30px",
    viewBox: "0 0 25 25",
  },
];

export const Footer: React.FC = () => {
  return (
    <FS.Footer id="contacts">
      <Container>
        <FlexWrapper
          justify="space-between"
          align="center"
          direction="column"
          gap="15px"
        >
          <FS.Cheer>Буду рад новым знакомствам и беседам</FS.Cheer>
          <FlexWrapper
            justify="space-around"
            align="flex-start"
            wrap="wrap"
            gap="30px"
          >
            <FS.InfoBox>
              <FS.InfoText>Можете позвонить мне</FS.InfoText>
              <FS.InfoContact>
                <a href="tel:+79017098581">8-901-709-85-81</a>
              </FS.InfoContact>
            </FS.InfoBox>
            <FS.InfoBox>
              <FS.InfoText>Или написать</FS.InfoText>
              <FS.InfoContact>
                <a href="mailto:kuoraku@mail.ru">kuoraku@mail.ru</a>
              </FS.InfoContact>
            </FS.InfoBox>
            <FS.InfoBox>
              <FS.InfoText>Ещё варианты</FS.InfoText>
              <FS.SocialBox>
                {socialLinkData.map((socialItem, index) => {
                  return (
                    <FS.SocialLink href={socialItem.href} key={index}>
                      <Icon
                        iconId={socialItem.iconId}
                        width={socialItem.width}
                        height={socialItem.height}
                        viewBox={socialItem.viewBox}
                      />
                    </FS.SocialLink>
                  );
                })}
              </FS.SocialBox>
            </FS.InfoBox>
          </FlexWrapper>
        </FlexWrapper>
      </Container>
    </FS.Footer>
  );
};
