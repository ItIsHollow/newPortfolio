import React, { useEffect, useState } from "react";
import { Logo } from "../../components/logo/Logo";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { HS } from "./Header_Styles";
import { DesktopMenu } from "./headerMenu/desktopMenu/DesktopMenu";
import { MobileMenu } from "./headerMenu/mobileMenu/MobileMenu";

const headerItems = ["Домой", "Навыки", "Проекты", "Обо Мне", "Соц.Сети"];

export const Header: React.FC = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 769;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <HS.Header>
      <Container>
        <FlexWrapper justify="space-between" align="center">
          <Logo />

          {width < breakpoint ? (
            <MobileMenu menuItems={headerItems} />
          ) : (
            <DesktopMenu menuItems={headerItems} />
          )}
        </FlexWrapper>
      </Container>
    </HS.Header>
  );
};
