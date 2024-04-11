import styled, { css } from "styled-components";
import { theme } from "../../../components/styles/Theme";
import { font } from "../../../components/styles/Common";

// Menu
const Link = styled.a`
  text-align: center;
  ${font({
    weight: 400,
    Fmax: 25,
    Fmin: 15,
  })}
`;

const MenuItem = styled.li``;

// Desktop
const DesktopMenu = styled.nav`
  ul {
    display: flex;
    justify-content: center;
    gap: 30px;
  }
`;

// Mobile
const MobileMenu = styled.nav``;

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;

  background-color: rgba(31, 31, 32, 0.9);

  display: none;

  ${(props) =>
    props.isOpen &&
    css<{ isOpen: boolean }>`
      display: flex;
      justify-content: center;
      align-items: center;
    `}

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    flex-direction: column;
  }
`;

const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: fixed;
  top: 20px;
  right: 30px;
  width: 50px;
  height: 50px;
  z-index: 100;

  span {
    display: block;
    width: 50px;
    height: 2px;
    background-color: ${theme.color.font};
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    ${(props) =>
      props.isOpen &&
      css<{ isOpen: boolean }>`
        background-color: rgba(255, 255, 255, 0);
      `}

    &::before {
      content: "";
      display: block;
      width: 50px;
      height: 2px;
      background-color: ${theme.color.font};
      position: absolute;
      transform: translateY(-15px);

      ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          transform: rotate(-45deg) translateY(0);
        `}
    }

    &::after {
      content: "";
      display: block;
      width: 50px;
      height: 2px;
      background-color: ${theme.color.font};
      position: absolute;
      transform: translateY(15px);

      ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          transform: rotate(45deg) translateY(0);
        `}
    }
  }
`;

export const HMS = {
  // Menu
  Link,
  MenuItem,

  // Desktop
  DesktopMenu,

  //  Mobile
  MobileMenu,
  BurgerButton,
  MobileMenuPopup,
};
