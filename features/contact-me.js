import {socialLinks} from "../data-structures/links.js";

const socialsContainer = document.querySelector("#contact-me .socials");
const form = document.querySelector("#form");
const submitButton = document.querySelector("#contact-me button");

export const setUpContactMe = () =>{
    socialLinks.map((link) => {
        const linkStructure = getLinkStructure(link);
        socialsContainer.appendChild(linkStructure);
    });

    form.addEventListener("submit", sendEmail);
};

const sendEmail = async (e) => {
    e.preventDefault();

    submitButton.disabled = true;
    submitButton.textContent = "Sending...";

    try{
        await emailjs.sendForm(
            "service_7j7osao", //serviceId
            "template_29izrtd", //templateId
            "#form", //formId
            "ZMOt-90fJ8gz3D34z"  //publicKey
        );
        alert("✅Message sent successfully");
    } catch(error){
        alert("❌Message not sent (service error)")
    } finally{
        submitButton.disabled = false;
        submitButton.textContent = "Send Message";
        form.reset();
    }
};
const getLinkStructure = (link) =>{
    const a = document.createElement("a");
    
    a.href = link.href; 
    a.target = "_blank";
    a.innerHTML = `
        <img src="${link.icon}"/>
    `;
    return a;
};