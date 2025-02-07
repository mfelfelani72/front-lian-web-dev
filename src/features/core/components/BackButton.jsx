import React from "react";
import { Link } from "react-router-dom";

// components
import Image from "./Image.jsx";

// svg
import arrow_right from "../../../../assets/images/arrow-right.svg";

// functions
import { cn } from "../../../../utils/lib/cn.js";

const BackButton = ({ children, className, ...props }) => {
  return (
    <Link {...props}>
      <div className="flex items-center self-center px-auto mx-auto">
        <div className={cn("w-[4.5rem] h-[2.65rem] bg-Neutral/50 rounded-2xl",className)}>
          <Image
            alt="arrow_right"
            src={arrow_right}
            className="w-6 h-6 mx-auto my-2.5 ltr:rotate-180"
          />
        </div>
      </div>
    </Link>
  );
};

export default BackButton;
