import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useCookies } from "react-cookie";

// Components

import Image from "../../core/components/Image.jsx";
import TypoTextTitle from "../../core/components/TypoTextTitle.jsx";
import TypoTextInfo from "../../core/components/TypoTextInfo.jsx";
import {
  InputEmail,
  InputPassword,
  InputText,
  InputMobile,
} from "../../core/components/Input.jsx";
import Button from "../../core/components/Button.jsx";
import TypoTextButton from "../../core/components/TypoTextButton.jsx";
import LoaderDotSpinner from "../../core/components/LoaderDotSpinner.jsx";

// Functions

import EnableButtonControl from "../utils/lib/EnableButtonControl.js";
import RegisterUser from "../utils/lib/RegisterUser.js";

// Svg and Png

import login_register from "../../../../assets/images/png/login-register.png";

// Zustand

import useAppStore from "../../../app/stores/AppStore.js";

const Register = () => {
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
    const parameter = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
      password_confirmation: document.getElementById("password").value,
    };

    if (!sendRequest)
      RegisterUser(navigate, setErrors, parameter, setSendRequest);
    // setSendRequest(true);
  };
  useEffect(()=>{
   console.log(errors["email"]) 
  })
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
              Get Started
            </TypoTextTitle>
            <TypoTextInfo className={"font-spaceGrotesk"}>
              by creating a free account
            </TypoTextInfo>
            <div className="w-full mt-12">
              <InputText id="name" placeholder="Enter full name" />
            </div>
            <div className="w-full mt-6">
              <InputEmail
                id="email"
                placeholder="Enter your email"
                error={errors["email"]}
              />
            </div>
            <div className="w-full mt-6">
              <InputMobile id="mobile" placeholder="Enter your mobile" />
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
                {t("register")}
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
                {t("register")}
              </TypoTextButton>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
