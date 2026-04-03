const projectGroups = [
    [
        //{ project: "Project Hola", repo: "./hola.html", 
        //image: "./Images/blog/HamsterBeef.PNG",
        //role: "Lead", team: "Solo Study" },

        { project: "Tanks", repo: "./ai-study.html", 
        image: "./Images/tanks/AStar.gif",
        role: "Programming/Design", team: "Solo Study" },
    ],
    [
        { project: "FleetCom", repo: "./fleetcom.html", 
        image: "./Images/FleetCom/FCom.png",
        role: "Project & Programming Lead", team: "Team FleetCom" },

        { project: "Kleine", repo: "./klein.html", 
        image: "./Images/kleine/KleinThumb.PNG",
        role: "Programmer/3D Art", team: "DoughyWorks" },
    ]
];

window.onload = function () 
{
    renderNavbar();
    renderFooter();
    renderProjectGroups(projectGroups);
};