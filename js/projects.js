const projectGroups = [
    [
        { project: "Psychomanteum", repo: "./psychomanteum.html", 
        image: "./Images/psychomanteum/Bar.JPG",
        role: "Lead Programmer/Level Design", team: "Team Psychomanteum" },

        { project: "Kleine", repo: "https://www.google.com/", 
        image: "",
        role: "Programmer/3D Art", team: "DoughyWorks" }
    ],
    [
        { project: "Moving Day", repo: "https://www.google.com/", 
        image: "",
        role: "Programmer/Designer/Artist", team: "Solo Project" },

        { project: "Meltdown", repo: "https://www.google.com/", 
        image: "",
        role: "Programmer/Designer", team: "Solo Project" }
    ]
];

window.onload = function () 
{
    renderNavbar();
    renderProjectGroups();
};