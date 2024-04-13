import React from "react";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Project } from "./project/Project";
import { Container } from "../../../components/Container";
import crm from "../../../assets/images/CrmMinResize.webp";
import evklid from "../../../assets/images/EvklidMinResize.webp";
import { PS } from "./Projects_Stylec";

const projectsData = [
  {
    src: crm,
    title: "CRM",
    description: "CRM система на JS",
    alt: "crm система",
    isView: false,
    codeLink: "#",
    viewLink: "#",
  },
  {
    src: evklid,
    title: "Evklid",
    description:
      "Сайт строительной компании на html/css/js, Сайт строительной компании на html/css/js,Сайт строительной компании на html/css/js",
    alt: "evklid",
    isView: true,
    viewLink: "#",
    codeLink: "#",
  },
];

export const Projects: React.FC = () => {
  return (
    <PS.Projects>
      <Container>
        <SectionTitle>Проекты</SectionTitle>
        <FlexWrapper justify="space-between" gap="10px">
          {projectsData.map((project, index) => {
            return (
              <Project
                key={index}
                src={project.src}
                title={project.title}
                description={project.description}
                alt={project.alt}
                isView={project.isView}
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
