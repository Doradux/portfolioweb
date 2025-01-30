document.addEventListener("DOMContentLoaded", function () {
    var skills = document.querySelectorAll(".skill");
    skills.forEach((skill) => {
      skill.addEventListener("mouseenter", (event) => {
          let element = skill.firstChild;
          // Elimina la clase 'hidden' y agrega 'opacity-0' para que se oculte al principio
          element.classList.remove("opacity-0");
          element.classList.add("opacity-100"); // Hazlo visible
          element.style.transition = "opacity 0.5s ease-in-out"; // Añade una transición de opacidad
      });
  
      skill.addEventListener("mouseleave", (event) => {
          let element = skill.firstChild;
          // Vuelve a agregar 'opacity-0' para ocultarlo con la transición
          element.classList.remove("opacity-100");
          element.classList.add("opacity-0");
          element.style.transition = "opacity 0.5s ease-in-out"; // Añade una transición de opacidad
      });
    });
  });
  