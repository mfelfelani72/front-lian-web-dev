import React from "react";

// Components

import Image from "./Image.jsx";

// Functions

import { cn } from "../../../../utils/lib/cn.js";

// Svg

import loader from "../../../../assets/icons/svg/12-dots-scale-rotate.svg";

const LoaderDotSpinner = ({ className, ...props }) => {
  return (
    <Image
      {...props}
      alt="loader"
      src={loader}
      className={cn("absolute left-0 w-6 h-6 mx-4 invert-[100%]", className)}
    />
  );
};

export default LoaderDotSpinner;
