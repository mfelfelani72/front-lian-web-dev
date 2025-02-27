import React from 'react'

// Components

import Image from "../../features/core/components/Image.jsx"
import TypoTextTitle from "../../features/core/components/TypoTextTitle.jsx"

// Svg

import trade_logo from "../../../assets/images/png/trade-logo.png"

const WelcomeLanding = () => {
  return (
    <>
      <div className="p-4 xs:w-[25rem] bg-[#FF3951] h-full">
        <div className="flex flex-col gap-4 justify-center items-center h-full w-full">
          <Image src={trade_logo} alt="trade-logo" className={"w-[250px] h-[180px]"} />
          <TypoTextTitle className={"text-white text-3xl font-spaceGrotesk"} >Lian system</TypoTextTitle>
        </div>
      </div>
    </>
  )
}

export default WelcomeLanding