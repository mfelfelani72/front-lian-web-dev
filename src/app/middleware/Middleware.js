// Functions

import IsLogin from "../../features/auth/utils/lib/IsLogin";

// Constants

import {
  REDIRECT_ROUTES,
  ALL_ROUTES,
  NOT_RELOAD_ROUTES,
} from "../utils/constant/Routes";

const Middleware = (location, navigate) => {
  // 404 page
  if (!ALL_ROUTES.includes(location.pathname)) return "404";

  //403 page
  // if (!ALL_ROUTES.includes(location.pathname)) return "403";
  // return "403";

  // for prevent reload page
  for (let index = 0; index < NOT_RELOAD_ROUTES.length; index++)
    if (NOT_RELOAD_ROUTES[index][1].includes(location.pathname)) {
      if (NOT_RELOAD_ROUTES[index][0] === "is_login" && IsLogin() == true)
        navigate("/");
      else if (NOT_RELOAD_ROUTES[index][0] === "is_login" && IsLogin() == false)
        navigate(location.pathname);
      else if (NOT_RELOAD_ROUTES[index][0] === "from_location")
        navigate("/" + location?.state?.from_location?.replace(/_/g, "-"), {
          state: { from_location: location?.state?.from_location },
        });
      else navigate(NOT_RELOAD_ROUTES[index][0]);
    }

  // redirect landing
  if (REDIRECT_ROUTES.includes(location.pathname) && IsLogin() === false) {
    navigate("/landing");
  }

  // redirect dashboard
  else if (REDIRECT_ROUTES.includes(location.pathname) && IsLogin() === true) {
    navigate("/dashboard", { state: { from_location: "redirect" } });
  }

  // show landing page
  else if (location.pathname === "/") {
    if (IsLogin() === true) navigate("/dashboard");
    else navigate("/landing");
  }

  return "app";
};

export default Middleware;
