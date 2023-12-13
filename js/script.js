 // Función para cambiar el idioma
 function changeLanguage(lang) {
    // Utiliza fetch para cargar el contenido desde el archivo JSON
    fetch('./json/texto.json')
      .then(response => response.json())
      .then(data => {
        // Selecciona el idioma deseado
        const aboutContent = data.about.idioma[lang];

        // Mostrar el contenido en el elemento con id "cont-about"
        document.getElementById("cont-about").innerText = aboutContent;
      })
      .catch(error => console.error('Error al cargar el archivo JSON:', error));
  }

  // Carga el contenido predeterminado (ES)
  changeLanguage('es');

  document.addEventListener("DOMContentLoaded", function() {
    // Crear el elemento del efecto de iluminación
    var mouseGlow = document.createElement("div");
    mouseGlow.id = "mouse-glow";
    document.body.appendChild(mouseGlow);

    // Seguir la posición del ratón y aplicar el efecto
    document.addEventListener("mousemove", function(event) {
        var x = event.clientX;
        var y = event.clientY;

        mouseGlow.style.left = x + "px";
        mouseGlow.style.top = y + "px";
    });
});
