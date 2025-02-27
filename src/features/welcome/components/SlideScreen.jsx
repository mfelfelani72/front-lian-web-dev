import React, { useState } from "react";

// Components

import Image from "../../core/components/Image.jsx";
import TypoTextTitle from "../../core/components/TypoTextTitle.jsx";
import TypoTextInfo from "../../core/components/TypoTextInfo.jsx";

// Svg & Png

import slide_screen_1 from "../../../../assets/images/png/slide-screen-1.png";
import arrow from "../../../../assets/images/svg/arrow-bg.svg";

const SlideScreen = () => {
  const [slideDetails, setSlideDetails] = useState([
    {
      image: slide_screen_1,
      title: "Explore the world easily",
      description: "To your desire",
    },
    { image: null, title: "", description: "" },
    { image: null, title: "", description: "" },
  ]);

  const [indexSlide, setIndexSlide] = useState(0);
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
          <div className="">
            <TypoTextTitle className={"w-full font-bold text-4xl"}>
              {slideDetails[indexSlide]?.title}
            </TypoTextTitle>
          </div>
          <div>
            <TypoTextInfo className={"w-full mt-0.5 text-lg"}>
              {slideDetails[indexSlide]?.description}
            </TypoTextInfo>
          </div>
          <div className="flex flex-row-reverse w-full justify-between mb-10">
            <div className="flex flex-row-reverse items-center gap-[2px]">
              <div className="w-6 h-2 bg-[#FF3951] rounded-2xl"></div>
              <div className="w-4 h-2 bg-[#FFB6B6] rounded-2xl"></div>
              <div className="w-4 h-2 bg-[#FFB6B6] rounded-2xl"></div>
            </div>

            <Image src={arrow} alt="arrow" className={"w-[50px] h-[50px]"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SlideScreen;
