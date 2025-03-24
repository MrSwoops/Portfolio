const projectGroups = [
    [
        { project: "Kleine", repo: "./klein.html", 
        image: "",
        role: "Programmer/3D Art", team: "DoughyWorks" },

        { project: "AI in Games", repo: "./ai-study.html", 
        image: "./Images/tanks/AStar.gif",
        role: "Programming/Design", team: "Study" },

        { project: "Bullet Hell", repo: "", 
        image: "",
        role: "Programming/Design", team: "Solo Project" },

        { project: "Asphodel Files", repo: "./psychomanteum.html", 
        image: "./Images/psychomanteum/Bar.JPG",
        role: "Lead Programmer/Level Design", team: "Team Psychomanteum" },
    ],
    [
        { project: "Souls-Likes", repo: "./souls-like-study.html", 
        image: "",
        role: "Programming/Design", team: "Study" },

        { project: "Meltdown", repo: "https://www.google.com/", 
        image: "",
        role: "Programming/Design", team: "Solo Project" },

        { project: "CS50", repo: "https://www.google.com/", 
        image: "",
        role: "Student Programmer", team: "Project Series" },
    ]
];

window.onload = function () 
{
    renderNavbar();
    renderProjectGroups(projectGroups);
};