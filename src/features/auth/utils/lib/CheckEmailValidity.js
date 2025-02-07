// functions
import { ConnectToServer } from "../../../../../utils/services/api/ConnectToServer.js";

// constants
import { serverEmailCheck } from "../constants/api.constants.js";

const CheckEmailValidity = (input_value) => {
  const parameter = {
    email: input_value,
  };
  return ConnectToServer(
    "post",
    serverEmailCheck,
    parameter,
    "",
    "check_email_validity"
  );
};

export default CheckEmailValidity;
