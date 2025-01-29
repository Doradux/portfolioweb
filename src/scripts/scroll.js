document.addEventListener("DOMContentLoaded", function () {
  const scrollContainer = document.querySelector(".overflow-x-scroll");

  if (scrollContainer) {
    console.log("scroll container");

    scrollContainer.addEventListener("wheel", (event) => {
      event.preventDefault();
      scrollContainer.scrollBy({
        left: event.deltaY,
        behavior: "auto",
      });
    });
  } else {
    console.log("no scroll container");
  }
});

