const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.intersectionRatio > 0) {
			console.log(entry.target.parentElement.id);

			switch (entry.target.parentElement.id) {
				case 'faq':
				case 'about':
					if (entry.isIntersecting) {
						let fDirection, sDirection;

						if (entry.target.parentElement.id == 'about') {
							fDirection = 'odd';
							sDirection = 'even';
						} else {
							fDirection = 'even';
							sDirection = 'odd';
						}

						const animatedElementLeft = entry.target.querySelectorAll(`.about__block:nth-child(${fDirection})`);
						animatedElementLeft.forEach((animatedTarget) => {
							animatedTarget.classList.add('section-animationSL');
						});

						const animatedElementRight = entry.target.querySelectorAll(`.about__block:nth-child(${sDirection})`);
						animatedElementRight.forEach((animatedTarget) => {
							animatedTarget.classList.add('section-animationRL');
						});

						return;
					}

					break;
				case 'packages':
					if (entry.isIntersecting) {
						const animatedElementLeft = entry.target.querySelector('.card:nth-child(1)');
						animatedElementLeft.classList.add('section-cardAnimationSL');

						const animatedElementRight = entry.target.querySelector('.card:nth-child(2)');
						animatedElementRight.classList.add('section-cardAnimationRL');

						setTimeout(function () {
							cards.forEach((card) => {
								card.style.opacity = 1;
							});
						}, 700);

						return;
					}

					break;
				default:
					break;
			}
		}

		// console.log(entry.target.parentElement.id);
		// const square = entry.target.querySelector('.footer__box');

		// if (entry.isIntersecting) {
		// 	square.classList.add('footer__box-animation');
		// 	return; // if we added the class, exit the function
		// }

		// We're not intersecting, so remove the class!
		// square.classList.remove('footer__box-animation');
	});
});

const targets = document.querySelectorAll('.section-animate .wrapper');
targets.forEach((target) => observer.observe(target));
