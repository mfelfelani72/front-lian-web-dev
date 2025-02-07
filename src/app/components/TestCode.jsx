import React, { useState } from "react";
// import './index.css';
import html2canvas from "html2canvas";
import ThanosEffectBox from "../../features/core/components/ThanosEffectBox.jsx";
import { DeleteObjectThanosEffect } from "../../../utils/lib/Animations";
import CardBox from "../../features/cardManagement/components/CardBox.jsx";

const App = () => {
  return (
    <>
      {/* <div
        id="banner-message"
        className={`bg-gray-500 p-4 text-lg text-center transition-all flex flex-col mx-auto w-72 `}
      >
        <span>Hello World</span>
        <span>Hello World</span>
        <span>Hello World</span>
        <span>Hello World</span>
        <span>Hello World</span>
        <span>Hello World</span>
        <span>Hello World</span>
      </div>

      <div
        id="effect"
        className={`absolute text-center pointer-events-none`}
      ></div> */}
      <div className="absolute top-28 left-0 right-0 xs:left-[calc(50%-12.5rem)] xs:right-[calc(50%-12.5rem)] xs:w-[25rem] h-[calc(100vh-7rem)]">
        <ThanosEffectBox id="banner-message">
           <CardBox
            id={"1"}
            // bankLogo={shahr_bank}
            bankTitle={"بانک شهر"}
            bankCardNumber={"5074061053722461"}
            bankSheba={"570820000000500827411436"}
            bankPersonalName={"محمد فلفلانی"}
            bankExpireDate={"08/17"}
            className={"bg-secondary/50 border-secondary/100"}
            // setCardId={setCardId}
            // drawerLocation={drawerLocation}
            // overlayId="overlayNotClickable"
          />
        </ThanosEffectBox>

        <div className="action mt-4 text-center text-black">
          <button
            className="bg-blue-500 border-none rounded px-4 py-2 text-sm text-white mx-2"
            onClick={() => DeleteObjectThanosEffect("banner-message")}
          >
            yes
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
