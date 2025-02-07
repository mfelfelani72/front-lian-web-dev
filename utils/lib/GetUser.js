// functions

import { ConnectToServer } from "../services/api/ConnectToServer.js";

// constants

import { getUser } from "../../src/features/auth/utils/constants/api.constants.js";

const GetUser = (setKey) => {
  if (sessionStorage.getItem("key")) {
    const header = {
      headers: {
        Authorization: sessionStorage.getItem("session_id"),
      },
    };
    ConnectToServer(
      "get",
      getUser + sessionStorage.getItem("key"),
      "",
      header,
      "Get User"
    ).then((responseUser) => {
      if (responseUser?.data?.return) {
        setKey(responseUser?.data?.user);
      } else {
        console.log(responseUser);
      }
    });
  }
};

export default GetUser;
