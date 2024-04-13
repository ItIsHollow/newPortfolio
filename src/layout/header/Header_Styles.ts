import styled from "styled-components";
import { theme } from "../../components/styles/Theme";
import { Logo } from "../../components/logo/Logo";

//Header
const Header = styled.header`
  background-color: ${theme.color.primary};
  padding: 5px 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
`;

export const HS = {
  Header,
};
