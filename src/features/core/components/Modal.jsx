import React from "react";

// Components

import { Overlay } from "../../core/components/Overlay.jsx";

// Functions

import { cn } from "../../../../utils/lib/cn";

const Modal = ({ children, className, ...props }) => {
  return (
    <>
      <Overlay overlayId={props?.id + "-overlayNotClickable"} />
      <div className="flex">
        <div className="">
          <dialog
            {...props}
            tabIndex="-1"
            className={cn(
              "rounded-2xl w-[23rem] focus:outline-none",
              className
            )}
          >
            {children}
          </dialog>
        </div>
      </div>
    </>
  );
};

export default Modal;
