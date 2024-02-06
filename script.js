const projectsContainer = document.getElementById("projects-container");

// Fetching data from projects.json
fetch("projects.json")
    .then((response) => response.json())
    .then((data) => {
        // calling function to display projects
        displayProjects(data);
    })
    .catch((error) => console.log('Error fetching data:', error));

// Function to display projects
const displayProjects = (projects) => {
    // Loop through each project in the data
    projects.forEach((project, index) => {
        // Create a div to hold each project
        const projectDiv = document.createElement("div");
        projectDiv.classList.add("project");

        // Populate the div with the project information
        projectDiv.innerHTML = `
        <div class="circle-div">
            <div class="circle" id="circle${index + 1}">${index + 1}</div>
            <h3>${project.title}</h3>
        </div>
        <div class="project-image-div">
        <p class="tech-p">${project.tech}</p>
        <img src="${project.image}" alt="${project.title}" class="project-image">
        </div>
        <div class="button-project-section">
            <button><a href="${project.githubLink}" target="_blank">${project["button-git"]}</a></button>
            <button><a href="${project.demoLink}" target="_blank">${project["button-demo"]}</a></button>
        </div>
        `;

        // Append the project div to the projects container
        projectsContainer.appendChild(projectDiv);
    });

    // Update the number inside each circle div
    updateNumber();
};

// Initial number and total projects
let currentNumber = 1;
const totalProjects = 30;

// Function to update the number inside the circle
const updateNumber = () => {
    // Loop through each circle div and update its number
    for (let i = 1; i <= totalProjects; i++) {
        const circle = document.getElementById(`circle${i}`);
        if (circle) {
            circle.textContent = i;
        }
    }
};
