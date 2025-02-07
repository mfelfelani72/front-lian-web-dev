import React from "react";

// Components

import { ClickableOverlay } from "../../../features/core/components/Overlay.jsx";

// Functions

import { cn } from "../../../../utils/lib/cn.js";
import { CloseDrawer } from "../../../../utils/lib/Drawer.js";

const Drawer = ({ children, className, ...props }) => {
  // default drawer location is --> bottom
  let inset = "bottom-0 left-0 xs:left-[calc(50%-12.5rem)] w-full xs:w-[23rem]";
  let moreClass = "rounded-t-lg p-4 translate-y-full";
  let contentClass = "flex-col";
  let handle = "";

  if (props?.location == "bottom") {
    inset = "bottom-0 left-0 xs:left-[calc(50%-12.5rem)] w-full xs:w-[23rem]";
    moreClass = "rounded-t-lg p-4 translate-y-full";
    contentClass = "flex-col";
    handle = "mb-4";
  } else if (props?.location == "top") {
    inset = "top-0 left-0 xs:left-[calc(50%-12.5rem)] w-full xs:w-[23rem]";
    moreClass = "rounded-b-lg p-4 -translate-y-full";
    contentClass = "flex-col-reverse";
    handle = "mt-8";
  } else if (props?.location == "left") {
    inset = "inset-y-0 left-0 xs:left-[calc(50%-12.5rem)]";
    moreClass = "h-full rounded-r-lg py-4 pl-4 -translate-x-full";
    contentClass = "flex-row h-full";
    handle = "rotate-90";
  } else if (props?.location == "right") {
    inset = "inset-y-0 right-0 xs:right-[calc(50%-12.5rem)]";
    moreClass = "h-full rounded-l-lg py-4 pr-4 translate-x-full";
    contentClass = "flex-row-reverse h-full";
    handle = "rotate-90";
  }

  return (
    <>
      <ClickableOverlay
        overlayId={props?.overlayId}
        drawerId={props?.id}
        location={props?.location}
        function={CloseDrawer}
      />

      <div
        id={props?.id}
        className={cn(
          `hidden ${inset} ${moreClass} xs:w-[25rem] bg-white shadow-lg transition-all duration-200 z-[100]`,

          className
        )}
      >
        <div className={`flex ${contentClass}`}>
          <div className={`flex w-8 justify-center self-center ${handle}`}>
            <div className="w-8 h-1 bg-Neutral/500 rounded-[6.25rem]"></div>
          </div>

          <div className="mt-4" id={`drawer-content-${props?.id}`}>
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Drawer;
