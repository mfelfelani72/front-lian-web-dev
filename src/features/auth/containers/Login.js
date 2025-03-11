import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useCookies } from "react-cookie";

// Components

import Image from "../../core/components/Image.jsx";
import TypoTextTitle from "../../core/components/TypoTextTitle.jsx";
import TypoTextInfo from "../../core/components/TypoTextInfo.jsx";
import { InputEmail, InputPassword } from "../../core/components/Input.jsx";
import Button from "../../core/components/Button.jsx";
import TypoTextButton from "../../core/components/TypoTextButton.jsx";
import LoaderDotSpinner from "../../core/components/LoaderDotSpinner.jsx";

// Functions

import EnableButtonControl from "../utils/lib/EnableButtonControl.js";
import LoginUser from "../utils/lib/Login.js";

// Svg and Png

import login_register from "../../../../assets/images/png/login-register.png";

// Zustand

import useAppStore from "../../../app/stores/AppStore.js";

const Login = () => {
  // hooks
  const { t } = useTranslation();
  const navigate = useNavigate();

  //  cookies
  const [cookies] = useCookies(["csrftoken"]);

  // states
  const [errors, setErrors] = useState([]);

  const { sendRequest, setSendRequest } = useAppStore((state) => ({
    sendRequest: state.sendRequest,
    setSendRequest: state.setSendRequest,
  }));

  // functions
  const handleClick = () => {
    if (!sendRequest)
      LoginUser(navigate, "password", setErrors, cookies, setSendRequest);
    setSendRequest(true);
  };
  return (
    <>
      <div className="flex flex-col h-full w-full xs:w-[25rem] p-8">
        <div className="flex flex-col w-full h-full justify-between">
          {/* content */}
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
            <div className="w-full mt-12">
              <InputEmail id="username" placeholder="Enter your email" />
            </div>
            <div className="w-full mt-6">
              <InputPassword
                type="password"
                id="password"
                placeholder="Password"
                button_first_id="login"
                button_secound_id="login_disable"
                onChange={(event) => {
                  EnableButtonControl(event, "login", "login_disable");
                }}
                error={errors["password"]}
              />
            </div>
          </div>
          {/* end section */}
          <div className="">
            <Button
              id="login"
              type="no_link"
              onClick={() => {
                handleClick();
              }}
              className="hidden relative bg-[#ff3951]"
            >
              <TypoTextButton className="text-white">
                {t("login")}
              </TypoTextButton>
              {sendRequest && (
                <LoaderDotSpinner className={"rtl:left-0 ltr:right-0"} />
              )}
            </Button>
            <Button
              id="login_disable"
              className="flex bg-Neutral/100 hover:bg-Neutral/100 focus:bg-Neutral/100 pointer-events-none cursor-default"
            >
              <TypoTextButton className="text-white">
                {t("login")}
              </TypoTextButton>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
