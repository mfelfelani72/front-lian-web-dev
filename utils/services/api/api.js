import axios from "axios";

// Functions

import GetAppToken from "./GetAppToken";

export default axios.create({
  baseURL: process.env.SERVER_ROOT_ROUTE,

  headers: {
    Accept: "application/json",
    "Content-Type": "application/json; charset=utf-8",
    Authorization: GetAppToken("base"),
  },

  withCredentials: true,
  withXSRFToken: true,
});
