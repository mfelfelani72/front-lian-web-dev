import React from "react";
import { useTranslation } from "react-i18next";

// Components

import TypoTextTitle from "../TypoTextTitle.jsx";
import { BelowTitleDefault } from "../BelowTitle.jsx";

// Functions

import { cn } from "../../../../../utils/lib/cn";
import { handleChangeTab } from "../../../../../utils/lib/Tab.js";

export const TabTitlesDefault = ({ className, ...props }) => {
  // hooks
  const { t } = useTranslation();

  return (
    <>
      <div
        className={cn("overflow-x-auto no-scrollbar w-full bg-white z-50", className)}
        id={"scrollContainer-" + props?.parentId}
      >
        <div
          id={"childs-" + props?.parentId}
          className="min-w-max flex py-2 gap-6"
        >
          {props?.titles.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                if (props?.setStatePage)
                  props?.setStatePage((prevState) => ({
                    ...prevState,
                    pageName: item,
                  }));

                handleChangeTab(index, props?.parentId);
              }}
              className="flex flex-col justify-center items-center"
            >
              <TypoTextTitle
                id={"tab-title-" + index + "-" + props?.parentId}
                className={`bg-white text-base ${
                  index !== 0 && "font-normal"
                } cursor-pointer mb-1`}
              >
                {t(item)}
              </TypoTextTitle>
              <BelowTitleDefault
                className={index === 0 ? "" : "hidden"}
                id={"below-tab-title-" + index + "-" + props?.parentId}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
