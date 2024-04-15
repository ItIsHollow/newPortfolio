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
    description:
      "CRM система созданная в большей части на JS. Использовались дополнительные библиотеки Bootstrap и Tippy",
    alt: "crm система",
    isView: false,
    codeLink: "https://github.com/ItIsHollow/crmSystem",
    viewLink: "#",
  },
  {
    src: evklid,
    title: "Evklid",
    description:
      "Проектный сайт строительной компании созданный на HTML / CSS с добавление логики на JS. Для реализации интерактивных разделов использовал дополнительные библиотеки Swiper и Accordion",
    alt: "evklid",
    isView: true,
    viewLink: "https://itishollow.github.io/evklid/",
    codeLink: "https://github.com/ItIsHollow/evklid",
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
