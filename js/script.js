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

      // Selecciona el idioma deseado para la sección "projects"
      const projectsContent = data.projects[lang];

      // Obtén el contenedor donde se mostrará la información de proyectos
      const contProjects = document.getElementById("cont-projects");

      // Limpiar el contenido existente
      contProjects.innerHTML = "";

      // Iterar sobre la información de proyectos y agregarla al contenedor
      projectsContent.forEach(project => {
        // Crear la estructura HTML para cada proyecto
        const projectHTML = `
          <div class="project">
            <div class="project-content">
              <img src="${project.image}" alt="${project.title}" class="project-img">
              <div class="project-text">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <p class="project-description">${project.description_cont}</p>
                <div class="programs">
                  <h5>Programas Utilizados</h5>
                  <ul>
                    ${project['cont-projects'][0]['programs'].map(program => `<span class="tags">${program}</span>`).join('')}
                  </ul>
                </div>
              </div>
            </div>
             </div>
        `;
        // Agregar el proyecto al contenedor
        contProjects.innerHTML += projectHTML;

      });
      
      // Selecciona las habilidades deseadas
      const skillsContent = data.skills;

      // Obtén el contenedor donde se mostrará la información de habilidades
      const contSkills = document.getElementById("cont-skills");

      // Limpiar el contenido existente
      contSkills.innerHTML = "";

      // Iterar sobre las categorías de habilidades (back y front)
      for (const [category, skills] of Object.entries(skillsContent)) {
        // Crear la estructura HTML para cada categoría de habilidades
        const categoryHTML = `
          <div class="skill-category">
            <h2>${category.toUpperCase()}</h2>
            <div class="skill-icons">
              ${skills.map(skill => `<img src="${skill.svg}" alt="${category}">`).join(' ')}
            </div>
          </div>
        `;

        // Agregar la categoría de habilidades al contenedor
        contSkills.innerHTML += categoryHTML;
      }
    })
    .catch(error => console.error('Error al cargar el archivo JSON:', error));
}

// Carga el contenido predeterminado (ES)
changeLanguage('es');
