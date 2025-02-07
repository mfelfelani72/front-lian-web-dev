import i18n from "../services/i18n";

const prepareApp = () => {
  // { initial language

  const rootHtml = document.getElementById("root-html");

  if (
    rootHtml &&
    localStorage.getItem("currentLngId") &&
    localStorage.getItem("currentLngDir")
  ) {
    i18n.changeLanguage(localStorage.getItem("currentLngId"));
    rootHtml.setAttribute("dir", localStorage.getItem("currentLngDir"));
  }

  // initial language }

  // { initial theme mode (dark or light)

  if (
    (window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches) ||
    localStorage.getItem("theme") === "dark"
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  // initial theme mode }
};

export default prepareApp;
