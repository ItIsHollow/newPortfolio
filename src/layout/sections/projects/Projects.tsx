import React from "react";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Project } from "./project/Project";
import { Container } from "../../../components/Container";
import crm from "../../../assets/images/CrmMin.webp";
import evklid from "../../../assets/images/EvklidMin.webp";
import { PS } from "./Projects_Stylec";

const projectsData = [
  {
    src: crm,
    title: "CRM",
    description: "CRM система на JS",
    alt: "crm система",
    viewLink: "#",
    codeLink: "#",
  },
  {
    src: evklid,
    title: "Evklid",
    description: "Сайт строительной компании на чистом html/css/js",
    alt: "evklid",
    viewLink: "#",
    codeLink: "#",
  },
];

export const Projects: React.FC = () => {
  return (
    <PS.Projects>
      <Container>
        <SectionTitle>Projects</SectionTitle>
        <FlexWrapper justify="space-between" gap="10px">
          {projectsData.map((project, index) => {
            return (
              <Project
                key={index}
                src={project.src}
                title={project.title}
                description={project.description}
                alt={project.alt}
                viewLink={project.viewLink}
                codeLink={project.codeLink}
              />
            );
          })}
        </FlexWrapper>
      </Container>
    </PS.Projects>
  );
};
