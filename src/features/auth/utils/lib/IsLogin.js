const IsLogin = () => {
  if (sessionStorage.getItem("session_id")) return true;
  return false;
};

export default IsLogin;
