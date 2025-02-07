import React from "react";
import { useTranslation } from "react-i18next";

// components

import BackButton from "../../core/components/BackButton.jsx";
import TextButton from "../../core/components/TextButton.jsx";
import TypoTextTitle from "../../core/components/TypoTextTitle.jsx";
import TypoTextInfo from "../../core/components/TypoTextInfo.jsx";
import TabMobileEmail from "../components/TabMobileEmail.jsx";

const ChangePassword = () => {
  const { t } = useTranslation();
  return (
    <div className="p-4 xs:justify-self-center xs:w-[25rem]">
      <div className="flex flex-col justify-start mt-2 h-[calc(100vh-6rem)]">
        <BackButton to="/login" />
        <TypoTextTitle className="mt-8">{t("change_password")}</TypoTextTitle>
        <div className="flex justify-between mt-3">
          <TypoTextInfo>{t("remmebr_password")}</TypoTextInfo>
          <TextButton to="/login" className="flex items-center gap-2">
            {t("sign_in")}
          </TextButton>
        </div>
        <TabMobileEmail
          mobile_id="mobile"
          email_id="email"
          button_id="get_confirm_code"
          from_location="change_password" 
        />
      </div>
    </div>
  );
};

export default ChangePassword;
