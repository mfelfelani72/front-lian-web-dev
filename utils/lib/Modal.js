export const ShowModal = (id) => {
  document.getElementById(id).showModal();
  document
    .getElementById(id + "-overlayNotClickable")
    .classList.remove("hidden");
};

export const CloseModal = (id) => {
    document.getElementById(id).close();
  document.getElementById(id + "-overlayNotClickable").classList.add("hidden");
};
