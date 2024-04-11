import React from "react";
import { Icon } from "../../../../components/icon/Icon";
import { SS } from "../Skills_Styles";

type SkillPropsType = {
  iconId: string;
  title: string;
};

export const Skill: React.FC<SkillPropsType> = (props: SkillPropsType) => {
  return (
    <SS.Skill>
      <Icon iconId={props.iconId} />
      <SS.SkillTitle>{props.title}</SS.SkillTitle>
    </SS.Skill>
  );
};
