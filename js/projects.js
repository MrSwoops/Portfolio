const projectGroups = [
    [
        { project: "Kleine", repo: "./klein.html", 
        image: "",
        role: "Programmer/3D Art", team: "DoughyWorks" },

        { project: "Asphodel Files", repo: "./psychomanteum.html", 
        image: "./Images/psychomanteum/Bar.JPG",
        role: "Lead Programmer/Level Design", team: "Team Psychomanteum" },
    ],
    [
        { project: "Moving Day", repo: "https://www.google.com/", 
        image: "",
        role: "Programmer/Designer/Artist", team: "Solo Project" },

        { project: "Meltdown", repo: "https://www.google.com/", 
        image: "",
        role: "Programmer/Designer", team: "Solo Project" },
    ]
];

window.onload = function () 
{
    renderNavbar();
    renderProjectGroups(projectGroups);
};