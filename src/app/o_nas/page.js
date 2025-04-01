'use client';

import React from 'react';

const AboutPage = () => {
	return (
		<div
			className='container'
			style={{ marginTop: '100px', padding: '2rem 0' }}>
			<h1 className='section-title'>
				O <span>nas</span>
			</h1>
			<div style={{ maxWidth: '800px', margin: '0 auto' }}>
				<p
					style={{
						fontSize: '1.1rem',
						lineHeight: '1.6',
						color: 'var(--text-secondary)',
						marginBottom: '1.5rem',
					}}>
					DropHub to społeczność entuzjastów kryptowalut i technologii
					blockchain, która powstała z pasji do nowych technologii i chęci
					dzielenia się wiedzą.
				</p>
				<p
					style={{
						fontSize: '1.1rem',
						lineHeight: '1.6',
						color: 'var(--text-secondary)',
						marginBottom: '1.5rem',
					}}>
					Naszą misją jest tworzenie przyjaznego miejsca dla wszystkich
					zainteresowanych światem kryptowalut - zarówno dla początkujących, jak
					i doświadczonych inwestorów i deweloperów.
				</p>
				<p
					style={{
						fontSize: '1.1rem',
						lineHeight: '1.6',
						color: 'var(--text-secondary)',
						marginBottom: '1.5rem',
					}}>
					Dołącz do naszej społeczności na Discordzie, aby być na bieżąco z
					najnowszymi trendami, uczestniczyć w dyskusjach i zdobywać cenną
					wiedzę od innych członków społeczności.
				</p>
				<div style={{ marginTop: '2rem', textAlign: 'center' }}>
					<a
						href='https://discord.gg/Awx7TMy6UZ'
						className='join-btn'
						target='_blank'
						rel='noopener noreferrer'
						style={{ display: 'inline-flex', padding: '1rem 2rem' }}>
						Dołącz do nas na Discordzie
					</a>
				</div>
			</div>
		</div>
	);
};

export default AboutPage;
