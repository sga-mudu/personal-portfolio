import {references } from "../data-structures/references.js"

const referencesContainer = document.querySelector(".swiper-wrapper");

export const setUpReferences = () => {
    references.map((reference) => {
        const swiperSlide = getSwiperStructure(reference);
        referencesContainer.appendChild(swiperSlide);
    });
    setUpSwiper();
};

const getSwiperStructure = (reference) =>{
    const {
        image, 
        name, 
        position, 
        institution, 
        content, 
        recommendationLetter
    } = reference;

    const div = document.createElement("div");
    div.className = "swiper-slide";
    div.innerHTML = `
        <div class="content">
        <div class="header">
        <img src="${image}">
        <div class="author-info">
        <span class="name">${name}</span>
        <span class="infosss">${position}, ${institution}</span>
        </div>
        </div>

        <div class="reference">
        <p>${content}</p>
        <a download href="${recommendationLetter}">Read more</a>
        </div>
        </div>

        <img src="./images/icons/quotes.png" class="quotes">
        <div class="line-decoration"></div>
    `
    return div;
};

const setUpSwiper = () =>{
        new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        spaceBetween: 30,
        autoplay: {
            delay: 10000,
            disableOnInteraction: false,
        },
        slidesPerView: 1,
        centeredSlides: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        breakpoints: {
            768:{
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 2.5,
            }
        }
      });
};




