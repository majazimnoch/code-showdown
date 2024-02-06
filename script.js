const projectsContainer = document.getElementById("projects-container");

// Fetching data from projects.json
fetch("projects.json")
    .then((response) => response.json())
    .then((data) => {
        // calling function to display projects
    displayProjects(data)
    })
    .catch((error) => console.log('Error fetchng data:', error))

    // function to display projects
const displayProjects = (projects) => {
    // loop through each project in the data
    projects.forEach((project) => {
        // create a div to hold each project
        const projectDiv = document.createElement("div");
        projectDiv.classList.add("project");

        // populate the div with the project information
        projectDiv.innerHTML = `
        <h3>${project.title}</h3>
        <p>Day: ${project.date}</p>
        <img src="${project.image}" alt="${project.title}" class="project-image">
        <a href="${project.githubLink}" target="_blank">${project["button-git"]}</a>
        <a href="${project.githubLink}" target="_blank">${project["button-git"]}</a>
        `;

        // apend the project div to the projects container
        projectsContainer.appendChild(projectDiv);
    })



}