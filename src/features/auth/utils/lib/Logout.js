// Functions

import { ConnectToServer } from "../../../../../utils/services/api/ConnectToServer.js";

// Constants

import { userLogout } from "../../utils/constants/api.constants.js";

const Logout = (navigate, setKey, cookies, removeToken) => {
  if (localStorage.getItem("data")) localStorage.removeItem("data");

  const header = {
    headers: {
      "X-CSRFTOKEN": cookies["csrftoken"],
      Authorization: "Bearer " + sessionStorage.getItem("session_id"),
    },
  };
  ConnectToServer("post", userLogout, "", header, "logout").then((response) => {
    if (response?.data?.return) {
      removeToken["sessionid"];
      sessionStorage.clear();
      setKey("empty");

      return navigate("/");
    } else console.log(response?.data);
  });
};

export default Logout;
