// Functions

import { BankDetection } from "../helper/BankDetection";

const invalidFormAddCard = () => {
  document.getElementById("save").classList.add("hidden");
  document.getElementById("save").classList.remove("flex");
  document.getElementById("save_disable").classList.remove("hidden");
};

const validFormAddCard = () => {
  document.getElementById("save").classList.remove("hidden");
  document.getElementById("save").classList.add("flex");
  document.getElementById("save_disable").classList.add("hidden");
};

export const checkFillFormAddCard = (id) => {
  const form = document.getElementById(id);
  if (
    form.querySelector("#card_number").value === "" ||
    form.querySelector("#card_account").value === "" ||
    form.querySelector("#card_sheba").value === "" ||
    form.querySelector("#month").value === "" ||
    form.querySelector("#year").value === ""
  )
    invalidFormAddCard();
  else validFormAddCard();
};

const invalidCardNumber = (id) => {
  const input = document.getElementById(id);
  input.classList.remove("border-secondary/100");
  input.classList.add("border-Error/400");
  document.getElementById(id + "_error_message").classList.remove("hidden");
  document.getElementById(id + "_close").classList.add("hidden");
  document.getElementById(id + "_danger").classList.remove("hidden");
};

export const CheckCardNumber = (id, setError, banks) => {
  if (document.getElementById(id).value.length < 16) {
    invalidCardNumber(id);

    setError({ card_number: "less_16" });

    return false;
  } else if (
    BankDetection(banks, document.getElementById(id).value.slice(0, 6)).logo ===
    ""
  ) {
    invalidCardNumber(id);
    setError({ card_number: "lack_of_support" });

    return false;
  }

  return true;
};
