import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Project } from "./project/Project";
import { Container } from "../../../components/Container";
import crm from "../../../assets/images/CrmMin.webp";
import evklid from "../../../assets/images/EvklidMin.webp";

export const Projects = () => {
  return (
    <StyledProjects>
      <Container>
        <SectionTitle>Projects</SectionTitle>
        <FlexWrapper justify="center" gap="30px">
          <Project
            codeLink="https://github.com/ItIsHollow/testPortfolioOld"
            viewLink="https://itishollow.github.io/testPortfolioOld/"
            src={crm}
            title="CRM"
            descr="CRM система на JS"
            alt="crm"
          />
          <Project
            codeLink="https://github.com/ItIsHollow/testPortfolioOld"
            viewLink="https://itishollow.github.io/testPortfolioOld/"
            src={evklid}
            title="Evklid"
            descr="Сайт строительной компании на чистом html/css/js"
            alt="evklid"
          />
        </FlexWrapper>
      </Container>
    </StyledProjects>
  );
};

const StyledProjects = styled.section``;
