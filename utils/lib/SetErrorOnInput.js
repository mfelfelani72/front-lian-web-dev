const SetErrorOnInput = (input_id) => {
  const input = document.getElementById(input_id);
  // email
  if (input_id === "email") {
    input.classList.add("border-Error/500");
    input.classList.remove("border-secondary/100");
    document.getElementById("danger_email").classList.remove("hidden");
    document.getElementById("close_email").classList.add("hidden");
    document.getElementById("input_email_validate").classList.remove("hidden");

    // password
  } else if (input_id === "password") {
    input.classList.remove("border-secondary/100");
    input.classList.add("border-Error/500");
    document.getElementById("danger_password").classList.remove("hidden");
    document.getElementById("close_password").classList.add("hidden");
    document
      .getElementById("input_password_validate")
      .classList.remove("hidden");
  } else if (input_id === "mobile") {
    input.classList.remove("border-secondary/100");
    input.classList.add("border-Error/500");
    document.getElementById("danger_mobile").classList.remove("hidden");
    document.getElementById("close_mobile").classList.add("hidden");
    document.getElementById("input_mobile_validate").classList.remove("hidden");
  } else if (input_id === "telegram") {
    input.classList.remove("border-secondary/100");
    input.classList.add("border-Error/500");
    document.getElementById("danger_telegram").classList.remove("hidden");
    document.getElementById("close_telegram").classList.add("hidden");
    document
      .getElementById("input_telegram_validate")
      .classList.remove("hidden");
  }
};

export default SetErrorOnInput;
