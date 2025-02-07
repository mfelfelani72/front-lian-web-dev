import React from "react";
import { useTranslation } from "react-i18next";

//  components
import Button from "../core/components/Button.jsx";
import TypoH1 from "../core/components/TypoH1.jsx";
import TypoTextBotton from "../core/components/TypoTextButton.jsx";
import Image from "../core/components/Image.jsx";

// svg
import aimoonxall from "../../../assets/icons/svg/aimoonxall.svg";
import persona_landing from "../../../assets/icons/svg/persona_landing.svg";
import login from "../../../assets/icons/svg/login.svg";
import plus from "../../../assets/icons/svg/Plus.svg";
import telegram from "../../../assets/icons/svg/tg.svg";
import google from "../../../assets/icons/svg/Google.svg";

const AuthLanding = () => {
  const { t } = useTranslation();

  return (
    <div className="p-4 xs:w-[25rem]">
      <div className="fixed bottom-4 w-[calc(100vw-2rem)] xs:w-[25rem]">
        <div className="flex flex-row">
          <Image
            className="w-[4.56rem] h-[4.56rem]"
            src={aimoonxall}
            alt="logo"
          />
        </div>
        <div className="flex">
          <TypoH1>{t("title")}</TypoH1>
        </div>
        <div className="flex flex-row justify-center my-4">
          <img src={persona_landing} alt="persona landing"></img>
        </div>
        <div className="flex gap-2">
          <Button to="/login" className="basis-1/2">
            <div className="">
              <Image alt="login" src={login} className={"ltr:rotate-180"} />
            </div>
            <TypoTextBotton className="text-white">
              {t("sign_in")}
            </TypoTextBotton>
          </Button>
          <Button
            className="basis-1/2 bg-white/0 hover:bg-white/0 focus:bg-white/0 border border-Neutral/500"
            to="/sign-up"
          >
            <div className="flex flex-row gap-2 ">
              <div className="">
                <Image alt="sign-up" src={plus} />
              </div>
              <TypoTextBotton>{t("sign_up")}</TypoTextBotton>
            </div>
          </Button>
        </div>
        <div className="flex">
          <div className="basis-1/3 h-[0px] my-6 border border-Gray/200"></div>
          <div className="basis-1/3 text-Neutral/300 text-[1rem] leading-6 font-normal text-center my-[0.8rem]">
            {t("or_register")}
          </div>
          <div className="basis-1/3 h-[0px] my-6 border border-Gray/200"></div>
        </div>
        <div className="flex cursor-pointer select-none">
          <div className="w-full h-14 bg-secondary/100 rounded-2xl justify-center items-center gap-2 inline-flex">
            <div className="w-6 h-6">
              <Image alt="telegram" src={telegram} />
            </div>

            <TypoTextBotton>{t("register_telegram")}</TypoTextBotton>
          </div>
        </div>
        <div className="flex cursor-pointer select-none mt-2">
          <div className="w-full h-14 px-4 py-2 bg-Tertiary/100 rounded-2xl justify-center items-center gap-2 inline-flex">
            <div className="w-6 h-6">
              <Image alt="google" src={google} />
            </div>
            <TypoTextBotton>{t("register_google")}</TypoTextBotton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLanding;
