import axios from "axios";

export default axios.create({
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json; charset=utf-8",
    Authorization: "",
  },

  withCredentials: true,
  withXSRFToken: true,
});
