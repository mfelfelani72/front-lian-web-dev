import React, { useState } from "react";
import { useTranslation } from "react-i18next";

// Components

import Image from "./Image.jsx";
import LoaderDotSpinner from "./LoaderDotSpinner.jsx";

// Svg

import trash from "../../../../assets/images/iconly-trash.svg";

// Functions

import { cn } from "../../../../utils/lib/cn.js";

// Zustand

import useAppStore from "../../../app/stores/AppStore.js";

const DeleteBox = ({ children, className, ...props }) => {
  // hooks
  const { t } = useTranslation();

  // state
  const { sendRequest } = useAppStore((state) => ({
    sendRequest: state.sendRequest,
  }));

  return (
    <>
      <div
        id={`${props?.id}-delete`}
        className={cn(
          "relative hidden flex-row-reverse mt-2 z-50 select-none",
          className
        )}
      >
        <div
          className={`${props?.boxSize} ${
            "gap-" + props?.gap
          } bg-white p-2 rounded-2xl flex flex-col items-center justify-end mb-4`}
        >
          <div className="px-[0.18rem] pt-[0.13rem] inline-flex">
            <Image src={trash} alt="trash" className={`${props?.iconSize}`} />
          </div>
          <div className={`text-Error/400 ${props?.textSize} font-bold`}>
            {t(props?.question)}
          </div>
          {children}
          <div className="flex flex-row gap-2 justify-between w-full">
            <div
              onClick={() => props?.cancelFunction(props?.inputsCancelFunction)}
              className={`${props?.buttonSize} cursor-pointer px-[0.45rem] py-[0.25rem] ${props?.buttonRounded} border border-Error/400 justify-center items-center gap-[0.25rem] flex`}
            >
              <div className={`text-Error/500 ${props?.textSize} font-bold`}>
                {t("no")}
              </div>
            </div>
            <div
              onClick={() => props?.acceptFunction(props?.inputsAcceptFunction)}
              className={`${props?.buttonSize} cursor-pointer px-[0.45rem] py-[0.25rem] bg-Error/400 ${props?.buttonRounded} justify-center items-center gap-[0.25rem] flex`}
            >
              <div className={`text-white ${props?.textSize} font-bold`}>
                {sendRequest && (
                  <LoaderDotSpinner
                    id={`${props?.id}-loader`}
                    className={props?.loaderClass}
                  />
                )}

                {t("yes")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteBox;
