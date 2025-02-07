import React from "react";

// functions
import { cn } from "../../../../utils/lib/cn";

const TypoTextInputLabel = ({ children, className, ...props }) => {
  return (
    <>
      <div
        {...props}
        className={cn(
          "text-Neutral/300 text-[0.75rem] leading-[1.15rem] font-medium",
          className
        )}
      >
        {children}
      </div>
    </>
  );
};

export default TypoTextInputLabel;
