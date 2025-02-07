import React from "react";

// Functions

import { cn } from "../../../../utils/lib/cn";

export const BelowTitleDefault = ({ className, ...props }) => {
  return (
    <div {...props} className={cn("", className)}>
      <div className="flex rtl:flex-row ltr:flex-row-reverse w-full gap-[0.09rem]">
        <div className="w-[0.31rem] h-[3px] bg-black rounded-3xl"></div>
        <div className="w-[1.25rem] h-[3px] bg-black rounded-3xl"></div>
      </div>
    </div>
  );
};
