//Carousel
 
 const owl = $('.owl-carousel');
owl.owlCarousel({
    center: true,
    loop:true,
    margin:30,
    startPosition:1,
    items:3,

    responsive : {

        // breakpoint from 1000 up
        320: {
            margin:5,
            items :2
        },
        500: {
            margin:10,
            items : 3
        },
        850 : {
            margin:20,
        },
        1000 : {   
        },
        1200 : {
            margin:30,
        }
    }
});

$('.slider__btn--prev').click(function() {
    
    
    owl.trigger('prev.owl.carousel', [300]);
})

$('.slider__btn--next').click(function() {
    owl.trigger('next.owl.carousel');
})

// Nav icon
const navBtn = document.querySelector('.nav__toggle');
const nav = document.querySelector('.nav')
const menuIcon = document.querySelector('.menu-icon');




navBtn.onclick = function () {
	nav.classList.toggle('nav--mobile')
	menuIcon.classList.toggle('menu-icon--active');
	document.body.classList.toggle('no-scroll');
};
