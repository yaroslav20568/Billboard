// import { animations } from './functions/animations.js';

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

	const constructionsDescriptionSwiper = new Swiper('.constructions-description__swiper', {
		speed: 400,
		// spaceBetween: 100,
		loop: true,
		autoplay: {
			delay: 2000,
		},
		pagination: {
			el: '.constructions-description-slide__navigation',
			clickable: true
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		}
	});

	/* ACCORDEON */
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
	/* ACCORDEON */

	/* MODALS */
	// const modal = document.querySelector('.modal--active');
	const closeBtns = document.querySelectorAll('.modal__close');
	const callBtns = document.querySelectorAll('.form__btn-call');
	const becomeCustomerBtns = document.querySelectorAll('.become-customer__btn');
	const becomeCustomerModal = document.querySelector('.customer-modal');
	const callModalBtns = document.querySelectorAll('.call-modal__btn');
	const callModal = document.querySelector('.call-modal');

	becomeCustomerBtns.forEach((becomeCustomerBtn) => {
		becomeCustomerBtn.addEventListener('click', () => {
			becomeCustomerModal.classList.add('modal--active');
			document.body.style.overflow = 'hidden';
		});
	});
	callModalBtns.forEach((callModalBtn) => {
		callModalBtn.addEventListener('click', () => {
			callModal.classList.add('modal--active');
			document.body.style.overflow = 'hidden';
		});
	});

	closeBtns.forEach((closeBtn) => {
		closeBtn.addEventListener('click', () => {
			document.querySelector('.modal--active').classList.remove('modal--active');
			document.body.style.overflow = 'auto';
		});
	});
	callBtns.forEach((closeBtn) => {
		closeBtn.addEventListener('click', (e) => {
			e.preventDefault();
			document.querySelector('.modal--active').classList.remove('modal--active');
			document.body.style.overflow = 'auto';
		});
	});

	becomeCustomerModal.addEventListener('click', (e) => {
		if (e.target.parentElement === becomeCustomerModal) {
			becomeCustomerModal.classList.remove('modal--active');
			document.body.style.overflow = 'auto';
		}
	});
	callModal.addEventListener('click', (e) => {
		if (e.target.parentElement === callModal) {
			callModal.classList.remove('modal--active');
			document.body.style.overflow = 'auto';
		}
	});
	/* MODALS */

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

	/* MAP */
	const mapBtns = document.querySelectorAll('.our-contacts__btn');
	const map = document.querySelector('.bottom-map');

	mapBtns.forEach((mapBtn) => {
		mapBtn.addEventListener('click', () => {
			if(!map.classList.contains('active')) {
				mapBtn.classList.add('active');
				map.classList.add('active');
				// map.scrollIntoView();
			} else {
				mapBtn.classList.remove('active');
				map.classList.remove('active');
			}
		});
	});
	/* MAP */

	/* CUSTOM */
	const selectCustomInit = (widgetClassName) => {
		const selectOptions = document.querySelectorAll(`.${widgetClassName} .constructions__real-select option`);
		const selectBtn = document.querySelector(`.${widgetClassName} .constructions__custom-select`);
		const widget = document.querySelector(`.${widgetClassName}.constructions__left-widget`);
		const rootItems = document.querySelector(`.${widgetClassName} .constructions__custom-items`);
		let allCount = 0;

		const optionNames = [];
		selectOptions.forEach((selectOption) => {
			optionNames.push({param: selectOption.textContent, count: selectOption.getAttribute('data-count')});
			allCount += +selectOption.getAttribute('data-count');
		});

		optionNames.forEach((optionName, index) => {
			if(index === 0) {
				rootItems.innerHTML +=`
					<div class="constructions__custom-default">${optionName.param}</div>
				`;
			} else {
				rootItems.innerHTML += `
					<div class="constructions__custom-item">
						<div class="constructions__custom-item-inner">
							<h6 class="constructions__custom-item-title">${optionName.param}</h6>
							<div class="constructions__custom-item-count">${optionName.count}</div>
						</div>
					</div>
				`;
			}
		});

		document.querySelector(`.${widgetClassName} .constructions__custom-select-count`).textContent = allCount;
		selectBtn.addEventListener('click', () => {
			if(!selectBtn.parentElement.classList.contains('active')) {
				selectBtn.parentElement.classList.add('active');
			} else {
				selectBtn.parentElement.classList.remove('active');
			}
		});

		document.body.addEventListener('click', (e) => {
			if(!e.composedPath().includes(widget)) {
				widget.classList.remove('active');
			}
		});

		const selectCustomItems = document.querySelectorAll(`.${widgetClassName} .constructions__custom-default, .${widgetClassName} .constructions__custom-item`);

		selectCustomItems.forEach((selectCustomItem, index) => {
			selectCustomItem.addEventListener('click', () => {
				if(index === 0) {
					widget.classList.remove('active');
					document.querySelector(`.${widgetClassName} .constructions__custom-select-param`).textContent = document.querySelector(`.${widgetClassName} .constructions__custom-default`).textContent;
					document.querySelector(`.${widgetClassName} .constructions__custom-select-count`).textContent = allCount;
					document.querySelector(`.${widgetClassName} .constructions__real-select`).selectedIndex = index;
					selectCustomItems.forEach((selectCustomItem) => selectCustomItem.classList.remove('active'));
				} else {
					widget.classList.remove('active');
					const param = selectCustomItem.firstElementChild.firstElementChild.textContent;
					const count = selectCustomItem.firstElementChild.lastElementChild.textContent;
					document.querySelector(`.${widgetClassName} .constructions__custom-select-param`).textContent = param;
					document.querySelector(`.${widgetClassName} .constructions__custom-select-count`).textContent = count;
					document.querySelector(`.${widgetClassName} .constructions__real-select`).selectedIndex = index;
					selectCustomItems.forEach((selectCustomItem) => selectCustomItem.classList.remove('active'));
					selectCustomItem.classList.add('active');
				}
			});
		});
	};
	
	// selectCustomInit('widget-location');

	const widgetSelects = document.querySelectorAll('.widget-select');

	widgetSelects.forEach((widgetSelect) => {
		const widgetClassName = widgetSelect.classList[widgetSelect.classList.length - 1];
		selectCustomInit(widgetClassName);
	});

	const widgetDate = document.querySelectorAll('.constructions__fake-date-start, .constructions__fake-date-end');

	widgetDate.flatpickr({
		dateFormat: "d-m-Y",
		"locale": "ru",
		onChange: function(selectedDates, dateStr, instance) {
			const dateStart = document.querySelector('.constructions__fake-date-start').value;
			const dateEnd = document.querySelector('.constructions__fake-date-end').value;
		},
	});
	/* CUSTOM */
});