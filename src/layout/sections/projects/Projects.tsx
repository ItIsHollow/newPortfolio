import React from "react";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Project } from "./project/Project";
import { Container } from "../../../components/Container";
import { PS } from "./Projects_Stylec";
import crmPhoto from "../../../assets/images/CrmMinResize.webp";
import evklidPhoto from "../../../assets/images/EvklidMinResize.webp";
import blanchardPhoto from "../../../assets/images/blancardNewResizeMini.webp";
import portfolioPhoto from "../../../assets/images/portfolioResize.webp";
import { Fade } from "react-awesome-reveal";

const projectsData = [
  {
    src: crmPhoto,
    title: "CRM",
    description:
      "CRM система созданная в большей части на JS. Использовались дополнительные библиотеки Bootstrap и Tippy",
    alt: "crm система",
    isView: false,
    codeLink: "https://github.com/ItIsHollow/crmSystem",
    viewLink: "#",
    border: "none",
  },
  {
    src: evklidPhoto,
    title: "Evklid",
    description:
      "Проектный сайт строительной компании созданный на HTML / CSS с добавление логики на JS. Для реализации интерактивных разделов использовал дополнительные библиотеки Swiper и Accordion",
    alt: "evklid",
    isView: true,
    viewLink: "https://itishollow.github.io/evklid/",
    codeLink: "https://github.com/ItIsHollow/evklid",
    border: "none",
  },
  {
    src: portfolioPhoto,
    title: "Портфолио",
    description: "Портфолио созданное на React и Styled Components",
    alt: "Портфолио",
    isView: false,
    viewLink: "#",
    codeLink: "https://github.com/ItIsHollow/newPortfolio",
    border: "1px solid grey",
  },
  {
    src: blanchardPhoto,
    title: "Blanchard",
    description:
      "Проектный адаптивный сайт картинной галереи созданный на HTML / CSS с добавлением логики и интерактивности на JS, а также для формы использовал библиотеку Inputmask",
    alt: "Blanchard",
    isView: true,
    viewLink: "https://itishollow.github.io/blanchardGalery/",
    codeLink: "https://github.com/ItIsHollow/blanchardGalery",
    border: "none",
  },
];

export const Projects: React.FC = () => {
  return (
    <PS.Projects id="projects">
      <Container>
        <SectionTitle>Проекты</SectionTitle>
        <Fade duration={2500}>
          <FlexWrapper justify="space-between" gap="10px" wrap="wrap">
            {projectsData.map((project, index) => {
              return (
                <Project
                  border={project.border}
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
        </Fade>
      </Container>
    </PS.Projects>
  );
};
