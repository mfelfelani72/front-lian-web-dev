import React from "react";
import { useTranslation } from "react-i18next";

// Components

import Image from "./Image.jsx";
import Button from "./Button.jsx";
import DeleteBox from "./DeleteBox.jsx";
import TypoTextButton from "./TypoTextButton.jsx";
import TypoTextTitle from "./TypoTextTitle.jsx";
import TypoTextInfo from "./TypoTextInfo.jsx";

// Functions

import { CloseModal } from "../../../../utils/lib/Modal.js";

// Svg

import success from "../../../../assets/icons/svg/success.svg";
import danger_info from "../../../../assets/images/danger-modal-info.svg";

export const ModalContentSuccess = ({ children, ...props }) => {
  // hooks
  const { t } = useTranslation();

  return (
    <>
      <div className="flex m-[2.4rem]">
        <div className="flex-col w-full gap-[1.15rem] items-center inline-flex">
          <div className="inline-flex">
            <Image className={"w-6 h-6"} src={success} alt="success" />
          </div>

          {children}
          <Button
            onClick={() => {
              props?.navigate(props?.to);
            }}
            type="no_link"
            className="w-full h-[2.5rem] py-[0.35rem]"
          >
            <TypoTextButton className="text-white text-[0.88rem]">
              {t(props?.buttonTitle)}
            </TypoTextButton>
          </Button>
        </div>
      </div>
    </>
  );
};
export const ModalContentDelete = ({ children, ...props }) => {
  return (
    <>
      <DeleteBox
        id={props?.contentId}
        question={props?.question}
        boxSize={"h-[12.5rem] w-full"}
        iconSize={"w-10 h-10"}
        className={"px-2"}
        textSize={"text-base"}
        gap={"4"}
        buttonSize={"w-full h-[3rem]"}
        buttonRounded={"rounded-xl"}
        acceptFunction={() => {
          props?.acceptFunction();
        }}
        cancelFunction={() => props?.cancelFunction()}
      />
    </>
  );
};

export const ModalContentInfo = ({ children, ...props }) => {
  // hooks
  const { t } = useTranslation();

  return (
    <>
      <div className="flex flex-col p-4 gap-3">
        <div className="flex justify-center">
          <Image src={danger_info} alt="danger_info" className="w-8 h-8 mt-4" />
        </div>
        <TypoTextTitle className="text-base text-center">
          {props.title}
        </TypoTextTitle>
        <TypoTextInfo className="text-sm">{props?.info}</TypoTextInfo>

        <Button
          onClick={() => {
            CloseModal(props?.modalId);
          }}
          type="no_link"
          className={`mt-4 text-white ${props?.buttonClass}`}
        >
          <TypoTextButton className="text-white">{t("got_it")}</TypoTextButton>
        </Button>
      </div>
    </>
  );
};
