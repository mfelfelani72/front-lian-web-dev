import React from "react";

// Functions

import { cn } from "../../../../utils/lib/cn";

export const ClickableOverlay = ({ className, ...props }) => {
  return (
    <div
      id={props?.overlayId}
      className={cn(
        "hidden fixed inset-0 xs:w-[25rem] mx-auto bg-black bg-opacity-30 z-[60]",
        className
      )}
      onClick={() => props?.function(props)}
    ></div>
  );
};
export const Overlay = ({ className, ...props }) => {
  return (
    <div
      id={props?.overlayId}
      className={cn(
        "hidden fixed inset-0 xs:w-[25rem] mx-auto bg-black bg-opacity-30 z-[60]",
        className
      )}
    ></div>
  );
};
