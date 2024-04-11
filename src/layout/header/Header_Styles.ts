import styled from "styled-components";
import { theme } from "../../components/styles/Theme";
import { FlexWrapper } from "../../components/FlexWrapper";

//Header
const Header = styled.header`
  background-color: ${theme.color.primary};
  padding: 20px 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;

  ${FlexWrapper} {
  }
`;

export const HS = {
  Header,
};
