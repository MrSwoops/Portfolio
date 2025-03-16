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
    slides[slideIndex-1].style.display = "block";
  
    // Auto change image
    clearTimeout(timeOutID);
    timeOutID = setTimeout(nextSlide, 8000);
  }
  function renderProjectGroups() 
  {
      const slideShow = document.getElementById("slides");
      images.forEach(image => {
          slideShow.innerHTML += `
            <div class="mySlides fade">
              <img src=${image.src} alt=${image.alt} class="w3-image" width="800">
            </div>
          `;
      });
  }

window.onload = function () 
{
    renderNavbar();
    renderProjectGroups();
    showSlides(slideIndex);
     renderGroups();
};