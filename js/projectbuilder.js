// Define pricing plans in an array
const projectGroups = [
    [
        { project: "Psychomanteum", repo: "https://github.com/TippyToo/psychomanteum", 
        image: "/Images/psychomanteum/Bar.JPG",
        role: "Lead Programmer/Level Design", team: "Team Psychomanteum" },

        { project: "Kleine", repo: "https://www.google.com/", 
        image: "",
        role: "Programmer/3D Art", team: "DoughyWorks" }
    ],
    [
        { project: "Moving Day", repo: "https://www.google.com/", 
        image: "",
        role: "Programmer/Designer/Artist", team: "Solo Project" },

        { project: "Meltdown", repo: "https://www.google.com/", 
        image: "",
        role: "Programmer/Designer", team: "Solo Project" }
    ]
];

function createProjectRow(projects) {
    let rowHTML = `
        <div class="w3-row-padding" style="margin:0 -16px">
    `;
    
    projects.forEach(proj => {
        rowHTML += `
            <div class="w3-half w3-margin-bottom">
                <ul class="w3-ul w3-white w3-center w3-opacity w3-hover-opacity-off">
                    <li class="w3-dark-grey w3-xlarge w3-padding-32">
                        <a href=${proj.repo} class="w3-button w3-transparent w3-text-white" style="padding: 0; margin: 0;">
                        ${proj.project}
                        </a>
                    </li>
                    <li class="w3-padding-16">${proj.role}</li>
                    <li class="w3-padding-16">${proj.team}</li>
                    <img src=${proj.image} alt="Project Image" class="w3-image">
                </ul>
            </div>
        `;
    });

    rowHTML += `</div>`;
    return rowHTML;
}

function renderProjectGroups() 
{
    const container = document.getElementById("project-groups");
    projectGroups.forEach(row => {
        container.innerHTML += createProjectRow(row);
    });
}

window.onload = function () 
{
    renderProjectGroups();
};