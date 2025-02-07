import React from "react";
import { Link } from "react-router-dom";

// functions
import { cn } from "../../../../utils/lib/cn";

const TextButton = ({ children, className, ...props }) => {
  return (
    <>
      {props?.type == "no_link" ? (
        <div
          {...props}
          className={cn(
            "flex flex-row justify-center items-center text-primary/400 hover:text-primary/300 focus:text-primary/500 font-bold text-[1rem] leading-[1.5rem] select-none cursor-pointer",
            className
          )}
        >
          <div className="flex flex-row gap-2 ">{children}</div>
        </div>
      ) : props?.type == "navigate" ? (
        <div
          onClick={() => {
            props?.navigate(props?.to, { state: props?.data });
          }}
          className={cn(
            "flex flex-row justify-center items-center text-primary/400 hover:text-primary/300 focus:text-primary/500 font-bold text-[1rem] leading-[1.5rem] select-none cursor-pointer",
            className
          )}
        >
          <div className="flex flex-row gap-2 ">{children}</div>
        </div>
      ) : (
        <Link
          {...props}
          className={cn(
            "flex flex-row justify-center items-center text-primary/400 hover:text-primary/300 focus:text-primary/500 font-bold text-[1rem] leading-[1.5rem] select-none",
            className
          )}
        >
          <div className="flex flex-row gap-2 ">{children}</div>
        </Link>
      )}
    </>
  );
};

export default TextButton;
