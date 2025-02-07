import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useCookies } from "react-cookie";

// Components

import BackButton from "../../core/components/BackButton.jsx";
import Button from "../../core/components/Button.jsx";
import TypoTextButton from "../../core/components/TypoTextButton.jsx";
import TextButton from "../../core/components/TextButton.jsx";
import { InputText, InputPassword } from "../../core/components/Input.jsx";
import TypoTextTitle from "../../core/components/TypoTextTitle.jsx";
import TypoTextInfo from "../../core/components/TypoTextInfo.jsx";
import TypoTextInputLabel from "../../core/components/TypoTextInputLabel.jsx";
import LoaderDotSpinner from "../../core/components/LoaderDotSpinner.jsx";

// Functions

import EnableButtonControl from "../utils/lib/EnableButtonControl.js";
import LoginUser from "../utils/lib/Login.js";

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
    <div className="p-4 xs:justify-self-center xs:w-[25rem]">
      <div className="flex flex-col justify-start mt-2 h-[calc(100vh-6rem)]">
        <BackButton to="/landing" />

        <TypoTextTitle className="mt-8">{t("sign_in")}</TypoTextTitle>

        <TypoTextInfo className="mt-3">{t("input_info_sign_in")}</TypoTextInfo>
        <div className="flex mt-3">
          <InputText id="username" placeholder="aimoonx@gmail.com" />
        </div>
        <TypoTextInfo className="mt-8">{t("input_pass")}</TypoTextInfo>

        <div className="flex flex-col">
          <TypoTextInputLabel className="mt-3 mb-1 mx-3">
            {t("password")}
          </TypoTextInputLabel>
          <InputPassword
            id="password"
            type="password"
            button_first_id="sign_in"
            button_secound_id="sign_in_disable"
            onChange={(event) => {
              EnableButtonControl(event, "sign_in", "sign_in_disable");
            }}
            error={errors["password"]}
          />

          <div className="flex justify-end mt-3 mx-3">
            <TextButton
              to="/change-password"
              type={"navigate"}
              data={{ from_location: "change_password" }}
              navigate={navigate}
              className="text-[0.75rem] leading-4"
            >
              {t("forgot_password")}
            </TextButton>
          </div>
        </div>
      </div>

      <div className="fixed bottom-4 w-[calc(100vw-2rem)] xs:w-[23rem]">
        <Button
          id="sign_in"
          type="no_link"
          onClick={() => {
            handleClick();
          }}
          className="hidden relative"
        >
          <TypoTextButton className="text-white">
            {t("sign_in")}{" "}
          </TypoTextButton>
          {sendRequest && <LoaderDotSpinner />}
        </Button>
        <Button
          id="sign_in_disable"
          className="flex bg-Neutral/100 hover:bg-Neutral/100 focus:bg-Neutral/100 pointer-events-none cursor-default"
        >
          <TypoTextButton className="text-white">{t("sign_in")}</TypoTextButton>
        </Button>
      </div>
    </div>
  );
};

export default Login;
