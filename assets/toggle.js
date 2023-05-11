const liToggle = document.getElementById('li');
liToggle.addEventListener("click", () => {
    liToggle.classList.toggle('open');
});


//     document.addEventListener('DOMContentLoaded', () => {
// })

const menuBtn = document.querySelector(".open-menu");
const bodyWrap = document.querySelector(".body__wrapper");
const body = document.querySelector("body");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("menu-opened");
    bodyWrap.classList.toggle("openBurger");
    body.classList.toggle("bodyOpen");
});


//location clear
const locations = document.getElementById("location");
const btnLocation = document.getElementById("btn-location");

window.innerWidth < 767? 
locations.placeholder = 'Search for the location' :
locations.placeholder = 'Search for the location you want!'

window.addEventListener("resize", () => {
    window.innerWidth < 767 ?
        locations.placeholder = 'Search for the location' :
        locations.placeholder = 'Search for the location you want!'
})

btnLocation.addEventListener("click", () => {
    locations.value = ""
})

//swiper
const swiper = new Swiper('.swiper', {
    loop: true,
    slidePerColumn: 1,
    //slidesPerView: 'auto',

    simulateTouch: false,
    spaceBetween: 16,
    autoplay: {
        delay: 3000,
    },
    breakpoints: {
        320: {
            slidesPerView: 'auto',
        },
        992: {
            slidesPerView: 'auto',
        }
    }
});