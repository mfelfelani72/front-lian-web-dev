import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// Components

import Image from "./Image.jsx";

// Svg

import swap_nav from "../../../../assets/images/swap-nav.svg";
import dashboard_nav_dark from "../../../../assets/images/dashboard-nav-dark.svg";
import dashboard_nav from "../../../../assets/images/dashboard-nav.svg";
import chart_nav from "../../../../assets/images/chart-nav.svg";
import chart_nav_dark from "../../../../assets/images/chart-nav-dark.svg";
import wallet_nav from "../../../../assets/images/wallet-nav.svg";
import wallet_nav_dark from "../../../../assets/images/wallet-nav-dark.svg";
import document_nav from "../../../../assets/images/document-nav.svg";
import document_nav_dark from "../../../../assets/images/document-nav-dark.svg";

const Navigation = ({ ...props }) => {
  // hooks
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    switch (props?.text) {
      case "dashboard":
        document.getElementById("dashboard_nav").src = dashboard_nav_dark;
        break;
      case "markets":
        document.getElementById("chart_nav").src = chart_nav_dark;
        break;
      case "transactions":
        document.getElementById("swap_nav").classList.remove("bg-primary/400");
        document
          .getElementById("swap_nav")
          .classList.remove("shadow-[0px_4px_20px_0px_rgba(239,176,142,1.00)]");
        document.getElementById("swap_nav").classList.add("bg-Neutral/500");
        document
          .getElementById("swap_nav")
          .classList.add("shadow-[0px_4px_12px_0px_rgba(165,165,171,1.00)]");
        break;
      case "wallet":
        document.getElementById("wallet_nav").src = wallet_nav_dark;
        break;
      case "news":
        document.getElementById("document_nav").src = document_nav_dark;
        break;
    }
  }, []);

  return (
    <div className="fixed w-full xs:w-[25rem] -bottom-1 z-50 select-none">
      <div className="navigation relative w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="76"
          viewBox="0 0 429 76"
          fill="none"
        >
          <path
            d="M166.576 0.486328H14.8934C7.16145 0.486328 0.893433 6.75434 0.893433 14.4863V75.4863H428.893V14.4863C428.893 6.75434 422.625 0.486328 414.893 0.486328H263.211C256.075 0.486328 250.336 6.06434 247.165 12.4581C241.28 24.3272 229.04 32.4863 214.893 32.4863C200.747 32.4863 188.507 24.3272 182.622 12.4581C179.451 6.06434 173.712 0.486328 166.576 0.486328Z"
            fill="white"
          />
        </svg>

        {/* circle */}
        <div
          onClick={() => {
            navigate("/transactions");
          }}
          id="swap_nav"
          className="absolute -top-[2rem] w-[55px] h-[55px] rounded-full left-[calc(50%-27px)] bg-primary/400 shadow-[0px_4px_20px_0px_rgba(239,176,142,1.00)] inline-flex items-center justify-center cursor-pointer z-40"
        >
          <Image
            id="swap_nav"
            src={swap_nav}
            alt="swap_nav"
            className={"w-5 h-5"}
          />
        </div>
        {/* five element */}
        <div className="absolute top-[0.15rem] w-full h-[75px] inline-flex justify-between">
          <div
            onClick={() => {
              navigate("/dashboard");
            }}
            className="w-full py-3 flex-col justify-start items-center gap-1 inline-flex cursor-pointer"
          >
            <Image
              id="dashboard_nav"
              src={dashboard_nav}
              alt="dashboard_nav"
              className={"w-6 h-6"}
            />
            {props?.text === "dashboard" && (
              <div className="text-xs font-medium">{t(props?.text)}</div>
            )}
          </div>
          <div
            onClick={() => {
              navigate("/market");
            }}
            className="w-full py-3 flex-col justify-start items-center gap-1 inline-flex cursor-pointer"
          >
            <Image
              id={"chart_nav"}
              src={chart_nav}
              alt="chart_nav"
              className={"w-6 h-6"}
            />
            {props?.text === "markets" && (
              <div className="text-xs font-medium">{t(props?.text)}</div>
            )}
          </div>
          <div className="w-full py-3 flex-col justify-end items-center gap-1 inline-flex cursor-pointer">
            {props?.text === "transactions" && (
              <div className="text-xs font-medium">{t(props?.text)}</div>
            )}
          </div>
          <div
            onClick={() => {
              navigate("/wallet");
            }}
            className="w-full py-3 flex-col justify-start items-center gap-1 inline-flex cursor-pointer"
          >
            <Image
              id="wallet_nav"
              src={wallet_nav}
              alt="wallet_nav"
              className={"w-6 h-6"}
            />
            {props?.text === "wallet" && (
              <div className="text-xs font-medium">{t(props?.text)}</div>
            )}
          </div>
          <Link
            to="http://79.175.177.113:20300/"
            target="_blank"
            className="w-full py-3 flex-col justify-start items-center gap-1 inline-flex cursor-pointer"
          >
            <Image
              id="document_nav"
              src={document_nav}
              alt="document_nav"
              className={"w-6 h-6"}
            />
            {props?.text === "news" && (
              <div className="text-xs font-medium">{t(props?.text)}</div>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
