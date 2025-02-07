// Functions

import { ConnectToServer } from "../../../../../utils/services/api/ConnectToServer.js";
import SetErrorOnInput from "../../../../../utils/lib/SetErrorOnInput.js";

// Constants

import { userLogin } from "../constants/api.constants.js";

const Login = (navigate, param, setErrors, cookies, setSendRequest) => {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  let parameter = "";

  if (username.includes("@")) {
    parameter = {
      email: username,
      phonenumber: "",
      password: password,
    };
  } else {
    parameter = {
      email: "",
      phonenumber: username,
      password: password,
    };
  }

  const header = {
    headers: {
      "X-CSRFTOKEN": cookies["csrftoken"],
    },
  };

  ConnectToServer("post", userLogin, parameter, header, "login").then(
    (response) => {
      // console.log(response);
      if (response?.data?.return) {
        sessionStorage.setItem("session_id", response?.data?.user_token);
        sessionStorage.setItem("key", response?.data?.user_id);
        setSendRequest(false);
        navigate("/", {
          state: { to_location: "/profile" },
        });
      } else if (response?.data?.return === false) {
        setSendRequest(false);
        setErrors({ password: "login_invalid" });
        SetErrorOnInput(param);
      }
    }
  );
};

export default Login;
