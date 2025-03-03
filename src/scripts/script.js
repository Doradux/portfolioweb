VANTA.NET({
  el: "#body",
  mouseControls: false,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.0,
  minWidth: 200.0,
  scale: 1.0,
  scaleMobile: 1.0,
  color: "white",
  backgroundColor: "#0f0e0e",
  points: 10.0,
  maxDistance: 10.0,
  showDots: false,
});

// change contents opacity and change header color and hover class
function vanish(clicked, contents, elements, content) {
  Object.values(elements).forEach((element) => {
    element.classList.remove("text-zinc-500");
    element.classList.add("hover:text-zinc-500");
  });
  contents.forEach((content, index) => {
    if (index == clicked) {
      content.style.opacity = 1;
      elements[clicked].classList.add("text-zinc-500");
      elements[clicked].classList.remove("hover:text-zinc-500");
    } else {
      content.style.opacity = 0;
    }
  });
}

function moveContent(clicked, content) {
  console.log(clicked);
  let distance = document.getElementById("about-content").offsetWidth + 40;
  content.style.left = `-${distance * clicked}px`;
}

let currentSectionIndex = 0;

let content = document.getElementById("content");

let resume = document.getElementById("Resume");
let about = document.getElementById("About");
let portfolio = document.getElementById("Portfolio");
let contact = document.getElementById("Contact");

let resumeContent = document.getElementById("resume-content");
let aboutContent = document.getElementById("about-content");
let portfolioContent = document.getElementById("portfolio-content");

let elements = {
  0: about,
  1: resume,
  2: portfolio,
};

let contents = [aboutContent, resumeContent, portfolioContent];



// move content when headed element is clicked
Object.keys(elements).forEach((element) => {
  elements[element].addEventListener("click", function (event) {
    currentSectionIndex = element;
    vanish(element, contents, elements, content);
    moveContent(element, content);
  });
});

// repositionate content when window size is changed
window.addEventListener("resize", function () {
  let distance = document.getElementById("about-content").offsetWidth + 40;
  content.style.left = `-${distance * currentSectionIndex}px`;
});
