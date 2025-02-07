import React from "react";
import { Link } from "react-router-dom";

// functions
import { cn } from "../../../../utils/lib/cn";

const Button = ({ children, className, ...props }) => {
  return (
    <>
      {props?.type == "no_link" ? (
        <>
          <div
            {...props}
            className={cn(
              "h-14 flex flex-row justify-center items-center rounded-2xl bg-primary/400 hover:bg-primary/300 focus:bg-primary/500 focus:outline-none select-none cursor-pointer",
              className
            )}
          >
            <div className="flex flex-row gap-2 ">{children}</div>
          </div>
        </>
      ) : (
        <>
          <Link
            {...props}
            className={cn(
              "h-14 flex flex-row justify-center items-center rounded-2xl bg-primary/400 hover:bg-primary/300 focus:bg-primary/500 focus:outline-none select-none",
              className
            )}
          >
            <div className="flex flex-row gap-2 ">{children}</div>
          </Link>
        </>
      )}
    </>
  );
};

export default Button;
