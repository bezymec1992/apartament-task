//tabs
const tabs = document.querySelector('.tabs'); 
const tab_container = document.querySelector('.tab-container'); 

let active_tab = document.querySelector('.tab.active');
let active_content = document.getElementById(active_tab.dataset.tab);

tab_container.addEventListener('click', (e)=> {
	let target = e.target.closest(".tab");
	
	if (target) {
		active_tab.classList.remove('active');
		active_content.classList.remove('active');

		active_tab = target;
		active_content  = document.getElementById(active_tab.dataset.tab);
		active_tab.classList.add('active');
		active_content.classList.add('active');
	}
})


const swiper2 = new Swiper('.swiper2', {
    loop: true,
    slidePerColumn:1,
    //slidesPerView: 'auto',
    // spaceBetween: 40,
    // autoplay: {
    //     delay: 2000,
    // },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    breakpoints: {
        320: {
            slidesPerView: 'auto',
            spaceBetween: 20,
        },
        
        992: {
            slidesPerView: 3.5,
            spaceBetween: 40,
        }
    }
});