const swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    breakpoints: {
        576: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
        900: {
            slidesPerView: 2,
            slidesPerGroup: 1,
        },
        901: {
            slidesPerView: 3,
            slidesPerGroup: 1,
        },
    },
    prevButton: '.swiper-button-prev',
    nextButton: '.swiper-button-next',
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


//     slidesPerView: 1,
//     spaceBetween: 24,
//     loop: true,
//     breakpoints: {
//         576: {
//             slidesPerView: 1,
//             slidesPerGroup: 1,
//         },
//         900: {
//             slidesPerView: 1,
//             slidesPerGroup: 1,
//         },
//         901: {
//             slidesPerView: 1,
//             slidesPerGroup: 1,
//         },
//     },
//     prevButton: '.swiper-button-prev',
//     nextButton: '.swiper-button-next',
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
// });