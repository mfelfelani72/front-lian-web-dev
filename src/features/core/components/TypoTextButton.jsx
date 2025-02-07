import React from "react";

// functions
import { cn } from "../../../../utils/lib/cn";

const TypoTextButton = ({ children, className, ...props }) => {
  return (
    <>
      <div
        {...props}
        className={cn(
          "text-Neutral/500 text-[1rem] leading-[1.5rem] font-bold",
          className
        )}
      >
        {children}
      </div>
    </>
  );
};

export default TypoTextButton;
