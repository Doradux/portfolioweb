document.addEventListener("DOMContentLoaded", function () {
  var skills = document.querySelectorAll(".skill");
  skills.forEach((skill) => {
    skill.addEventListener("mouseenter", (event) => {
      let element = skill.firstChild;
      // Elimina la clase 'hidden' y agrega 'opacity-0' para que se oculte al principio
      element.classList.remove("opacity-0");
      element.classList.add("opacity-100"); // Hazlo visible
      element.style.transition = "opacity 0.s ease-in-out"; // Añade una transición de opacidad
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

document.addEventListener("DOMContentLoaded", function () {
  var skills = document.querySelectorAll(".skill");
  skills.forEach((skill) => {
    var elements = Array.from(skill.children); // Convertimos a array
    elements.forEach((element) => {
      element.classList.add("absolute");
    });

    skill.addEventListener("mouseenter", () => {
      var color = skill.getAttribute("color"); // Obtiene el valor del atributo color
      var elements = Array.from(skill.children); // Convertimos a array
      elements.forEach((element) => {
        element.style.transition = "0.3s ease-in-out";
        element.style.color = color; // Cambia el color de los hijos
      });

      elements[1].style.transform = "scale(0.8)";
      elements[1].style.transform = "translateY(8px)";
      elements[0].style.transform = "translateY(-12px)";
    });

    skill.addEventListener("mouseleave", () => {
      var elements = Array.from(skill.children);
      elements.forEach((element) => {
        element.style.transition = "0.3s ease-in-out";
        element.style.color = "white"; // Restaura el color al salir
      });
      elements[1].style.transform = "scale(1)";
      elements[1].style.transform = "translateY(0)";
      elements[0].style.transform = "translateY(0)";
    });
  });
});
