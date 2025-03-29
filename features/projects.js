import {projects} from "../data-structures/projects.js"
import { getScreenSize } from "../utils/screen-size.js";

const projectsContainer = document.querySelector(".projects-container");
const select = document.querySelector("#projects select");
const loadMoreProjectsButton = document.querySelector("#projects button");

let initialProjectsCount = getInitialProjectsCount();
let projectsToLoadCount = getProjectsToLoadCount();
let displayedProjects = projects.slice(0, initialProjectsCount);
let filteredProjects = projects;
let currentScreenSize = getScreenSize();

export const setUpProjects = () => {
    displayProjects();
    createFilterOptions();

    select.addEventListener("change", filterProjects);
    loadMoreProjectsButton.addEventListener("click", loadMoreProjects);
    window.addEventListener("resize", resize);
};

const loadMoreProjects = () =>{
    const currentProjectCount = displayedProjects.length;

    const loadedProjects = filteredProjects.slice(
        currentProjectCount, currentProjectCount + projectsToLoadCount
    );

    displayedProjects.push(...loadedProjects);
    displayProjects();
};

const filterProjects = (e) =>{
    const selectedCategory = e.target.value;

    if(selectedCategory === "all") {
        filteredProjects = projects;
    } else {
        filteredProjects = projects.filter(
            ({category}) => category === selectedCategory
        ); 
    }
    displayedProjects = filteredProjects;
    displayProjects();
};

const createFilterOptions = () =>{
    const uniqueCategories = new Set(projects.map(({category}) => category));

    const categories = ["all", ...uniqueCategories];

    categories.map((category) => {
        const option = document.createElement("option");
        option.value = category;
        option.textContent = category;
        select.appendChild(option);
    })
};

const displayProjects = () =>{
    projectsContainer.innerHTML = "";
    displayedProjects.map((project) => {
        const projectStructure = getProjectStructure(project);
        projectsContainer.appendChild(projectStructure);
    });

    const hasMoreProjects = displayedProjects.length < filteredProjects.length;
    loadMoreProjectsButton.classList.toggle("active", hasMoreProjects);
};

const getProjectStructure = (project) =>{
    const {name, description, websiteLink, githubLink, image, skills} = project;
    const div = document.createElement("div");
    div.className = "project";

    const skillIcons = skills.map(
        (skill) => `<img src= "./images/icons/skills/${skill}.svg"/>`
    ).join("");

    div.innerHTML = `
    <div class="images-container">
        <img src="${image}" />
    </div>
    <div class="content">
        <div class="info">
            <h3>${name}</h3>
            <p>${description}</p>
        </div>
        <div class="skills-container">
            <span>Skills:</span>
            <div class="skills">
                ${skillIcons}
            </div>
        </div>
        <div class="links">
            <div class="code">
                <img
                    src="./images/icons/socials/github-black.svg"
                />
                <a href="${githubLink}" target="_blank">View Code</a>
            </div>
            <div class="website">
                <a href="${websiteLink}" target="_blank">Try it out</a>
                <img src="./images/icons/arrow.svg" />
            </div>
        </div>
    </div>
    `

    div.addEventListener("click", (e) =>{
        if(e.target.closest("a")){
            window.open(websiteLink, "_blank");
        }
    });
    return div;
};

const resize = () =>{
    const newScreenSize = getScreenSize();

    if(newScreenSize === currentScreenSize) return;

    currentScreenSize = newScreenSize;
    initialProjectsCount = getInitialProjectsCount();
    projectsToLoadCount = getProjectsToLoadCount();
    displayProjects = projects.slice(0, initialProjectsCount);
    displayProjects();
}

function getInitialProjectsCount(){
    const screenSize = getScreenSize();

    if(screenSize === "desktop")    return 6;
    else if(screenSize === "tablet")    return 4;
    else    return 3;
};

function getProjectsToLoadCount(){
    const screenSize = getScreenSize();

    if(screenSize === "desktop")    return 3;
    else if(screenSize === "tablet")    return 2;
    else    return 1;
};


