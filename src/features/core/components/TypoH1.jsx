import React from "react";

// functions
import { cn } from "../../../../utils/lib/cn";

const TypoH1 = ({ children, className, ...props }) => {
  return (
    <>
      <h1
        {...props}
        className={cn(
          "text-Neutral/500 text-3xl text-[1.9rem] font-bold",
          className
        )}
      >
        {children}
      </h1>
    </>
  );
};

export default TypoH1;
