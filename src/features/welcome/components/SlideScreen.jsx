import React from 'react'

// Components

import Image from "../../core/components/Image.jsx"
import TypoTextTitle from '../../core/components/TypoTextTitle.jsx'
import TypoTextInfo from '../../core/components/TypoTextInfo.jsx'

// Svg

import slide_screen_1 from "../../../../assets/images/png/slide-screen-1.png"

const SlideScreen = () => {
  return (
   <>
    <div className="p-4 xs:w-[25rem] h-full">
      <div className="flex flex-col items-center justify-center h-full w-full">
        <Image src={slide_screen_1} alt="slide_screen_1" className={"w-[300px] h-[180px]"} />
        <TypoTextTitle className={"w-full text-left font-bold text-3xl mt-[100px]"}>Explore the world easily</TypoTextTitle>
        <TypoTextInfo className={"w-full text-left mt-0.5 text-lg"}>To your desire</TypoTextInfo>
      </div>
    </div>
   </>
  )
}

export default SlideScreen