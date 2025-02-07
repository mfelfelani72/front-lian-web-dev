import { ConnectToServer } from "../../../../../utils/services/api/ConnectToServer.js";

// constants
import { userRegisterLogin } from "../constants/api.constants.js";

const Register = (from_location, navigate, param, type) => {
  const parameter = {
    mode: type,
    mode_value: param,
  };
  ConnectToServer(
    "post",
    userRegisterLogin,
    parameter,
    "",
    "user_register"
  ).then((response) => {
    if (response?.data?.return) {
      navigate("/change-password-confirm", {
        state: {
          param: param,
          key: response?.data?.user_id,
          csrf_token: response?.data?.csrf_token,
          user_token: response?.data?.user_token,
          from_location: from_location,
          type: type,
        },
      });
    } else {
      console.log(response?.data);
    }
  });
};

export default Register;
