import React from "react";

// functions
import { cn } from "../../../../utils/lib/cn";

const TypoTextInfo = ({ children, className, ...props }) => {
  return (
    <>
      <h3
        {...props}
        className={cn(
          "text-Neutral/300 text-[1rem] leading-[1.5rem] font-normal select-none",
          className
        )}
      >
        {children}
      </h3>
    </>
  );
};

export default TypoTextInfo;
