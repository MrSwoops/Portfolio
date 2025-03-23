
const projectGroups = [
    [
        { project: "Asphodel Files", repo: "./psychomanteum.html", 
        image: "./Images/psychomanteum/Bar.JPG",
        role: "Lead Programmer/Level Design", team: "Team Psychomanteum" },

        { project: "Kleine", repo: "./klein.html", 
        image: "",
        role: "Programmer/3D Art", team: "DoughyWorks" }
    ],
    [
        { project: "Truth and Reconciliation", repo: "https://www.artstation.com/artwork/04Pq0K", 
        image: "./Images/truthandrec/TruthandRec.JPG",
        role: "Modeling/Texturing", team: "Halo" },

        { project: "Meltdown", repo: "https://www.google.com/", 
        image: "",
        role: "Programmer/Designer", team: "Solo Project" }
    ]
];

const images = [
    {src: "./Images/YoungMan.jpeg", alt: "Young Ryan"},
    {src: "./Images/IMG_8037.jpeg", alt: "Applying to Clark"},
    {src: "./Images/DoughyWorks.jpeg", alt: "DoughyWorks Team"}
  
];
let slideIndex = Math.floor(Math.random() * document.getElementsByClassName("mySlides").length);
let timeOutID;

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}
// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function nextSlide(){
    plusSlides(1);
}
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "inline";

    // Auto change image
    clearTimeout(timeOutID);
    timeOutID = setTimeout(nextSlide, 8000);
}
function renderSlideShow() 
{
    const slideShow = document.getElementById("slides");
    images.forEach(image => {
        slideShow.innerHTML += `
        <div class="mySlides fade">
            <img src=${image.src} alt=${image.alt} class="w3-image">
        </div>
        `;
    });
}


const sections = [
    {title: "Programming", skills: ["C++", "C#", "Python", "Frontend"]},
    {title: "Engines", skills: ["Unity", "Unreal 5", "Löve", "Godot"]},
    {title: "Art", skills: ["Autodesk Maya", "Blender", "3D Substance Painter"]}
  
];

function renderSkillGroups() 
{
  const container = document.getElementById("skills");
  let html = `<div id="skills" class="w3-row-padding" style="margin:0 -16px">`;
  sections.forEach(proj => {
      html += `
      <div class="w3-third w3-margin-bottom">
            <ul class="w3-ul w3-white w3-center w3-opacity w3-hover-opacity-off">
                <li class="w3-dark-grey w3-xlarge w3-padding-32">
                    ${proj.title}
                </li>
                <li class="w3-padding-16">
                <ul>
      `;
      proj.skills.forEach(element =>{
        html += `
        <li>${element}</li>
        `;
      });
      html += `
                </ul>
                </li>
            </ul>
        </div>
      `;
  });
  html += `</div>`;
  container.innerHTML += html;
}

window.onload = function () 
{
    renderNavbar();
    renderSlideShow();
    showSlides(slideIndex);
    renderSkillGroups();
    renderProjectGroups();
};