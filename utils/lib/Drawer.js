export const ShowDrawer = ({ location = "bottom", drawerId, overlayId }) => {
  let translate = "translate-y-full";
  const drawer = document.getElementById(drawerId);
  const overlay = document.getElementById(overlayId);

  if (location === "bottom") {
    translate = "translate-y-full";
  } else if (location === "top") {
    translate = "-translate-y-full";
  } else if (location === "left") {
    translate = "-translate-x-full";
  } else if (location === "right") {
    translate = "translate-x-full";
  }

  document.body.style.overflow = "hidden";
  drawer.classList.add("fixed");
  drawer.classList.remove("hidden");
  setTimeout(() => {
    drawer.classList.remove(translate);
  }, 10);
  overlay.classList.remove("hidden");
};

export const CloseDrawer = ({ location = "bottom", drawerId, overlayId }) => {
  let translate = "translate-y-full";

  const drawer = document.getElementById(drawerId);
  const overlay = document.getElementById(overlayId);

  if (location === "bottom") {
    translate = "translate-y-full";
  } else if (location === "top") {
    translate = "-translate-y-full";
  } else if (location === "left") {
    translate = "-translate-x-full";
  } else if (location === "right") {
    translate = "translate-x-full";
  }

  drawer.classList.add(translate);
  setTimeout(() => {
    drawer.classList.add("hidden");
    drawer.classList.remove("fixed");
  }, 200);

  overlay.classList.add("hidden");
  document.body.style.overflow = "auto";
};
