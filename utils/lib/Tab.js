export const handleChangeTab = (value, parentId) => {
  const scrollContainer = document.getElementById(
    "scrollContainer-" + parentId
  );
  const tabsContent = document.querySelectorAll(".tab-content-" + parentId);

  // for focus tab title
  const containerRect = scrollContainer.getBoundingClientRect();
  const tabTitle = document.getElementById(
    "tab-title-" + value + "-" + parentId
  );
  const rect = tabTitle.getBoundingClientRect();

  if (rect.right > containerRect.right)
    scrollContainer.scrollBy({
      left: rect.right - containerRect.right,
      behavior: "smooth",
    });
  else
    scrollContainer.scrollBy({
      left: rect.left - containerRect.left,
      behavior: "smooth",
    });
  // for focus tab title

  tabsContent.forEach((element, index) => {
    if (index < value) {
      element.classList.remove("translate-x-0");
      element.classList.remove("-translate-x-full");
      element.classList.add("translate-x-full");
      element.classList.add("scale-0");
      document
        .getElementById("tab-title-" + index + "-" + parentId)
        .classList.remove("font-bold");
      document
        .getElementById("below-tab-title-" + index + "-" + parentId)
        .classList.add("hidden");
    } else if (index === value) {
      element.classList.remove("translate-x-full");
      element.classList.remove("-translate-x-full");
      element.classList.add("translate-x-0");
      element.classList.remove("scale-0");
      document
        .getElementById("tab-title-" + index + "-" + parentId)
        .classList.add("font-bold");
      document
        .getElementById("tab-title-" + index + "-" + parentId)
        .classList.remove("font-normal");
      document
        .getElementById("below-tab-title-" + index + "-" + parentId)
        .classList.remove("hidden");
    } else if (index > value) {
      element.classList.remove("translate-x-0");
      element.classList.remove("translate-x-full");
      element.classList.add("-translate-x-full");
      element.classList.add("scale-0");
      if (document.getElementById("tab-title-" + index + "-" + parentId)) {
        document
          .getElementById("tab-title-" + index + "-" + parentId)
          .classList.remove("font-bold");
        document
          .getElementById("below-tab-title-" + index + "-" + parentId)
          .classList.add("hidden");
      }
    }
  });
};
