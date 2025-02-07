import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

// Components

import { InputEmail, InputMobile } from "../../core/components/Input.jsx";
import Button from "../../core/components/Button.jsx";
import TypoTextButton from "../../core/components/TypoTextButton.jsx";
import TypoTextInputLabel from "../../core/components/TypoTextInputLabel.jsx";
import LoaderDotSpinner from "../../core/components/LoaderDotSpinner.jsx";

// Functions

import EnableButtonControl from "../utils/lib/EnableButtonControl.js";
import GetOtp from "../utils/lib/GetOtp.js";

// Zustand

import useAppStore from "../../../app/stores/AppStore.js";

const TabMobileEmail = ({ ...props }) => {
  // hooks
  const { t } = useTranslation();
  const navigate = useNavigate();

  // states
  const [errors, setErrors] = useState([]);

  const { sendRequest, setSendRequest } = useAppStore((state) => ({
    sendRequest: state.sendRequest,
    setSendRequest: state.setSendRequest,
  }));

  // functions
  const handleClick = (type) => {
    if (!sendRequest && type === "email") {
      GetOtp(
        props?.from_location,
        navigate,
        props?.email_id,
        type,
        setErrors,
        setSendRequest
      );
    } else if (!sendRequest && type === "phonenumber") {
      GetOtp(
        props?.from_location,
        navigate,
        props?.mobile_id,
        "phonenumber",
        setErrors,
        setSendRequest
      );
    }
    setSendRequest(true);
  };

  useEffect(() => {}, [errors]);
  return (
    <div className="relative">
      <div className="w-full h-12 px-1.5 bg-Tertiary/50 rounded-2xl justify-between items-center gap-1.5 inline-flex">
        <input
          type="radio"
          id="tab1"
          name="tab"
          className="hidden peer/tab1 w-full"
          defaultChecked
        />
        <input
          type="radio"
          id="tab2"
          name="tab"
          className="hidden peer/tab2 w-full"
        />
        <div className="basis-1/2 peer-checked/tab1:bg-white peer-checked/tab1:border border-Tertiary/200 py-1.5 rounded-xl text-center text-Neutral/300 peer-checked/tab1:!text-Neutral/500 font-medium text-[0.9rem] leading-5">
          <label
            htmlFor="tab1"
            className="tab-button cursor-pointer px-[calc(10.2vw)] py-1.5 xs:px-[2rem] xs:py-2 select-none"
          >
            {t("email")}
          </label>
        </div>
        <div className="basis-1/2 peer-checked/tab2:bg-white peer-checked/tab2:border border-Tertiary/200 py-1.5 rounded-xl text-center text-Neutral/300 peer-checked/tab2:!text-Neutral/500 font-medium text-[0.85rem] leading-5">
          <label
            htmlFor="tab2"
            className="tab-button cursor-pointer px-[calc(10.2vw)] py-1.5 xs:px-[2rem] xs:py-2 select-none"
          >
            {t("phone_number")}
          </label>
        </div>

        <div className="tab1-content mt-6 w-full absolute right-0 top-10 hidden peer-checked/tab1:block">
          <TypoTextInputLabel className="mb-1 mx-3">
            {t("email")}
          </TypoTextInputLabel>
          <InputEmail
            id={props?.email_id}
            button_first_id={`${props?.button_id}_email`}
            button_secound_id={`${props?.button_id}_email_disable`}
            onChange={(event) => {
              EnableButtonControl(
                event,
                `${props?.button_id}_email`,
                `${props?.button_id}_email_disable`
              );
            }}
            error={errors["email"]}
          />
          <div className="fixed bottom-4 w-[calc(100vw-2rem)] xs:w-[23rem] cursor-pointer">
            <Button
              onClick={() => handleClick("email")}
              type="no_link"
              id={`${props?.button_id}_email`}
              className="hidden relative"
            >
              <TypoTextButton className="text-white">
                {t(props?.button_id)}
              </TypoTextButton>

              {sendRequest && <LoaderDotSpinner />}
            </Button>

            <Button
              id={`${props?.button_id}_email_disable`}
              className="flex bg-Neutral/100 hover:bg-Neutral/100 focus:bg-Neutral/100 pointer-events-none"
            >
              <TypoTextButton className="text-white">
                {t(props?.button_id)}
              </TypoTextButton>
            </Button>
          </div>
        </div>

        <div className="tab2-content mt-6 absolute w-full top-10 right-0 hidden peer-checked/tab2:block">
          <TypoTextInputLabel className="mb-1 mx-3">
            {t("phone_number")}
          </TypoTextInputLabel>
          <InputMobile
            id={props?.mobile_id}
            placeholder="09150873107"
            button_first_id={`${props?.button_id}_mobile`}
            button_secound_id={`${props?.button_id}_mobile_disable`}
            onChange={(event) => {
              EnableButtonControl(
                event,
                `${props?.button_id}_mobile`,
                `${props?.button_id}_mobile_disable`
              );
            }}
            error={errors["mobile"]}
          />
          <div className="fixed bottom-4 w-[calc(100vw-2rem)] xs:w-[23rem]">
            <Button
              onClick={() => handleClick("phonenumber")}
              type="no_link"
              id={`${props?.button_id}_mobile`}
              className="hidden relative"
            >
              <TypoTextButton className="text-white">
                {t(props?.button_id)}
              </TypoTextButton>
              {sendRequest && <LoaderDotSpinner />}
            </Button>
            <Button
              id={`${props?.button_id}_mobile_disable`}
              className="flex bg-Neutral/100 hover:bg-Neutral/100 focus:bg-Neutral/100 pointer-events-none cursor-default"
            >
              <TypoTextButton className="text-white">
                {t(props?.button_id)}
              </TypoTextButton>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabMobileEmail;
