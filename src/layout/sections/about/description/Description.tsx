import React, { useState } from "react";
import { AS } from "../About_Styles";
import snowPhoto from "../../../../assets/images/IwithSnowMini.webp";
import barbekuPhoto from "../../../../assets/images/barbekuMini.webp";
import { motion, AnimatePresence } from "framer-motion";

export const Description: React.FC = () => {
  const [openFlag, setOpenFlag] = useState(false);
  const openInfoHandler = () => {
    setOpenFlag((lastFlag) => (lastFlag = !lastFlag));
  };

  return (
    <>
      <AS.Description>
        <AS.Button
          onClick={() => {
            openInfoHandler();
          }}
        >
          CLICK
        </AS.Button>
        <AnimatePresence>
          {openFlag && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.4 }}
            >
              <AS.DescriptionBox>
                <AS.DescriptionTopBox>
                  <AS.PhotoWrapper>
                    <AS.Photo src={snowPhoto} />
                  </AS.PhotoWrapper>
                  <AS.TextBox>
                    <AS.DescriptionText>
                      Активный по жизни, люблю учиться новым вещам и пробовать
                      разные виды спорта, ради духовного развиватия и
                      физического. Легко учусь и погружаюсь в новое и
                      неизвестное для себя.
                    </AS.DescriptionText>
                  </AS.TextBox>
                </AS.DescriptionTopBox>
                <AS.DescriptionBottomBox>
                  <AS.TextBox>
                    <AS.DescriptionText>
                      Коммуникабельный, неплохо лажу как с новыми людьми так и
                      со своими друзьями. Ответственный и пунктуальный. Всегда
                      могу найти компромисс или решение для разных ситуаций.
                    </AS.DescriptionText>
                  </AS.TextBox>
                  <AS.PhotoWrapper>
                    <AS.Photo src={barbekuPhoto} />
                  </AS.PhotoWrapper>
                </AS.DescriptionBottomBox>
              </AS.DescriptionBox>
            </motion.div>
          )}
        </AnimatePresence>
      </AS.Description>
    </>
  );
};
