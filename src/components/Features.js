'use client';

import React, { useEffect, useRef } from 'react';
import { FaGraduationCap, FaParachuteBox, FaUsers, FaNewspaper, FaChartLine, FaShieldAlt } from 'react-icons/fa';

const Features = () => {
	const featureRefs = useRef([]); // Bez TypeScript

	useEffect(() => {
		if (typeof window === 'undefined') return; // Unikamy błędu na serwerze

		const handleScroll = () => {
			featureRefs.current.forEach((element) => {
				if (element) {
					const position = element.getBoundingClientRect();
					if (position.top < window.innerHeight - 150) {
						element.classList.add('active');
					}
				}
			});
		};

		window.addEventListener('scroll', handleScroll);
		handleScroll(); // Uruchomienie przy załadowaniu

		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const featuresList = [
		{
			icon: <FaGraduationCap />,
			title: 'Edukacja',
			description: 'Dostarczamy rzetelne i aktualne materiały edukacyjne dla początkujących i zaawansowanych użytkowników kryptowalut.',
		},
		{
			icon: <FaParachuteBox />,
			title: 'Airdropy',
			description: 'Informujemy o najnowszych i najbardziej wartościowych airdropach w świecie kryptowalut i blockchain.',
		},
		{
			icon: <FaUsers />,
			title: 'Społeczność',
			description: 'Budujemy aktywną społeczność pasjonatów kryptowalut, którzy wzajemnie wspierają się w rozwoju i zdobywaniu wiedzy.',
		},
		{
			icon: <FaNewspaper />,
			title: 'Aktualności',
			description: 'Dostarczamy najświeższe informacje z rynku kryptowalut, analizy i komentarze do najważniejszych wydarzeń.',
		},
		{
			icon: <FaChartLine />,
			title: 'Analizy',
			description:
				'Prezentujemy profesjonalne analizy rynku, trendów i projektów kryptowalutowych, które pomagają w podejmowaniu świadomych decyzji.',
		},
		{
			icon: <FaShieldAlt />,
			title: 'Bezpieczeństwo',
			description: 'Dzielimy się wiedzą na temat bezpiecznego przechowywania kryptowalut i unikania popularnych oszustw w branży.',
		},
	];

	return (
		<section className='features' id='features'>
			<div className='container'>
				<h2 className='section-title'>
					Czym jest <span>DropHub</span>?
				</h2>
				<div className='features-grid'>
					{featuresList.map((feature, index) => (
						<div className='feature-card fade-in' key={index} ref={(el) => (featureRefs.current[index] = el)}>
							<div className='feature-icon'>{feature.icon}</div>
							<h3 className='feature-title'>{feature.title}</h3>
							<p className='feature-description'>{feature.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Features;
