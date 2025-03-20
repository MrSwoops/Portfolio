function createProjectRow(projects) {
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