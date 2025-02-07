import axios from "../../../../../../utils/services/api/api";

import { ConnectToServer } from "../../../../../../utils/services/api/ConnectToServer";

import { userAuth, userLogin } from "../../constants/api.constants";

/**
 * Checks user authentication on the server.
 *
 * @param {string} token - The user token to authenticate.
 * @param {string} csrf - The CSRF token.
 * @return {boolean}
 */
export const checkAuth = async (token, csrf) => {

  const parameter = {
    // user_token: "6526be1989e868305b392eba6c31086e",
    user_token: token,
  };
  const header = {
    headers: {
      "X-CSRFTOKEN": csrf,
    },
  };
  const response = await ConnectToServer(
    "post",
    userAuth,
    parameter,
    header,
    "checkAuth"
  );
  if (response?.data) {

    // this is not best practice but can be work :(((((
console.log(response?.data)
    if (window.location.hostname === "79.175.177.113")
      return response?.data?.return;
    else {
      if (
        token !== null &&
        csrf !== null &&
        window.location.hostname === "localhost"
      )
        return true;
      return false;
    }
  }
};

/**
 * Handles user login.
 *
 * @param {object} req - The request data.
 * @returns {object} - An object with the login result and a state indicator.
 */

export const userLogins = async (req, csrf) => {
  try {
    let res = await axios.post(
      userLogin

      // {
      //   headers: {

      // "X-CSRFTOKEN": csrf || req.csrf,
      // Authorization: process.env.APP_TOKEN,
      //   },
      // },
    );

    return {
      data: res.data,
      state: true,
    };
  } catch {
    return {
      state: false,
    };
  }
};
