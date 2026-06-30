import Swiper from "../node_modules/swiper/swiper-bundle.mjs"

const swiper = new Swiper('.swiper', {
    slidesPerView: 2,
    spaceBetween: 50,
    initialSlide: 1,
    centeredSlides: true,
    normalizeSlideIndex: false,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 2000,
        reverseDirection: true
    }
});