import React from "react";
import { Link } from "react-router-dom";

// components
import Image from "./Image.jsx";

// svg
import icon_notification from "../../../../assets/images/icon-notification.svg";

// functions
import { cn } from "../../../../utils/lib/cn.js";

const NotificationButton = ({ children, className, ...props }) => {
  return (
    <Link {...props}>
      <div className="flex items-center self-center px-auto mx-auto">
        <div
          className={cn(
            "relative w-[4.5rem] h-[2.65rem] bg-Neutral/50 rounded-2xl ",
            className
          )}
        >
          <Image
            alt="notification"
            src={icon_notification}
            className="w-6 h-6 mx-auto my-2.5"
          />

          <div className="absolute left-to-right left-9 top-2 min-w-[12px] h-[12px] bg-Error/400 rounded-full">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-Error/400 opacity-40"></span>
            <div className="flex w-full self-center leading-[14px] justify-center px-1 text-xs font-bold text-white">
              +99
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NotificationButton;
