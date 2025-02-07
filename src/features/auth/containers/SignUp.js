import React from "react";
import { useTranslation } from "react-i18next";

// components
import BackButton from "../../core/components/BackButton.jsx";
import TypoTextTitle from "../../core/components/TypoTextTitle.jsx";
import TypoTextInfo from "../../core/components/TypoTextInfo.jsx";
import TabMobileEmail from "../components/TabMobileEmail.jsx";

const SignUp = () => {
  const { t } = useTranslation();

  return (
    <div className="p-4 xs:justify-self-center xs:w-[25rem]">
      <div className="flex flex-col justify-start mt-2 h-[calc(100vh-6rem)]">
        <BackButton to="/landing" />
        <TypoTextTitle className="mt-8">{t("sign_up")}</TypoTextTitle>
        <TypoTextInfo className="mt-3">{t("choose_email_mobile")}</TypoTextInfo>
        <TabMobileEmail
          mobile_id="mobile"
          email_id="email"
          button_id="sign_up"
          from_location="sign_up"
        />
      </div>
    </div>
  );
};

export default SignUp;
