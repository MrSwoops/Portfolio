 // Define pricing plans in an array
 const barItems = [
    
    { bar: "Home", repo: "./index.html", 
    dropdown: [{name: "About", link: "./index.html#about"}, {name: "Skills", link: "./index.html#skills"}, {name: "Featured", link: "./index.html#featured"}]},

    { bar: "Projects", repo: "./projects.html", 
        dropdown: [{name: "ptext1", link: "./projects.html"}, {name: "ptext2", link: "./projects.html"}]},

    { bar: "Art", repo: "./art.html", 
    dropdown: [{name: "atext1", link: "./art.html"}, {name: "atext2", link: "./art.html"}]},

    { bar: "Home", repo: "./index.html", 
    dropdown: [{name: "text1", link: "./index.html"}, {name: "text2", link: "./index.html"}]}
    
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
