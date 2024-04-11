import React from "react";
import { Link } from "../../../../components/Link";
import { PS } from "../Projects_Stylec";

type ProjectPropsType = {
  src: string;
  title: string;
  description: string;
  alt: string;
  viewLink: string;
  codeLink: string;
};

export const Project: React.FC<ProjectPropsType> = (
  props: ProjectPropsType
) => {
  return (
    <PS.Project>
      <PS.ImageWrapper>
        <PS.Image src={props.src} alt={props.alt} />
      </PS.ImageWrapper>

      <PS.Title>{props.title}</PS.Title>
      <PS.Description>{props.description}</PS.Description>
      <PS.LinkBox>
        <Link href={props.viewLink}>View</Link>
        <Link href={props.codeLink}>Code</Link>
      </PS.LinkBox>
    </PS.Project>
  );
};
