import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

// Components

import Image from "../../core/components/Image.jsx";
import TypoTextTitle from "../../core/components/TypoTextTitle.jsx";
import TypoTextInfo from "../../core/components/TypoTextInfo.jsx";

// Functions
import { IconMoveLeftRight } from "../../../../utils/lib/Animations.js";
import { GetCashLocal, SetCashLocal } from "../../../../utils/lib/Cash.js";

// Svg & Png

import slide_screen_1 from "../../../../assets/images/png/slide-screen-1.png";
import slide_screen_2 from "../../../../assets/images/png/slide-screen-2.png";
import slide_screen_3 from "../../../../assets/images/png/slide-screen-3.png";
import arrow from "../../../../assets/icons/svg/arrow-bg.svg";

const SlideScreen = () => {
  // hooks
  const { t } = useTranslation();
  const navigate = useNavigate();

  // states
  const [indexSlide, setIndexSlide] = useState(0);
  const [slideDetails, setSlideDetails] = useState([
    {
      image: slide_screen_1,
      title: "slide_screen_title_1",
      description: "slide_screen_description_1",
    },
    {
      image: slide_screen_2,
      title: "slide_screen_title_2",
      description: "slide_screen_description_2",
    },
    {
      image: slide_screen_3,
      title: "slide_screen_title_3",
      description: "slide_screen_description_3",
    },
  ]);

  // functions

  const increaseIndexSlide = (indexSlide) => {
    if (indexSlide < 2) setIndexSlide(indexSlide + 1);
    else {
      if (GetCashLocal("slideScreen") === "null")
        SetCashLocal("slideScreen", { status: true });
      navigate("/home");
    }
  };

  const handleClick = () => {
    IconMoveLeftRight("arrow", increaseIndexSlide, indexSlide);
  };

  return (
    <>
      <div className="flex flex-col w-full xs:w-[25rem] h-screen">
        <div className="flex flex-col w-full h-[calc(60%)] justify-end items-center">
          <Image
            src={slideDetails[indexSlide]?.image}
            alt={slideDetails[indexSlide]?.image}
            className={"w-[300px] h-[180px]"}
          />
        </div>
        <div className="flex flex-col w-full h-[calc(40%)] p-4 items-end justify-end">
          <div className="w-full">
            <TypoTextTitle className={"w-full font-bold text-4xl"}>
              {t(slideDetails[indexSlide]?.title)}
            </TypoTextTitle>
          </div>
          <div className="w-full">
            <TypoTextInfo className={"mt-0.5 text-lg"}>
              {t(slideDetails[indexSlide]?.description)}
            </TypoTextInfo>
          </div>
          <div className="flex flex-row w-full justify-between mb-10">
            <div className="flex flex-row items-center gap-[2px]">
              <div
                className={`${
                  indexSlide === 0 ? "w-6 bg-[#FF3951]" : "w-4 bg-[#FFB6B6]"
                } h-2 rounded-2xl`}
              ></div>
              <div
                className={`
                 ${indexSlide === 1 ? "w-6 bg-[#FF3951]" : "w-4 bg-[#FFB6B6]"}
                 h-2 rounded-2xl`}
              ></div>
              <div
                className={`
                ${
                  indexSlide === 2 ? "w-6 bg-[#FF3951]" : "w-4 bg-[#FFB6B6]"
                } h-2 rounded-2xl`}
              ></div>
            </div>

            <Image
              id="arrow"
              onClick={handleClick}
              src={arrow}
              alt="arrow"
              className={"w-[50px] h-[50px] rtl:rotate-180 cursor-pointer"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SlideScreen;
