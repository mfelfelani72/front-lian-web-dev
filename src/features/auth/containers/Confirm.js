import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

// Components

import ConfirmInput from "../components/ConfirmInput.jsx";
import BackButton from "../../core/components/BackButton.jsx";
import TextButton from "../../core/components/TextButton.jsx";
import TypoTextTitle from "../../core/components/TypoTextTitle.jsx";
import TypoTextInfo from "../../core/components/TypoTextInfo.jsx";
import Image from "../../core/components/Image.jsx";
import PreventReloadComponent from "../../core/components/PreventReloadComponent.jsx";

// Svg

import arrow_circle from "../../../../assets/icons/svg/tp.svg";
import clock from "../../../../assets/icons/svg/tc.svg";

// Functions

import { ConnectToServer } from "../../../../utils/services/api/ConnectToServer.js";
import Register from "../utils/lib/Register.js";

// Constants

import {
  serverOtpRequest,
  serverOtpCheck,
  serverOtpRequestKnown,
  serverOtpCheckKnown,
} from "../utils/constants/api.constants.js";

// Zustand

import useAppStore from "../../../app/stores/AppStore.js";

const Confirm = () => {
  // hooks
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  //  cookies
  const [cookies] = useCookies(["csrftoken"]);

  // states
  const [otpCode, setOtpCode] = useState();
  const [parameter, setParameter] = useState([]);
  const [endPointOtp, setEndPointOtp] = useState("null");
  const [endPointCheckOtp, setEndPointCheckOtp] = useState("null");

  const { sendRequest, setSendRequest } = useAppStore((state) => ({
    sendRequest: state.sendRequest,
    setSendRequest: state.setSendRequest,
  }));

  let confirmCode = "";

  const Countdown = (number) => {
    // clear all interval and timeout
    const interval_id = window.setInterval(function () {},
    Number.MAX_SAFE_INTEGER);
    // Clear any timeout/interval up to that id
    for (let i = 1; i < interval_id; i++) {
      window.clearInterval(i);
    }
    // start interval
    const interval = setInterval(() => {
      const time = document.getElementById("time_text");
      const confirm_button = document.getElementById("confirm_button");
      if (number === 0) {
        clearInterval(interval);
        if (time) {
          document.getElementById("time").classList.remove("flex");
          document.getElementById("time").classList.add("hidden");
        }
        if (confirm_button) {
          confirm_button.classList.remove("hidden");
          confirm_button.classList.add("flex");
        }
      }
      number--;
      if (time) time.textContent = number;
    }, 1000);
  };

  const handleConfirmCode = (value) => {
    let parameterConfirmCode = "";

    // set error on confirm inputs
    if (value !== otpCode) {
      const inputs = document.getElementsByClassName("input");

      for (let i = 0; i < 5; i++) {
        inputs[i].classList.add(
          "!bg-Error/50",
          "!border-Error/400",
          "focus:!border-Error/400"
        );
      }
    } else {
      // sign_up
      if (location?.state?.from_location === "sign_up") {
        parameterConfirmCode = {
          mode: location?.state?.type,
          mode_value: location?.state?.input_value,
          otp: value,
          purpose: "login",
        };
      }
      // change_password
      else if (location?.state?.from_location === "change_password") {
        parameterConfirmCode = {
          user_id: location?.state?.key,
          otp: value,
          purpose: "login",
        };
      }
      document.getElementById("time").classList.remove("flex");
      document.getElementById("time").classList.add("hidden");
      // send otp to server for check it
      ConnectToServer(
        "post",
        endPointCheckOtp,
        parameterConfirmCode,
        "",
        "check_otp"
      ).then((response) => {
        if (response?.data?.return) {
          // sign_up
          if (location?.state?.from_location === "sign_up") {
            Register(
              location?.state?.from_location,
              navigate,
              location?.state?.input_value,
              location?.state?.type
            );
          }
          // change_password
          else if (location?.state?.from_location === "change_password") {
            return navigate("/change-password-confirm", {
              state: {
                param: location?.state?.input_value,
                key: location?.state?.key,
                user_token: response?.data?.user_token,
                from_location: location?.state?.from_location,
                type: location?.state?.type,
              },
            });
          }
        }
        // error, when check otp
        else {
          document.getElementById("time").classList.remove("hidden");
          document.getElementById("time").classList.add("flex");
          console.log(response);
        }
      });
    }
  };

  const GetConfirmCode = () => {
    document.getElementById("confirm_button").classList.add("hidden");
    ConnectToServer("post", endPointOtp, parameter, "", "send_otp").then(
      (response) => {
        if (response?.data?.return) {
          document.getElementById("time_text").textContent =
            response?.data?.expires_in;
          Countdown(response?.data?.expires_in);
          document.getElementById("time").classList.remove("hidden");
          document.getElementById("time").classList.add("flex");
          setOtpCode(response?.data?.otp);
          console.log(response?.data?.otp);
        } else {
          console.log(response?.data);
        }
      }
    );
  };

  useEffect(() => {
    // sign_up
    if (location?.state?.from_location == "sign_up") {
      setEndPointOtp(serverOtpRequest);
      setEndPointCheckOtp(serverOtpCheck);
      setParameter({
        mode: location?.state?.type,
        mode_value: location?.state?.input_value,
        purpose: "login",
      });
    }
    // change_password
    else if (location?.state?.from_location == "change_password") {
      setEndPointOtp(serverOtpRequestKnown);
      setEndPointCheckOtp(serverOtpCheckKnown);

      setParameter({
        user_id: location?.state?.key,
        purpose: "login",
      });
    }

    // send request to get otp
    if (endPointOtp !== "null" && endPointCheckOtp !== "null") {
      GetConfirmCode();
    }
  }, [endPointOtp, endPointCheckOtp]);
  return (
    <PreventReloadComponent>
      <div className="p-4 xs:justify-self-center xs:w-[25rem]">
        <div className="flex flex-col justify-start h-[calc(100vh-4rem)]">
          <BackButton
            to={
              location?.state?.from_location === "sign_up"
                ? "/"
                : location?.state?.from_location === "change_password"
                ? "/change-password"
                : "/"
            }
          />

          <TypoTextTitle className="mt-8">{t("confirm_code")}</TypoTextTitle>
          <TypoTextInfo className="mt-3">
            {t("send_to")} {location?.state?.input_value}
          </TypoTextInfo>

          <ConfirmInput setChildConfirmCode={handleConfirmCode} />

          <div id="time" className="hidden w-full gap-2 justify-center mt-16">
            <div className="flex items-center gap-2">
              <Image alt="clock" src={clock} className="w-6 h-6" />
            </div>
            <div className="mt-1 text-center text-Neutral/500 text-[1rem] leading-6 font-bold">
              <span id="time_text"></span>
              <span>{t("to_send_again_code")}</span>
            </div>
          </div>
        </div>
        <div className="fixed bottom-4 w-[calc(100vw-2rem)] xs:w-[23rem]">
          <div id="confirm_button" className="hidden justify-between">
            <TypoTextInfo className="text-[0.88rem] leading-5 font-bold">
              {t("question_confirm_code")}
            </TypoTextInfo>
            <TextButton
              type="no_link"
              onClick={() => GetConfirmCode()}
              className="flex items-center gap-2"
            >
              <Image
                alt="arrow_circle"
                src={arrow_circle}
                className="w-6 h-6"
              />
              {t("get_again_confirm")}
            </TextButton>
          </div>
        </div>
      </div>
    </PreventReloadComponent>
  );
};

export default Confirm;
