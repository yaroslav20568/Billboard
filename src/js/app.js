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

	/*ACCORDEON*/
	const accordeonBtns = document.querySelectorAll('.tab-btn');

	accordeonBtns.forEach(accordeonBtn => {
		accordeonBtn.addEventListener('click', () => {
			if(!accordeonBtn.nextElementSibling.classList.contains('active')) {
				accordeonBtn.classList.add('active');
				accordeonBtn.nextElementSibling.classList.add('active');
				accordeonBtn.nextElementSibling.style.maxHeight = `${accordeonBtn.nextElementSibling.scrollHeight}px`;
			} else {
				accordeonBtn.classList.remove('active');
				accordeonBtn.nextElementSibling.classList.remove('active');
				accordeonBtn.nextElementSibling.style.maxHeight = '0px';
			}
		});
	});
	/*ACCORDEON*/

	/*MODALS*/
	const introBtn = document.querySelector('.intro__btn');
	const modal = document.querySelector('.call-modal');
	const closeBtns = document.querySelectorAll('.modal__close');

	introBtn?.addEventListener('click', () => {
		modal.classList.add('modal--active');
		document.body.style.overflow = 'hidden';
	});

	// modalBtns.forEach(modalBtn => {
	// 		modalBtn.addEventListener('click', () => {
	// 				modal.classList.add('modal--active');
	// 				document.body.style.overflow = 'hidden';
	// 		});
	// });

	closeBtns.forEach((closeBtn) => {
		closeBtn.addEventListener('click', () => {
			modal.classList.remove('modal--active');
			document.body.style.overflow = 'auto';
		});
	});

	modal.addEventListener('click', (e) => {
			if (e.target.parentElement === modal) {
					modal.classList.remove('modal--active');
					document.body.style.overflow = 'auto';
			}
	});
	/*MODALS*/

	/* ACCORDEONS */
	const accordeonVacanciesBtns = document.querySelectorAll('.vacancies__accordeon-btn');

	accordeonVacanciesBtns.forEach(accordeonBtn => {
		accordeonBtn.addEventListener('click', () => {
			if(!accordeonBtn.parentElement.classList.contains('active')) {
				accordeonBtn.parentElement.classList.add('active');
				accordeonBtn.nextElementSibling.style.maxHeight = `${accordeonBtn.nextElementSibling.scrollHeight + 15}px`;
			} else {
				accordeonBtn.parentElement.classList.remove('active');
				accordeonBtn.nextElementSibling.style.maxHeight = '0px';
			}
		});
	});
	/* ACCORDEONS */
});