// Función para cambiar el idioma
function changeLanguage(lang) {
  // Utiliza fetch para cargar el contenido desde el archivo JSON
  fetch('./json/texto.json')
    .then(response => response.json())
    .then(data => {
      // Selecciona el idioma deseado para la sección "about"
      const aboutContent = data.about.idioma[lang];
      // Mostrar el contenido en el elemento con id "cont-about"
      document.getElementById("cont-about").innerText = aboutContent;

      // Selecciona el idioma deseado para la sección "expe"
      const expeContent = data.expe[lang];

      // Obtén el contenedor donde se mostrará la información de experiencia
      const contExpe = document.getElementById("cont-expe");

      // Limpiar el contenido existente
      contExpe.innerHTML = "";

      // Iterar sobre la información de experiencia y agregarla al contenedor
      expeContent.forEach(experience => {
        // Crear una cadena HTML para tags con espacios entre las etiquetas
        const tagsHTML = experience.tags.map(tag => `<span class="tags">${tag}</span>`).join(' ');

        // Crear la estructura HTML
        const htmlContent = `
          <div class="col">
            <div class="cont">
              <span class="date">${experience.date}</span>
              <h3 class="title">${experience.title}</h3>
              <p class="description">${experience.description}<br>${tagsHTML}</p>
            </div>
          </div>
        `;
        // Agregar el contenido al contenedor
        contExpe.innerHTML += htmlContent;
      });
    })
    .catch(error => console.error('Error al cargar el archivo JSON:', error));
}

// Carga el contenido predeterminado (ES)
changeLanguage('es');
