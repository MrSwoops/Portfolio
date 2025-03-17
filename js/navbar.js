 // Define pricing plans in an array
 const barItems = [
    
    { bar: "Home", repo: "./index.html", 
    dropdown: [{name: "About", link: "./index.html#about"}, {name: "Skills", link: "./index.html#skills"}, {name: "Featured", link: "./index.html#featured"}]},

    { bar: "Games", repo: "./projects.html", 
        dropdown: [{name: "Psychomanteum", link: "./html/Games/psychomanteum.html"}, {name: "Klein", link: "./html/Games/klein.html"}]},

    { bar: "Art", repo: "./art.html", 
    dropdown: [{name: "Truth and Reconciliation", link: "./html/Art/truthandrec.html"}, {name: "The Pursuer", link: "./html/Art/pursuer.html"}]}
    
];

function createNavbar(navbar) {
    let html = `
<div class="w3-top" id="myNavbar">
    <div class="w3-bar w3-black w3-opacity w3-hover-opacity-off w3-center w3-small">
    `;
    navbar.forEach(barItem => {
        html += `
        <div class="dropdown w3-button w3-bar-item" style="width:${100/navbar.length}%  ">
            <a href=${barItem.repo} class="dropbtn" style="display: block;">${barItem.bar}
                <i class="fa fa-caret-down"></i>
            </a>
            <div class="dropdown-content">
        `;
        barItem.dropdown.forEach(dropdown => {
            html += `
            <a href=${dropdown.link}>${dropdown.name}</a>
            `;
        });
        html += `
            </div>
        </div>
        `;
    });

    html += `
    </div>
</div>
    `; 
return html;
}

function renderNavbar() 
{
    const navbarHTML = document.getElementById("navbar");
    navbarHTML.innerHTML += createNavbar(barItems);
}
