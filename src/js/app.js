import { animations } from './functions/animations.js';

document.addEventListener('DOMContentLoaded', () => {
	const burgerBtn = document.querySelector('.header__burger');
	const headerNav = document.querySelector('.header__nav');

	burgerBtn.addEventListener('click', () => {
		if(!burgerBtn.classList.contains('active')) {
			burgerBtn.classList.add('active');
			headerNav.classList.add('active');
		} else {
			burgerBtn.classList.remove('active');
			headerNav.classList.remove('active');
		}
	});

	const introSwiper = new Swiper('.intro__swiper', {
		speed: 400,
		// spaceBetween: 100,
		loop: true,
		autoplay: {
			delay: 2000,
		},
		pagination: {
				el: '.intro-slide__navigation',
				clickable: true
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		}
	});
});