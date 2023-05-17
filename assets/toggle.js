//drop down menu
const liToggle = document.getElementById('li');
liToggle.addEventListener("click", () => {
    liToggle.classList.toggle('open');
});

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
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: 56,
    initialSlide: 1,
    centeredSlides: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });



  //swiper4-5
let swiper4 = new Swiper('.swiper4', {
    slidesPerView: 1,
    loop: true,
    
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    allowTouchMove: false,
    autoplay: {
        delay: 5000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
  });

  const sellSection = document.getElementById('sell');
  sellSection.addEventListener('mouseenter', function() {
    for(let swip of swiper4) {
        swip.autoplay.stop();
    }
  })
  sellSection.addEventListener('mouseleave', function() {
    for(let swip of swiper4) {
        swip.autoplay.start();
    }
  })


