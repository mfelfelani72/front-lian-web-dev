import React from "react";

// Components

import { TabTitlesDefault } from "./TabTitles.jsx";
import { TabContentsDefault } from "./TabContents.jsx";

// Functions

import { cn } from "../../../../../utils/lib/cn.js";

export const TabDefault = ({ className, ...props }) => {
  return (
    <div style={props?.style} id={props?.id} className={cn("", className)}>
      <TabTitlesDefault
        parentId={props.id}
        id={"titles-" + props?.id}
        className={props?.classNameTitle}
        titles={props?.titles}
        statePage={props?.statePage}
        setStatePage={props?.setStatePage}
      />
      <TabContentsDefault
        parentId={props?.id}
        id={"contents-" + props?.id}
        contents={props?.contents}
      />
    </div>
  );
};
