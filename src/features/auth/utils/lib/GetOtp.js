// Functions

import SetErrorOnInput from "../../../../../utils/lib/SetErrorOnInput.js";
import CheckEmailValidity from "./CheckEmailValidity.js";
import CheckPhonenumberValidity from "./CheckPhonenumberValidity.js";
import { ConnectToServer } from "../../../../../utils/services/api/ConnectToServer.js";

// Constants

import { getUserId } from "../constants/api.constants.js";

const GetOtp = (
  from_location,
  navigate,
  param,
  type,
  setErrors,
  setSendRequest
) => {
  const input_value = document.getElementById(param)?.value;

  if (type === "email") {
    const result = CheckEmailValidity(input_value);

    result.then((response) => {
      // from sign_up
      if (from_location === "sign_up") {
        if (response?.data?.return) {
          setSendRequest(false);
          return navigate("/confirm", {
            state: {
              type: type,
              input_value: input_value,
              from_location: from_location,
            },
          });
        } else if (response?.data?.message === "email exists") {
          setSendRequest(false);
          setErrors({ email: "email_exist" });
          SetErrorOnInput(param);
        }
      }
      // from change_password
      else if (from_location === "change_password") {
        if (!response?.data?.return) {
          const parameterGetUser = {
            email: input_value,
            phonenumber: "",
          };
          ConnectToServer(
            "post",
            getUserId,
            parameterGetUser,
            "",
            "getUserId"
          ).then((responseGetUserId) => {
            if (responseGetUserId?.data?.return) {
              setSendRequest(false);
              return navigate("/confirm", {
                state: {
                  type: type,
                  input_value: input_value,
                  key: responseGetUserId?.data?.user_id,
                  from_location: from_location,
                },
              });
            } else {
              setSendRequest(false);
              setErrors({ email: "sorry" });
              SetErrorOnInput(param);
            }
          });
        } else {
          setSendRequest(false);
          setErrors({ email: "email_not_exist" });
          SetErrorOnInput(param);
        }
      }
    });
  } else if (type === "phonenumber") {
    const result = CheckPhonenumberValidity(input_value);
    result.then((response) => {
      // from sign_up
      if (from_location === "sign_up") {
        if (response?.data?.return) {
          setSendRequest(false);
          return navigate("/confirm", {
            state: {
              type: type,
              input_value: input_value,
              from_location: from_location,
            },
          });
        } else if (response?.data?.message === "phone number exists") {
          setSendRequest(false);
          setErrors({ mobile: "phone_number_exists" });
          SetErrorOnInput(param);
        }
      }
      // from change_password
      else if (from_location === "change_password") {
        if (!response?.data?.return) {
          const parameterGetUser = {
            email: "",
            phonenumber: input_value,
          };
          ConnectToServer(
            "post",
            getUserId,
            parameterGetUser,
            "",
            "getUserId"
          ).then((responseGetUserId) => {
            if (responseGetUserId?.data?.return) {
              setSendRequest(false);
              return navigate("/confirm", {
                state: {
                  type: type,
                  input_value: input_value,
                  key: responseGetUserId?.data?.user_id,
                  from_location: from_location,
                },
              });
            } else {
              setSendRequest(false);
              setErrors({ mobile: "sorry" });
              SetErrorOnInput(param);
            }
          });
        } else {
          setSendRequest(false);
          setErrors({ mobile: "phone_number_not_exist" });
          SetErrorOnInput(param);
        }
      }
    });
  }
};

export default GetOtp;
