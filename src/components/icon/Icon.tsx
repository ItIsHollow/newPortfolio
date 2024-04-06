import React from "react";
// import iconsSprite from "../../assets/images/icons-sprite.svg";
import iconsSpriteCopy from "../../assets/images/icons-sprite copy.svg";
// import dino from "../../assets/images/dino.svg";

type IconPropsType = {
  iconId: string;
  width?: string;
  height?: string;
  viewBox?: string;
};

export const Icon = (props: IconPropsType) => {
  return (
    // <div>
    //   <img src={dino} alt="" />
    // </div>
    <svg
      width={props.width || "50"}
      height={props.height || "50"}
      viewBox={props.viewBox || "0 0 50 50"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* <use xlinkHref={`${dino}#${props.iconId}`} /> */}
      {/* <use xlinkHref={`${iconsSprite}#${props.iconId}`} /> */}
      <use xlinkHref={`${iconsSpriteCopy}#${props.iconId}`} />
    </svg>
  );
};
