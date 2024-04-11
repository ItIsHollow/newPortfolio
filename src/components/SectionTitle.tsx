import styled from "styled-components";
import { font } from "./styles/Common";
import { theme } from "./styles/Theme";

export const SectionTitle = styled.h2`
  text-align: left;
  margin-bottom: 50px;

  ${font({
    weight: 700,
    Fmax: 46,
    Fmin: 30,
  })}

  @media ${theme.media.tablet} {
    text-align: center;
  }

  @media ${theme.media.mobile} {
    margin-bottom: 30px;
  }
`;
