'use client';

import React, { useState, useEffect, useRef } from 'react';
import { FaDiscord, FaInfoCircle } from 'react-icons/fa';

const Hero = () => {
	return (
		<section className='hero'>
			<div className='container'>
				<div className='hero-content'>
					<h1 className='hero-title'>
						Odkryj świat <span>kryptowalut</span> z polską społecznością
					</h1>
					<p className='hero-description'>
						DropHub to miejsce, gdzie entuzjaści kryptowalut spotykają się, by
						dzielić się wiedzą, doświadczeniami i odkrywać nowe możliwości w
						świecie blockchain i kryptowalut.
					</p>
					<div className='hero-cta'>
						<a
							href='https://discord.gg/Awx7TMy6UZ'
							className='join-btn'
							target='_blank'
							rel='noopener noreferrer'>
							<FaDiscord /> Dołącz do nas
						</a>
						<a href='#features' className='secondary-btn'>
							<FaInfoCircle /> Dowiedz się więcej
						</a>
					</div>
				</div>
				<CryptoAnimations />
			</div>
			<div className='blob blob-1'></div>
			<div className='blob blob-2'></div>
		</section>
	);
};

const CryptoAnimations = () => {
	const [isLoaded, setIsLoaded] = useState(false);
	const btcRef = useRef(null);
	const ethRef = useRef(null);
	const dogeRef = useRef(null);
	const avaxRef = useRef(null);

	useEffect(() => {
		const timer = setTimeout(() => setIsLoaded(true), 300);
		return () => clearTimeout(timer);
	}, []);

	useEffect(() => {
		if (!isLoaded) return;
		[btcRef, ethRef, dogeRef, avaxRef].forEach((ref) => createParticles(ref));
	}, [isLoaded]);

	const createParticles = (ref, count = 12) => {
		if (!ref.current) return;
		const circle = ref.current;

		// Usuwamy tylko elementy z klasą crypto-particle
		const existingParticles = circle.querySelectorAll('.crypto-particle');
		existingParticles.forEach((particle) => particle.remove());

		for (let i = 0; i < count; i++) {
			const particle = document.createElement('div');
			particle.classList.add('crypto-particle');

			const angle = Math.random() * Math.PI * 2;
			const radius = 90 * Math.sqrt(Math.random());
			const x = Math.cos(angle) * radius;
			const y = Math.sin(angle) * radius;

			particle.style.left = `calc(50% + ${x}px)`;
			particle.style.top = `calc(50% + ${y}px)`;

			const tx = (Math.random() - 0.5) * 180;
			const ty = (Math.random() - 0.5) * 180;
			const duration = 3 + Math.random() * 3;
			const delay = Math.random() * 5;

			particle.style.setProperty('--tx', `${tx}px`);
			particle.style.setProperty('--ty', `${ty}px`);
			particle.style.animation = `particle-animation ${duration}s ${delay}s infinite`;

			circle.appendChild(particle);
		}
	};

	return (
		<div className={`crypto-container ${isLoaded ? 'loaded' : ''}`}>
			<div className='crypto-animation btc-animation' data-crypto='Bitcoin'>
				<div className='crypto-circle btc-circle' ref={btcRef}>
					<div className='crypto-icon btc-icon'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 24 24'
							fill='#f7931a'>
							<path d='M23.638 14.904c-1.602 6.43-8.113 10.34-14.542 8.736C2.67 22.05-1.244 15.525.362 9.105 1.962 2.67 8.475-1.243 14.9.358c6.43 1.605 10.342 8.115 8.738 14.548v-.002zm-6.35-4.613c.24-1.59-.974-2.45-2.64-3.03l.54-2.153-1.315-.33-.525 2.107c-.345-.087-.705-.167-1.064-.25l.53-2.104-1.32-.33-.54 2.154c-.285-.065-.565-.128-.84-.196l.001-.005-1.815-.455-.35 1.406s.975.225.955.236c.535.136.63.486.615.766l-.61 2.47c.037.01.85.02.14.038l-.142-.037-.86 3.45c-.07.17-.23.425-.605.328.015.02-.955-.24-.955-.24l-.655 1.51 1.716.43c.32.08.632.165.94.244l-.545 2.184 1.32.33.54-2.15c.36.1.705.19 1.05.273l-.54 2.14 1.32.33.55-2.19c2.24.427 3.93.257 4.64-1.774.57-1.637-.03-2.58-1.217-3.196.854-.193 1.5-.76 1.68-1.93h.01zm-3.01 4.22c-.404 1.64-3.157.75-4.05.53l.72-2.9c.896.23 3.757.67 3.33 2.37zm.41-4.24c-.37 1.49-2.662.735-3.405.55l.654-2.64c.744.18 3.137.52 2.75 2.084v.006z' />
						</svg>
					</div>
				</div>
			</div>
			<div className='crypto-animation eth-animation' data-crypto='Ethereum'>
				<div className='crypto-circle eth-circle' ref={ethRef}>
					<div className='crypto-icon eth-icon'>
						<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'>
							<g fill='none' fillRule='evenodd'>
								<circle cx='16' cy='16' r='16' fill='#627EEA' />
								<g fill='#FFF' fillRule='nonzero'>
									<path fillOpacity='.602' d='M16.498 4v8.87l7.497 3.35z' />
									<path d='M16.498 4L9 16.22l7.498-3.35z' />
									<path
										fillOpacity='.602'
										d='M16.498 21.968v6.027L24 17.616z'
									/>
									<path d='M16.498 27.995v-6.028L9 17.616z' />
									<path
										fillOpacity='.2'
										d='M16.498 20.573l7.497-4.353-7.497-3.348z'
									/>
									<path fillOpacity='.602' d='M9 16.22l7.498 4.353v-7.701z' />
								</g>
							</g>
						</svg>
					</div>
				</div>
			</div>
			<div className='crypto-animation doge-animation' data-crypto='Dogecoin'>
				<div className='crypto-circle doge-circle' ref={dogeRef}>
					<div className='crypto-icon doge-icon'>
						<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
							<circle fill='#f9bf00' cx='256' cy='256' r='256' />
							<path
								fill='#fff'
								d='M257.6,96.2c-9.6,0-24.5,3.2-35.4,9.1-33.3,15.3-58.8,49.3-58.8,94.3,0,23.3,1.2,42.8,7.6,59.4s15.9,33.1,31.8,47.1c-18,9.2-49.6,27.8-54.3,52.4-5.3,27.8,15.3,53.9,54.8,53.9,29,0,73.1,1.3,100.4,1.3,12.2,0,21.9-6.2,21.9-19.5V345.5c0-6.8-2.7-12.2-10.1-14.3h10.9V306.9H292.1V266.1h32.6V241.8H292.1v-39h33.4V178.5H292.1V120.8C281.8,97.9,268.9,96.2,257.6,96.2Z'
							/>
							<path
								fill='#f9bf00'
								d='M239.4,161.1H195V276.2h44.4c6.8,0,38.3,9.6,38.3-52C277.7,170.2,263.1,161.1,239.4,161.1Z'
							/>
						</svg>
					</div>
				</div>
			</div>
			<div className='crypto-animation avax-animation' data-crypto='AVAX'>
				<div className='crypto-circle avax-circle' ref={avaxRef}>
					<div className='crypto-icon avax-icon'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 1503 1504'
							fill='none'>
							<rect x='287' y='258' width='928' height='844' fill='white' />
							<path
								fillRule='evenodd'
								clipRule='evenodd'
								d='M1502.5 752C1502.5 1166.77 1166.27 1503 751.5 1503C336.734 1503 0.5 1166.77 0.5 752C0.5 337.234 336.734 1 751.5 1C1166.27 1 1502.5 337.234 1502.5 752ZM538.688 1050.86H392.94C362.314 1050.86 347.186 1050.86 337.962 1044.96C327.999 1038.5 321.911 1027.8 321.173 1015.99C320.619 1005.11 328.184 992.012 343.312 965.828L703.182 330.781C718.495 304.359 726.243 291.148 736.021 285.96C746.537 280.376 759.083 280.376 769.599 285.96C779.377 291.148 787.126 304.359 802.438 330.781L876.42 460.815L876.797 461.472C893.336 489.636 901.723 503.818 905.65 518.855C910.001 535.534 910.001 553.332 905.65 570.012C901.655 585.131 893.001 599.403 875.378 628.213L700.574 938.913L700.221 939.541C682.426 968.413 673.493 982.863 661.492 993.458C648.338 1005.1 632.549 1013.44 615.463 1017.76C599.333 1021.82 581.547 1021.82 546.086 1021.82L538.688 1050.86ZM906.75 1050.86H1115.59C1146.4 1050.86 1161.9 1050.86 1171.13 1044.78C1181.09 1038.32 1187.36 1027.43 1187.92 1015.63C1188.45 1005.1 1181.05 992.401 1166.36 966.582L1166.27 966.424L1052.91 770.05L1052.67 769.642C1037.76 743.631 1030.27 730.573 1020.54 725.534C1010.02 719.95 997.472 719.95 986.956 725.534C977.362 730.573 969.794 743.631 954.884 769.642L954.64 770.05L841.651 966.043C826.681 992.208 819.174 1005.29 818.711 1015.81C818.156 1027.62 824.244 1038.5 834.207 1044.96C843.431 1050.86 858.559 1050.86 889.185 1050.86H906.75Z'
								fill='#E84142'
							/>
						</svg>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
