document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => initAccessibility(), 1000);
});

function initAccessibility() {
  const nav = document.querySelector("nav");

  if (nav) {
    const parent = nav.parentElement;
    if (parent) {
      parent.addEventListener("focusin", () => {
        parent.classList.remove("opacity-0");
      });
      parent.addEventListener("focusout", () => {
        parent.classList.add("opacity-0");
      });
    }
  }

  const slideContent = document.querySelector("#slide-content");
  if (slideContent) {
    slideContent.setAttribute("aria-live", "polite");
    slideContent.setAttribute("aria-relevant", "additions text");
  }
}
