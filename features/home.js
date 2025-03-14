const downloadResumeButton = document.querySelector(".download-resume");
const buttonText = downloadResumeButton.querySelector(".text");
const buttonIcon = downloadResumeButton.querySelector(".icon");

export const setUpHome = () => {
    downloadResumeButton.addEventListener("click", downloadResume);
};

const downloadResume = () =>{

    downloadResumeButton.disabled = true;
    buttonText.textContent = "Complete";
    buttonIcon.src = './images/icons/check.svg';
    downloadResumeButton.classList.add("complete");

    setTimeout(() => {
        buttonText.textContent = "Resume";
        buttonIcon.src = './images/icons/download.svg';
        downloadResumeButton.classList.remove("complete");
    }, 3000)
};




