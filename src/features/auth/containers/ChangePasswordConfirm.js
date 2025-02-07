import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

// Components

import {
  InputPassword,
  InputRePassword,
} from "../../core/components/Input.jsx";
import BackButton from "../../core/components/BackButton.jsx";
import Button from "../../core/components/Button.jsx";
import TypoTextButton from "../../core/components/TypoTextButton.jsx";
import TypoTextTitle from "../../core/components/TypoTextTitle.jsx";
import TypoTextInfo from "../../core/components/TypoTextInfo.jsx";
import TypoTextInputLabel from "../../core/components/TypoTextInputLabel.jsx";
import Modal from "../../core/components/Modal.jsx";
import { ModalContentSuccess } from "../../core/components/ModalContent.jsx";
import LoaderDotSpinner from "../../core/components/LoaderDotSpinner.jsx";
import PreventReloadComponent from "../../core/components/PreventReloadComponent.jsx";

// Functions

import ChangeUserPassword from "../utils/lib/ChangeUserPassword.js";

// Zustand

import useAppStore from "../../../app/stores/AppStore.js";

const ChangePassword = () => {
  // hooks
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  // cookies
  const [cookies, setCookies] = useCookies(["csrftoken"]);

  // states
  const [modalTitle, setModalTitle] = useState();

  const { sendRequest, setSendRequest } = useAppStore((state) => ({
    sendRequest: state.sendRequest,
    setSendRequest: state.setSendRequest,
  }));

  // functions
  const handleClick = () => {
    if (!sendRequest)
      ChangeUserPassword(
        location?.state?.from_location,
        navigate,
        location?.state,
        setModalTitle,
        setSendRequest
      );
    setSendRequest(true);
  };

  return (
    <PreventReloadComponent>
      <div className="p-4 xs:justify-self-center xs:w-[25rem]">
        <div className="flex flex-col justify-start mt-2 h-[calc(100vh-6rem)]">
          <BackButton
            to={
              location?.state?.from_location === "sign_up"
                ? "/"
                : location?.state?.from_location === "change_password"
                ? "/change-password"
                : "/"
            }
          />
          <TypoTextTitle className="mt-8">
            {location?.state?.from_location === "sign_up"
              ? t("define_password")
              : t("change_password")}
          </TypoTextTitle>

          <TypoTextInfo className="mt-3">
            {location?.state?.from_location === "sign_up"
              ? t("enter_password")
              : t("enter_new_password")}
          </TypoTextInfo>

          <TypoTextInputLabel className="mt-4 mb-1 mx-3">
            {t("password")}
          </TypoTextInputLabel>

          <InputPassword id="ch_password" type="change_password" />

          <TypoTextInputLabel className="mt-6 mb-1 mx-3">
            {t("re_password")}
          </TypoTextInputLabel>

          <InputRePassword Button_id="save_password" id="ch_confirm_password" />
        </div>
        {/* modal */}
        <Modal id="modal">
          <ModalContentSuccess
            navigate={navigate}
            to={"/"}
            id="modal"
            buttonTitle={"sign_in"}
          >
            <div className="flex-col items-center gap-2 flex">
              <TypoTextTitle className="text-[1rem]">
                {t(modalTitle)}
              </TypoTextTitle>
            </div>
          </ModalContentSuccess>
        </Modal>

        {/* modal */}
        <div className="fixed bottom-4 w-[calc(100vw-2rem)] xs:w-[23rem]">
          <Button
            id="save_password"
            className={"hidden relative cursor-pointer"}
            onClick={() => handleClick()}
            type="no_link"
          >
            <TypoTextButton className="text-white">
              {t("save_password")}
            </TypoTextButton>
            {sendRequest && <LoaderDotSpinner />}
          </Button>
          <Button
            id="save_password_disable"
            className="flex bg-Neutral/100 hover:bg-Neutral/100 focus:bg-Neutral/100 pointer-events-none cursor-default"
          >
            <TypoTextButton className="text-white">
              {t("save_password")}
            </TypoTextButton>
          </Button>
        </div>
      </div>
    </PreventReloadComponent>
  );
};

export default ChangePassword;
