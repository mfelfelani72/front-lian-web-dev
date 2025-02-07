const EnableButtonControl = (e, first_id, secound_d) => {
  const botton1 = document.getElementById(first_id);
  const botton2 = document.getElementById(secound_d);

  if (e.target.value.length == 0) {
    botton1.classList.add("hidden");
    botton1.classList.remove("flex");
    botton2.classList.add("flex");
    botton2.classList.remove("hidden");
  } else if (e.target.validity.valid) {
    botton1.classList.add("flex");
    botton1.classList.remove("hidden");
    botton2.classList.add("hidden");
    botton2.classList.remove("flex");
  } else {
    botton1.classList.add("hidden");
    botton1.classList.remove("flex");
    botton2.classList.add("flex");
    botton2.classList.remove("hidden");
  }
};

export default EnableButtonControl;
