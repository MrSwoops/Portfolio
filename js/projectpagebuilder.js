const testInfo = {
    projectTitle: "Asphodel Files",
    subTitle: "",
    video: {src: "./Videos/Asphodel_Files_Trailer.mp4", type: "mp4"},
    about: "About the project....",
    features: ["Branching Dialogue", "Item Inspection", "Save/Load"],
    reflection: "Reflection on the project....",
    links: [{link: "https://github.com/TippyToo/psychomanteum", text: "GitHub"}, 
        {link: "https://tippytoo.itch.io/asphodel-files", text: "Itch.io"}]
}

function CreateProjectPage(builderInfo){
    const targ = document.getElementById("pagebuildertarget");
    let mainhtml = "";
    let row1 = "";
    let row2 = "";
    let links = "";
    let count = 1;
    builderInfo.features.forEach(feature => {
        if (count % 2 == 0){
            row1 += `
            <li>${feature}</li>
            `;
        }else{
            row2 += `
            <li>${feature}</li>
            `;
        }

        count += 1;
    });
    builderInfo.links.forEach(link =>{
        links += `
        <a href="${link.link}" class="w3-button w3-light-grey w3-padding-large w3-section">
            ${link.text}
        </a>
        `;
    });
    mainhtml +=`
<div class="w3-top" id="myNavbar">
  <div class="w3-bar w3-black w3-opacity w3-hover-opacity-off w3-center w3-small">
    <a href="./projects.html" class="w3-button w3-bar-item" style="width:20%">← All Projects</a>
  </div>
</div>
    
<!-- Page Content -->
<div class="w3-padding-large" id="main">
  <!-- Header/Home -->
  <header class="w3-container w3-padding-32 w3-center" id="home">
    <h1 class="w3-jumbo" style="color: white;">${builderInfo.projectTitle}</h1>
    <p style="color: white;">${builderInfo.subTitle}</p>

    <div class="video-container">
      <video id="vid" width="640" height="360" autoplay loop muted playsinline style="pointer-events: none;">
          <source src="${builderInfo.video.src}" type="video/${builderInfo.video.type}">

          Your browser does not support the video tag.
      </video>
      <div class="volume-slider">
        <input type="range" class="volume-control" id="volumeControl" min="0" max="1" step="0.01" value="0">
      </div>
    </div>
  </header>

  <!-- About Section -->
  <div class="w3-content w3-justify w3-text-grey w3-row-padding w3-padding-16">
    <div class="w3-half">
      <h2 class="w3-text-light-grey">About</h2>
      <hr style="width:200px" class="w3-opacity">
      <p>
        ${builderInfo.about}
      </p>
    </div>

    <div class="w3-half">
      <h2 class="w3-text-light-grey">Features</h2>
      <hr style="width:200px" class="w3-opacity">
      <div id="features" class="w3-row-padding" style="margin:0 -16px">
        <div class="w3-half w3-margin-bottom">
          <ul>
            ${row1}
          </ul>
        </div>
        <div class="w3-half w3-margin-bottom">
          <ul>
            ${row2}
          </ul>
        </div>
      </div>
    </div>

  </div>

  <div class="w3-content w3-justify w3-text-grey w3-padding-16">
    <h3 class="w3-text-light-grey">Reflection</h3>
    <hr style="width:200px" class="w3-opacity">
    <p>
      ${builderInfo.reflection}
    </p>

    ${links}

  </div>
<!-- END PAGE CONTENT -->
</div>
    `;
    targ.innerHTML += mainhtml;
}