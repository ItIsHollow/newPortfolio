import styled, { css } from "styled-components";
import { theme } from "../../../components/styles/Theme";
import { font } from "../../../components/styles/Common";
import { Link } from "react-scroll";

// Menu
const MenuItem = styled.li`
  position: relative;
`;

const NavLink = styled(Link)`
  text-align: center;
  ${font({
    weight: 400,
    Fmax: 18,
    Fmin: 14,
  })}

  &::before {
    content: "";
    display: inline-block;
    height: 5px;
    background-image: ${theme.color.gradientFon};

    position: absolute;
    bottom: -2px;
    left: -5px;
    right: -5px;
    z-index: 1;
    opacity: 0.8;
    transform: scale(0);
    transition: 0.3s ease-in-out;
  }

  &:hover,
  &.active {
    &::before {
      transform: scale(1);
    }
  }
`;

// Desktop
const DesktopMenu = styled.nav`
  ul {
    display: flex;
    justify-content: center;
    gap: 40px;
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

  /* display: none; */
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s ease-in-out;
  /* transform: scale(0); */
  transform: translateX(-100%);

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 300px;
    flex-direction: column;
    transition: 0.5s ease-in-out;
  }

  ${(props) =>
    props.isOpen &&
    css<{ isOpen: boolean }>`
      /* transform: scale(1); */
      transform: translateX(0);
      /* display: flex;
      justify-content: center;
      align-items: center; */

      & ul {
        gap: 30px;
      }
    `}
`;

const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: fixed;
  top: 25px;
  right: 30px;
  width: 28px;
  height: 28px;
  z-index: 100;

  span {
    display: block;
    width: 24px;
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
      width: 28px;
      height: 2px;
      right: 0;
      background-color: ${theme.color.font};
      position: absolute;
      transform: translateY(-8px);

      ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          transform: rotate(-45deg) translateY(0);
        `}
    }

    &::after {
      content: "";
      display: block;
      width: 20px;
      height: 2px;
      right: 0;
      background-color: ${theme.color.font};
      position: absolute;
      transform: translateY(8px);

      ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          transform: rotate(45deg) translateY(0);
          width: 28px;
        `}
    }
  }
`;

export const HMS = {
  // Menu
  NavLink,
  MenuItem,

  // Desktop
  DesktopMenu,

  //  Mobile
  MobileMenu,
  BurgerButton,
  MobileMenuPopup,
};
