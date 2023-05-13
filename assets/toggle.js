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

window.innerWidth < 767 ?
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

//form submit
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    e.preventDefault()
    form.reset()

    const success = document.querySelector(".success");
    success.style.opacity = 1;
    function callSucces() {
        success.style.opacity = 0;
    }
    setTimeout(callSucces, 3000)
})


//swiper3
const swiper3 = new Swiper('.swiper3', {
    // Optional parameters
    // direction: 'vertical',
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: 56,
    // If we need pagination
    initialSlide: 1,
    centeredSlides: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    
  
    
  });
