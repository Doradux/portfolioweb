document.addEventListener("DOMContentLoaded", function () {
  const scrollContainer = document.querySelector(".overflow-x-scroll");

  if (scrollContainer) {
    scrollContainer.addEventListener("wheel", (event) => {
      event.preventDefault();
      scrollContainer.scrollBy({
        left: event.deltaY,
        behavior: "auto",
      });
    });
  } else {
  }
});
