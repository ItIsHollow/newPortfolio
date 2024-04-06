import React from "react";
import styled from "styled-components";
import { theme } from "../../../../components/styles/Theme";
import { Link } from "../../../../components/Link";

type ProjectPropsType = {
  src: string;
  title: string;
  descr: string;
  alt: string;
  viewLink: string;
  codeLink: string;
};

export const Project = (props: ProjectPropsType) => {
  return (
    <StyledProject>
      <ImageWrapper>
        <Image src={props.src} alt={props.alt} />
      </ImageWrapper>

      <Title>{props.title}</Title>
      <Text>{props.descr}</Text>
      <LinkBox>
        <Link href={props.viewLink}>View</Link>
        <Link href={props.codeLink}>Code</Link>
      </LinkBox>
    </StyledProject>
  );
};

const StyledProject = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${theme.color.primary};
  max-width: 570px;
  width: 100%;
  padding: 25px;
  padding-bottom: 40px;
  border: 1px solid ${theme.color.projectBorder};
  border-radius: 50px 0;
`;

const ImageWrapper = styled.div`
  margin-bottom: 20px;
  /* min-height: 280px; */
  /* border-radius: 24px 8px 8px 8px; */
`;

const Image = styled.img`
  width: 100%;
  /* height: 100%; */
  height: 280px;
  object-fit: fill;
  background-color: aquamarine;
  border-radius: 24px 8px 8px 8px;
`;

const Title = styled.h5`
  font-size: 30px;
  font-weight: 600;
  text-align: center;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    height: 4px;
    width: 300px;
    left: 50%;
    bottom: -20px;
    transform: translateX(-50%);
    background-image: ${theme.color.gradientFon};
  }
`;

const Text = styled.p`
  color: ${theme.color.text};
  margin: 35px 0 40px;
  font-size: 18px;
`;

const LinkBox = styled.div`
  margin-top: auto;
  display: flex;
  gap: 30px;
`;
