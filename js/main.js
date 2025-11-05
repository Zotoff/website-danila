document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector('#burger');
    const menuTabletCloseBtn = document.querySelector('#menuTabletClose');
    const menuTablet = document.querySelector('#menuTablet');

    burger.addEventListener('click', (e) => {
        e.preventDefault();
        
        if (menuTablet.classList.contains('menuTablet--active')) {
            menuTablet.classList.remove('menuTablet--active');
        } else {
            menuTablet.classList.add('menuTablet--active');
        }
    });

    menuTabletCloseBtn.addEventListener('click', (e) => {
        e.preventDefault();
        menuTablet.classList.remove('menuTablet--active');
    });


    const swiper_slides = new Swiper('.ScreenSlider__object', {
        direction: 'horizontal',
        loop: true,

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        }
    });

    const swiper_actions = new Swiper ('.actions__bottom__object', {
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: true,
            draggable: true,
        }
    });
});