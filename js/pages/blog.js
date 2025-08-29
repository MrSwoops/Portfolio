const Posts = [
    { Date: "8/29/25", Image: "./Images/", 
        Text: "First blog post" 
    },
    { Date: "8/29/25", Image: "./Images/", 
        Text: "Second blog post" 
    },
];


function renderBlogPosts() 
{
  const container = document.getElementById("posts");
  
  let html = `<div id="skills" class="w3-row-padding" style="margin:0 -16px">`;
  for (let i = Posts.length - 1; i >= 0; i--) {
    const post = Posts[i];
    html += `
      <ul class="w3-ul w3-white w3-center w3-margin-bottom">
        <li class="w3-dark-grey w3-xlarge w3-padding-32">${post.Date}</li>
        <li class="w3-padding-16">${post.Text}</li>
        <img src="${post.Image}" alt="Post Image" class="w3-image">
      </ul>
    `;
  }
  html += `</div>`;
  container.innerHTML += html;
}

window.onload = function () 
{
    renderNavbar();
    renderBlogPosts() 
};