import React, { useEffect, useState } from "react";

// Components

//  Svg

import starFill from "../../../../assets/images/star-fill.svg";
import star from "../../../../assets/images/star.svg";
import Image from "./Image.jsx";

const StarBox = ({ ...props }) => {
  const [flexRow, setFlexRow] = useState("null");

  const stars = [];
  for (let i = 0; i < props?.count; i++) {
    if (i < props?.count_fill) {
      stars.push(
        <Image
          key={i}
          src={starFill}
          alt={`star-fill-` + i}
          className="w-3 h-3"
        />
      );
    } else {
      stars.push(
        <Image key={i} src={star} alt={`star-` + i} className="w-3 h-3" />
      );
    }
  }
  useEffect(() => {
    if (props?.dir === "ltr") setFlexRow("flex-row-reverse");
    else setFlexRow("flex-row");
  });
  return (
    <>
      {flexRow !== "null" && (
        <div
          style={{ flexDirection: { flexRow } }}
          {...props}
          className="flex px-1"
        >
          {stars}
        </div>
      )}
    </>
  );
};

export default StarBox;
