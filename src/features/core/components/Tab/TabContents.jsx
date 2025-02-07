import React from "react";

export const TabContentsDefault = ({ className, ...props }) => {
  return (
    <>
      {/* tab content */}
      <div className="flex flex-col">
        <div className="relative">
          {props?.contents.map((item, index) => (
            <div
              key={index}
              className={`tab-content-${props?.parentId} tab-${index}-content-${
                props?.parentId
              } w-full absolute right-0 top-0 transition-transform transform duration-700 ${
                index !== 0 && "scale-0"
              } z-10`}
            >
              <div id={"contents-id-" + index} className="flex flex-col">
                {item}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
