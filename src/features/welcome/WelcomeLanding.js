import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Components

import Image from "../../features/core/components/Image.jsx";
import TypoTextTitle from "../../features/core/components/TypoTextTitle.jsx";

// Functions

import { GetCashLocal } from "../../../utils/lib/Cash.js";

// Svg

import trade_logo from "../../../assets/images/png/trade-logo.png";

const WelcomeLanding = () => {
  // hooks
  const navigate = useNavigate();

  // functions
  useEffect(() => {
    setTimeout(() => {
      if (GetCashLocal("slideScreen")?.status) navigate("/home");
      else navigate("/slide-screen");
    }, 1500);
  }, []);
  return (
    <>
      <div className="p-4 xs:w-[25rem] bg-[#FF3951] h-full">
        <div className="flex flex-col gap-4 justify-center items-center h-full w-full">
          <Image
            src={trade_logo}
            alt="trade-logo"
            className={"w-[250px] h-[180px]"}
          />
          <TypoTextTitle className={"text-white text-3xl font-spaceGrotesk"}>
            Lian system
          </TypoTextTitle>
        </div>
      </div>
    </>
  );
};

export default WelcomeLanding;
