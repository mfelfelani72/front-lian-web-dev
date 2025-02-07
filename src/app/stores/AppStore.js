import { create } from "zustand";

import i18n from "../../../utils/services/i18n";

const configureLang = (id, dir) => {
  i18n.changeLanguage(id);

  const rootHtml = document.getElementById("root-html");
  localStorage.setItem("currentLngId", [id]);
  localStorage.setItem("currentLngDir", [dir]);

  rootHtml.setAttribute("lang", id);

  if (rootHtml && dir == "rtl") rootHtml.setAttribute("dir", "rtl");
  else rootHtml.setAttribute("dir", "ltr");

  return id;
};

const useAppStore = create((set) => ({
  splashScreen: true,
  setSplashScreen: (status) => set({ splashScreen: status }),

  key: "empty",
  setKey: (value) => set({ key: value }),

  sendRequest: false,
  setSendRequest: (status) => set({ sendRequest: status }),

  //    language

  languageApp: "",
  setLanguageApp: (id, dir) =>
    set({
      languageApp: configureLang(id, dir),
    }),

  //    language
}));

export default useAppStore;
