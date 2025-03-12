// Functions

import SetErrorOnInput from "../../../../../utils/lib/SetErrorOnInput.js";
import { ConnectToServer } from "../../../../../utils/services/api/ConnectToServer.js";

// constants
import { userRegister } from "../constants/api.constants.js";

const RegisterUser = (navigate, setErrors, parameter, setSendRequest) => {
  ConnectToServer("post", userRegister, parameter, "", "user_register").then(
    (response) => {
      console.log(response);
      if (response?.data?.return) {
        console.log(response);
        navigate("/home");
        setSendRequest(false);
        //   navigate("/change-password-confirm", {
        //     state: {
        //       param: param,
        //       key: response?.data?.user_id,
        //       csrf_token: response?.data?.csrf_token,
        //       user_token: response?.data?.user_token,
        //       from_location: from_location,
        //       type: type,
        //     },
        //   });
      } else {
        console.log(response?.data?.errors);
        setErrors(response?.data?.errors);
        SetErrorOnInput("email");
        setSendRequest(false);
        //   console.log(response?.data);
      }
    }
  );
};

export default RegisterUser;
