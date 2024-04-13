import React from "react";
import { Icon } from "../../../../components/icon/Icon";
import { SS } from "../Skills_Styles";

type SkillPropsType = {
  iconId: string;
  title: string;
  width: string;
  height: string;
  viewbox: string;
};

export const Skill: React.FC<SkillPropsType> = (props: SkillPropsType) => {
  return (
    <SS.Skill>
      <Icon
        iconId={props.iconId}
        width={props.width}
        height={props.height}
        viewBox={props.viewbox}
      />
      <SS.SkillTitle>{props.title}</SS.SkillTitle>
    </SS.Skill>
  );
};
