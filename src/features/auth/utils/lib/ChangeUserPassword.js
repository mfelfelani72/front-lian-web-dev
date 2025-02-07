// functions
import { ShowModal } from "../../../../../utils/lib/Modal.js";
import { ConnectToServer } from "../../../../../utils/services/api/ConnectToServer.js";

// constants
import { userEdit, userLogin } from "../constants/api.constants.js";

const ChangeUserPassword = (
  from_location,
  navigate,
  data,
  setModalTitle,
  setSendRequest
) => {
  const password = document.getElementById("ch_password").value;
  const confirm_password = document.getElementById("ch_confirm_password").value;

  if (password === confirm_password) {
    const parameter = {
      user_id: data?.key,
      password: password,
      phonenumber: "",
      first_name: "",
      last_name: "",
      is_active: true,
      user_type: "user",
      telegram_id: "",
    };
    const header = {
      headers: {
        "X-CSRFTOKEN": data?.csrf_token,
        Authorization: data?.user_token,
      },
    };
    ConnectToServer("post", userEdit, parameter, header, "user_edit").then(
      (response) => {
        if (response?.data?.return) {
          let parameterLogin = "";
          if (from_location === "sign_up") setModalTitle("password_changed");
          else setModalTitle("new_password_changed");

          if (data?.type === "email") {
            parameterLogin = {
              email: data?.param,
              phonenumber: "",
              password: password,
            };
          } else if (data?.type === "phonenumber") {
            parameterLogin = {
              email: "",
              phonenumber: data?.param,
              password: password,
            };
          }

          ConnectToServer(
            "post",
            userLogin,
            parameterLogin,
            header,
            "user_login"
          ).then((responseLogin) => {
            if (responseLogin?.data?.return) {
              setSendRequest(false);
              sessionStorage.setItem(
                "session_id",
                responseLogin?.data?.user_token
              );
              sessionStorage.setItem("key", responseLogin?.data?.user_id);
              ShowModal("modal");
            } else {
              setSendRequest(false);
              return navigate("/login");
            }
          });
        } else {
          console.log(response?.data);
        }
      }
    );
  }
};

export default ChangeUserPassword;
