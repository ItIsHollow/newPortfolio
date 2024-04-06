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
            codeLink="#"
            viewLink="#"
            src={crm}
            title="CRM"
            descr="CRM система на JS"
            alt="crm"
          />
          <Project
            codeLink="#"
            viewLink="#"
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
