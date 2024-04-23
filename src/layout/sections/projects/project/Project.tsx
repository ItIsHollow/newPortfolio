import React from "react";
import { Link, PS } from "../Projects_Stylec";

type ProjectPropsType = {
  src: string;
  title: string;
  description: string;
  alt: string;
  codeLink: string;
  isView: boolean;
  viewLink?: string;
  border: string;
};

export const Project: React.FC<ProjectPropsType> = (
  props: ProjectPropsType
) => {
  return (
    <PS.Project>
      <PS.ImageWrapper>
        <PS.Image border={props.border} src={props.src} alt={props.alt} />
      </PS.ImageWrapper>

      <PS.Title>{props.title}</PS.Title>
      <PS.Description>{props.description}</PS.Description>
      <PS.LinkBox>
        <Link href={props.codeLink}>Код</Link>
        {props.isView === true && <Link href={props.viewLink}>Посмотреть</Link>}
      </PS.LinkBox>
    </PS.Project>
  );
};
