import { setUpContactMe } from "./features/contact-me.js";
import { setUpHome } from "./features/home.js";
import { setUpProjects } from "./features/projects.js";
import { setUpReferences } from "./features/references.js";

document.addEventListener("DOMContentLoaded", () =>{
    setUpHome();
    setUpReferences();
    setUpContactMe();
    setUpProjects();
});