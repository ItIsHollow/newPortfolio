import React, { useState } from "react";
import { AS } from "../About_Styles";

export const AccordionAbout: React.FC = () => {
  const [openFlag, setOpenFlag] = useState(false);
  const openInfoHandler = () => {
    setOpenFlag((lastFlag) => (lastFlag = !lastFlag));
  };

  return (
    <AS.Description>
      <AS.Button
        onClick={() => {
          openInfoHandler();
        }}
      >
        CLICK
      </AS.Button>
      {openFlag && (
        <AS.DescriptionBox>
          <AS.DescriptionText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            optio hic nihil aliquam eveniet consectetur est labore odit
            recusandae illum, dolorem quas doloribus suscipit ipsum aspernatur,
            accusantium voluptatum aut officiis?
          </AS.DescriptionText>
        </AS.DescriptionBox>
      )}
    </AS.Description>
  );
};
