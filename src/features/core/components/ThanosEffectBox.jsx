import React from "react";

const ThanosEffectBox = ({ children, className, ...props }) => {
  return (
    <>
      <div className="relative z-20" id={props?.id}>
        {children}
      </div>
      <div
        id={"effect-" + props?.id}
        className={`thanos-effect absolute inset-x-4 text-center pointer-events-none -z-10`}
      ></div>
    </>
  );
};

export default ThanosEffectBox;
