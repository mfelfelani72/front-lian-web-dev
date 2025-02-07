let flag;
let code = "";
const ConfirmInputControl = (e, setChildConfirmCode, index) => {
  const otpInputs = document.getElementsByClassName(`otp-input-${index}`)[0];

  if (!/^[0-9]$/.test(e.target.value)) {
    e.target.value = "";
  }

  otpInputs.addEventListener("keydown", handleKeydown);

  if (flag === "true") {
    otpInputs.removeEventListener("keydown", handleKeydown);
    if (index !== 1) {
      document
        .getElementsByClassName(`otp-input-${index - 1}`)[0]
        .classList.remove("border-Tertiary/500");
      document
        .getElementsByClassName(`otp-input-${index - 1}`)[0]
        .classList.add("border-Tertiary/100");
      document.getElementsByClassName(`otp-input-${index - 1}`)[0].focus();
    }
  }
  if (index === 5) {
    const inputs = document.getElementsByClassName("input");

    for (let i = 0; i < 5; i++) {
      code = code + inputs[i].value;
    }
    if (code.length < 5) code = "";

    for (let i = 0; i < 5; i++) {
      inputs[i].classList.remove(
        "!bg-Error/50",
        "!border-Error/400",
        "focus:!border-Error/400"
      );
    }

    if (code.length == 5) {
      setChildConfirmCode(code);
      code = "";
    }
  }
  flag = "false";
};
const handleKeydown = (e) => {
  if (e.key === "Backspace" || e.key === "Delete") {
    flag = "true";
    code = code.slice(0, -1);
  } else if (e.key >= 0 && e.key <= 9) {
    if (
      parseInt(e.target.classList[0].slice(-1)) !== 5 &&
      e.target.value.length == 1
    ) {
      document
        .getElementsByClassName(
          `otp-input-${parseInt(e.target.classList[0].slice(-1))}`
        )[0]
        .classList.remove("border-Tertiary/100");
      document
        .getElementsByClassName(
          `otp-input-${parseInt(e.target.classList[0].slice(-1))}`
        )[0]
        .classList.add("border-Tertiary/500");

      document
        .getElementsByClassName(
          `otp-input-${parseInt(e.target.classList[0].slice(-1)) + 1}`
        )[0]
        .focus();
    } else if (parseInt(e.target.classList[0].slice(-1)) == 5) {
      document.getElementsByClassName(`otp-input-5`)[0].value = "";
      document.getElementsByClassName(`otp-input-5`)[0].value = document
        .getElementsByClassName(`otp-input-5`)[0]
        .value.slice(0, 1);
      code = code.slice(0, -1);
    }
  }
};

export default ConfirmInputControl;
