 // Define pricing plans in an array
 const artDisplays = [
    [
        { project: "Truth and Reconciliation", repo: "https://www.artstation.com/artwork/04Pq0K", 
        image: "./Images/truthandrec/TruthAndRec.JPG",
        role: "Modle/Texturing", team: "" },

        { project: "The Pursuer", repo: "https://www.artstation.com/artwork/xDg6GO", 
        image: "./Images/pursuer/Front_U.JPG",
        role: "Texturing", team: "" }
    ],
    [
        { project: "Moving Day", repo: "https://www.google.com/", 
        image: "",
        role: "Programmer/Designer/Artist", team: "" },

        { project: "Meltdown", repo: "https://www.google.com/", 
        image: "",
        role: "Programmer/Designer", team: "" }
    ]
];

function createArtRow(projects) {
    let rowHTML = `
        <div class="w3-half">
    `;
    
    projects.forEach(proj => {
        rowHTML += `
            <ul class="w3-ul w3-white w3-center w3-opacity w3-hover-opacity-off w3-margin-bottom" onclick="window.location.href='${proj.repo}'" style="cursor: pointer;">
                <li class="w3-dark-grey w3-xlarge w3-padding-32">
                    ${proj.project}
                </li>
                <li class="w3-padding-16">${proj.role}</li>
                <img src=${proj.image} alt="Project Image" class="w3-image">
            </ul>
        `;
    });

    rowHTML += `
        </div>
    `; // Close row div
    return rowHTML;
}

function renderArtGroups() 
{
    const container = document.getElementById("project-groups");
    let html = `
    <div class="w3-row-padding" style="margin:0 -16px">
    `;
    artDisplays.forEach(row => {
        html += createArtRow(row);
    });
    html += `
    </div>
    `;

    container.innerHTML += html;
}