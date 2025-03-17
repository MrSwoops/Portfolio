function createProjectRow(projects) {
    let rowHTML = `
        <div class="w3-half">
    `;
    
    projects.forEach(proj => {
        rowHTML += `
            <ul class="w3-ul w3-white w3-center w3-opacity w3-hover-opacity-off w3-margin-bottom">
                <li class="w3-dark-grey w3-xlarge w3-padding-32">
                    <a href=${proj.repo} class="w3-button w3-transparent w3-text-white" style="padding: 0; margin: 0;">
                    ${proj.project}
                    </a>
                </li>
                <li class="w3-padding-16">${proj.role}</li>
                <li class="w3-padding-16">${proj.team}</li>
                <img src=${proj.image} alt="Project Image" class="w3-image">
            </ul>
        `;
    });

    rowHTML += `
        </div>
    `;
    return rowHTML;
}

function renderProjectGroups() 
{
    const container = document.getElementById("project-groups");
    let html = `
<div class="w3-row-padding" style="margin:0 -16px">
    `;
    projectGroups.forEach(row => {
        html += createProjectRow(row);
    });
    html += `
</div>
    `;
    container.innerHTML += html;
}