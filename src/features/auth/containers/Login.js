import React from "react";

// Components

import Image from "../../core/components/Image.jsx";
import TypoTextTitle from "../../core/components/TypoTextTitle.jsx";
import TypoTextInfo from "../../core/components/TypoTextInfo.jsx";
import { InputEmail } from "../../core/components/Input.jsx";

// Svg and Png

import login_register from "../../../../assets/images/png/login-register.png";

const Login = () => {
  return (
    <>
      <div className="flex flex-col h-full w-full xs:w-[25rem] p-8">
        <div className="flex flex-col w-full items-center">
          <Image
            src={login_register}
            alt="login_register"
            className={"w-[15rem] h-[15rem]"}
          />
          <TypoTextTitle
            className={"text-[1.5rem] font-bold font-spaceGrotesk"}
          >
            Welcome back
          </TypoTextTitle>
          <TypoTextInfo className={"font-spaceGrotesk"}>
            Sign in to access your account
          </TypoTextInfo>
          <InputEmail />
        </div>
      </div>
    </>
  );
};

export default Login;
