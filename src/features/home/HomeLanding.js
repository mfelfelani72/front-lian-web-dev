import React from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

// Functions

import IsLogin from "../auth/utils/lib/IsLogin";
import Logout from "../auth/utils/lib/Logout.js";

// Zustand

import useAppStore from "../../app/stores/AppStore.js";

const HomeLanding = () => {
  // hooks
  const navigate = useNavigate();

  //  cookies
  const [cookies, removeToken] = useCookies(["csrftoken"]);

  // states
  const { setKey } = useAppStore((state) => ({
    setKey: state.setKey,
  }));
  return (
    <div className="flex flex-col w-full xs:w-[25rem] h-full items-center justify-center bg-rose-400">
      {IsLogin() === false ? (
        <>
          <div
            className="text-4xl cursor-pointer"
            onClick={() => {
              navigate("/login");
            }}
          >
            login
          </div>
          <div
            className="text-4xl cursor-pointer"
            onClick={() => {
              navigate("/register");
            }}
          >
            register
          </div>
        </>
      ) : (
        <>
          <div
            className="text-4xl cursor-pointer"
            onClick={() => Logout(navigate, setKey, cookies, removeToken)}
          >
            logout
          </div>
        </>
      )}
    </div>
  );
};

export default HomeLanding;
