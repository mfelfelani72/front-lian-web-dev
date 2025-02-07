import React from "react";
import { Link } from "react-router-dom";

// components
import Image from "./Image.jsx";

// svg
import scan from "../../../../assets/images/scan.svg"

// functions
import { cn } from "../../../../utils/lib/cn.js";

const ScanButton = ({ children, className, ...props }) => {
  return (
    <Link {...props}>
      <div className="flex items-center self-center px-auto mx-auto">
        <div className={cn("w-[4.5rem] h-[2.65rem] bg-Neutral/50 rounded-2xl ",className)}>
          <Image
            alt="scan"
            src={scan}
            className="w-6 h-6 mx-auto my-2.5"
          />
        </div>
      </div>
    </Link>
  );
};

export default ScanButton;
