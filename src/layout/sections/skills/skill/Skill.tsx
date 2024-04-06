import React from "react";
import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";

type SkillPropsType = {
  iconId: string;
  descr: string;
};

export const Skill = (props: SkillPropsType) => {
  return (
    <StyldeSkill>
      <Icon iconId={props.iconId} />
      <SkillTitle>{props.descr}</SkillTitle>
    </StyldeSkill>
  );
};

const StyldeSkill = styled.div`
  min-width: 50px;
  min-height: 50px;
  border: 1px solid gray;
  /* color: red; */
`;

const SkillTitle = styled.h6`
  color: cadetblue;
  text-transform: uppercase;
`;
