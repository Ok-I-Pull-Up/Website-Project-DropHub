const menuItems = document.querySelectorAll('.navbar__menu a');
const scrollSpySections = document.querySelectorAll('.section');
const nav = document.querySelector('nav');
const navbar = document.querySelector('.navbar');
const hamBtn = document.querySelector('.navbar__burger .fa-bars');
const xBtn = document.querySelector('.navbar__mobile-close .fa-xmark');
const navMobile = document.querySelector('.navbar__mobile');
const navMobileA = document.querySelectorAll('.navbar__mobile a');
const body = document.querySelector('body');
const footerYear = document.querySelector('.footer__copyright-year');

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

const handleScrollSpy = () => {
	if (document.body.classList.contains('main-page')) {
		const sections = [];

		scrollSpySections.forEach((section) => {
			if (window.scrollY <= section.offsetTop + section.offsetHeight - 96) {
				sections.push(section);

				const activeSection = document.querySelector(
					`[href*="${sections[0].id}"]`
				);

				menuItems.forEach((item) => item.classList.remove('active'));

				activeSection.classList.add('active');
			}

			if (
				window.innerHeight + window.scrollY >=
				document.body.offsetHeight - 180
			) {
				const lastSection = document.querySelector(
					'.navbar__menu a:last-of-type'
				);

				menuItems.forEach((item) => item.classList.remove('active'));

				lastSection.classList.add('active');
			}
		});
	}
};

const menuToggle = () => {
	navMobile.classList.toggle('navbar__mobile--active');

	if (navMobile.classList.contains('navbar__mobile--active')) {
		body.style.overflow = 'hidden';
	} else {
		body.style.overflow = 'auto';
	}
};

const navChangeBgc = () => {
	if (window.scrollY >= 80) {
		nav.classList.add('nav__scroll');
		navbar.classList.add('navbar__scroll');
	} else {
		nav.classList.remove('nav__scroll');
		navbar.classList.remove('navbar__scroll');
	}
};

handleCurrentYear();
window.addEventListener('scroll', handleScrollSpy);
window.addEventListener('scroll', navChangeBgc);
hamBtn.addEventListener('click', menuToggle);
xBtn.addEventListener('click', menuToggle);
navMobileA.forEach((hrefs) => {
	hrefs.addEventListener('click', menuToggle);
});
