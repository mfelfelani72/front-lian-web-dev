// functions
import { ConnectToServer } from "../../../../../utils/services/api/ConnectToServer.js";

// constants
import { serverPhoneCheck } from "../constants/api.constants.js";

const CheckPhonenumberValidity = (input_value) => {
  const parameter = {
    phonenumber: input_value,
  };
  return ConnectToServer(
    "post",
    serverPhoneCheck,
    parameter,
    "",
    "check_mobile_validity"
  );
};

export default CheckPhonenumberValidity;
