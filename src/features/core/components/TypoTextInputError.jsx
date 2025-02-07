import React from "react";

// functions
import { cn } from "../../../../utils/lib/cn";

const TypoTextInputError = ({ children, className, ...props }) => {
  return (
    <>
      <div
        {...props}
        className={cn(
          "text-Error/400 text-[0.75rem] leading-[1rem] font-bold",
          className
        )}
      >
        {children}
      </div>
    </>
  );
};

export default TypoTextInputError;
