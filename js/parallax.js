window.onload = function () {
	if (window.innerWidth > 772) {
		const bg1 = document.querySelector('body');
		const bg2 = document.querySelector('.found');
		const windowWidth = window.innerWidth / 30;
		const windowHeight = window.innerHeight / 30;

		bg1.addEventListener('mousemove', (e) => {
			const mouseX = e.clientX / windowWidth;
			const mouseY = e.clientY / windowHeight;

			bg2.style.transform = `translate3d(-${mouseX}%, -${mouseY}%, 0)`;
		});
	}
};
