import React from "react";

// functions
import { cn } from "../../../../utils/lib/cn";

const TypoTextTitle = ({ children, className, ...props }) => {
  return (
    <>
      <h2
        {...props}
        className={cn(
          "text-Neutral/500 text-[1.25rem] leading-[1.95rem] font-bold select-none",
          className
        )}
      >
        {children}
      </h2>
    </>
  );
};

export default TypoTextTitle;
