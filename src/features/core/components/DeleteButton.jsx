import React from "react";
import { Link } from "react-router-dom";

// components
import Image from "./Image.jsx";

// svg
import trash from "../../../../assets/images/iconly-delete-black.svg"

// functions
import { cn } from "../../../../utils/lib/cn.js";

const DeleteButton = ({ children, className, ...props }) => {
  return (
    <div {...props}>
      <div className="flex items-center self-center px-auto mx-auto cursor-pointer">
        <div className={cn("w-[4.5rem] h-[2.65rem] bg-Neutral/50 rounded-2xl ",className)}>
          <Image
            alt="trash"
            src={trash}
            className="w-6 h-6 mx-auto my-2.5"
          />
        </div>
      </div>
    </div>
  );
};

export default DeleteButton;
