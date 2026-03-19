if (document.querySelector('.swiper-container')){
    new Swiper(".image-slider", {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            
            loop: true,
        },
        simulateTouch: false,
        touchRatio: 2,
        slidesPerView: 1,
        autoHeight: window.innerWidth <= 1050,

        autoplay: {
            delay: 5000,
            stopOnLastSlide: false,
            disableOnInteraction: false
        },
        speed: 2000,


        
    });

    

}


