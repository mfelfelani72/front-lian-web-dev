import axios from "./api";
import axiosSso from "./apiSso";

export const ConnectToServer = async (
  method,
  endPoint,
  parameter,
  header,
  route,
  machinName = "base"
) => {
  if (machinName === "base") {
    try {
      if (method === "post") {
        return await axios.post(endPoint, parameter, header);
      } else if (method === "get") {
        return await axios.get(endPoint, header);
      }
    } catch (error) {
      console.log({
        message:
          "Connection to server failed, this route is: --> " + route + " <--",
        error: error,
      });
      return false;
    }
  } else {
    try {
      const response = await axios.post(
        "Sso/GetUserAsps/",
        {
          user_id: sessionStorage.getItem("key"),
        },
        header
      );
      if (response?.data?.return) {
        for (const element of response.data.Asps) {
          if (element?.asp?.name === machinName) {
            try {
              let tempHeader = { ...header?.headers };

              tempHeader.Authorization = element?.asp?.app_token;

              const aspResponse = await axiosSso.post(
                `${element?.asp?.route_config.http_url}/${endPoint}`,
                parameter,
                { headers: tempHeader }
              );
              return aspResponse;
            } catch (error) {
              console.log({
                message: `Connection to --> ${machinName} server <-- failed, this route is: --> ${route} <--`,
                error: error,
              });
              return false;
            }
          }
        }
      } else {
        console.log(response);
        return false;
      }
    } catch (error) {
      console.log({
        message: "Connection to server failed, this route is: --> sso <--",
        error: error,
      });
      return false;
    }
  }
};
