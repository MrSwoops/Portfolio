const projectGroups = [
    [
        // { project: "Project Hola", repo: "./hola.html", 
        // image: "./Images/blog/HamsterBeef.PNG",
        // role: "Lead", team: "Solo Study" },

        { project: "Tanks", repo: "./ai-study.html", 
        image: "./Images/tanks/AStar.gif",
        role: "Programming/Design", team: "Solo Study" },

        { project: "Souls-Likes", repo: "./souls-like-study.html", 
        image: "",
        role: "Programming/Design", team: "Solo Study" },

        //{ project: "Bullet Hell", repo: "", 
        //image: "",
        //role: "Programming/Design", team: "Solo Project" },

        
    ],
    [
        // { project: "FleetCom", repo: "./fleetcom.html", 
        // image: "./Images/blog/Megastruct.png",
        // role: "Project & Programming Lead", team: "Team FleetCom" },

        { project: "Kleine", repo: "./klein.html", 
        image: "./Images/kleine/Thumb.JPG",
        role: "Programmer/3D Art", team: "DoughyWorks" },

        { project: "Asphodel Files", repo: "./psychomanteum.html", 
        image: "./Images/psychomanteum/Bar.JPG",
        role: "Lead Programmer/Level Design", team: "Team Psychomanteum" },

        //{ project: "Meltdown", repo: "https://www.google.com/", 
        //image: "",
        //role: "Programming/Design", team: "Solo Project" },

        //{ project: "CS50", repo: "https://www.google.com/", 
        //image: "",
        //role: "Student Programmer", team: "Project Series" },

    ]
];

window.onload = function () 
{
    renderNavbar();
    renderProjectGroups(projectGroups);
};