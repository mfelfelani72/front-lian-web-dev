import React from "react";
import { Link } from "react-router-dom";

// components
import Image from "./Image.jsx";

// svg
import iconly_danger from "../../../../assets/images/iconly-danger.svg"

// functions
import { cn } from "../../../../utils/lib/cn.js";

const DangerButton = ({ children, className, ...props }) => {
  return (
    <Link {...props}>
      <div className="relative flex items-center self-center px-auto mx-auto z-10">
        <div className={cn("w-[4.5rem] h-[2.65rem] bg-Neutral/50 rounded-2xl",className)}>
          <Image
            alt="iconly_danger"
            src={iconly_danger}
            className="w-6 h-6 mx-auto my-2.5"
          />
        </div>
      </div>
    </Link>
  );
};

export default DangerButton;
