import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

// Components

import { ToastWarning } from "./Toast.jsx";

const PreventReloadComponent = ({ children }) => {
  // hooks
  const { t } = useTranslation();

  // constants
  let thisY = "";
  let isRefreshing = false;

  // functions

  // --> for show warning message
  const showHideWarning = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.classList.remove("translate-x-full");
      element.classList.add("translate-x-0");

      setTimeout(() => {
        element.classList.remove("translate-x-0");
        element.classList.add("translate-x-full");
      }, 5000);
    }
  };

  // --> for F5
  const handleKeyDown = (event) => {
    if (
      event.key === "F5" ||
      (event.ctrlKey && event.key === "r") ||
      (event.metaKey && event.key === "r") ||
      (event.ctrlKey && event.shiftKey && event.key === "R")
    ) {
      event.preventDefault();
      showHideWarning("warning-reload-page");
    }
  };

  // --> for prevent reload page

  const preventReload = (e) => {
    const currentY = e.touches[0].clientY;

    if (currentY > thisY && window.scrollY === 0) {
      if (typeof e.cancelable !== "boolean" || e.cancelable) {
        e.preventDefault();
      } else {
        console.warn(`The following event couldn't be canceled:`);
        console.dir(e);
      }

      if (!isRefreshing) {
        isRefreshing = true;

        showHideWarning("warning-reload-page");

        setTimeout(() => {
          isRefreshing = false;
        }, 2000);
      }
    }
  };

  const saveY = (e) => {
    thisY = e.touches[0].clientY;
  };

  useEffect(() => {

    const keyDownListener = (e) => handleKeyDown(e);
    const touchStartListener = (e) => saveY(e);
    const touchMoveListener = (e) => preventReload(e);

    // for F5

    document.addEventListener("keydown", keyDownListener);

    // for prevent reload page

    document.addEventListener("touchstart", touchStartListener, {
      passive: true,
    });
    document.addEventListener("touchmove", touchMoveListener, {
      passive: false,
    });

    return () => {
      // for F5
      document.removeEventListener("keydown", keyDownListener);

      // for prevent reload page
      document.removeEventListener("touchstart", touchStartListener);
      document.removeEventListener("touchmove", touchMoveListener);
    };
  }, []);
  return (
    <>
      <div className="xs:fixed inset-y-0 left-0 w-full xs:w-[calc(50%-12.5rem)] bg-white z-[70]"></div>
      <div className="xs:fixed inset-y-0 right-0 w-full xs:w-[calc(50%-12.5rem)] bg-white z-[70]"></div>
      <div
        id="warning-reload-page"
        className="absolute top-4 transform transition-transform duration-500 translate-x-full z-[60]"
      >
        <ToastWarning text={t("warning_reload_page")} />
      </div>
      {children}
    </>
  );
};

export default PreventReloadComponent;
