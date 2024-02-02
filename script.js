document.addEventListener('DOMContentLoaded', function () {
    fetch('projects.json')
      .then(response => response.json())
      .then(data => displayProjects(data))
      .catch(error => console.error('Error fetching projects:', error));
  });
  
  function displayProjects(projects) {
    const projectsContainer = document.getElementById('projects-container');
  
    projects.forEach(project => {
      const projectHTML = `
        <div class="project">
          <h2>${project.title}</h2>
          <p>Date: ${project.date}</p>
          <img src="${project.image}" alt="${project.title}">
          <button>${project.button1}</button>
          <button>${project.button2}</button>
        </div>
      `;
  
      projectsContainer.innerHTML += projectHTML;
    });
  }
  