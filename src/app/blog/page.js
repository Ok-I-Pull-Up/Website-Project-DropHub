import Link from 'next/link';
import Image from 'next/image';
import { FaClock, FaUser, FaTag } from 'react-icons/fa';

// Metadane dla SEO
export const metadata = {
	title: 'Blog kryptowalutowy | DropHub - polska społeczność kryptowalutowa',
	description:
		'Najnowsze artykuły o kryptowalutach, blockchain, NFT, DeFi i trendach w świecie krypto. Analizy, poradniki i aktualności od polskiej społeczności.',
	keywords:
		'blog kryptowalutowy, bitcoin, ethereum, blockchain, NFT, DeFi, kryptowaluty polska, edukacja krypto',
	openGraph: {
		title: 'Blog kryptowalutowy | DropHub',
		description:
			'Najnowsze artykuły o kryptowalutach, blockchain, NFT i trendach w świecie krypto.',
		images: ['/images/blog/blog-og-image.jpg'],
		url: 'https://drophub.pl/blog',
		type: 'website',
	},
};

// Dane przykładowych artykułów
const blogPosts = [
	{
		id: 1,
		title:
			'Jak bezpiecznie przechowywać kryptowaluty - poradnik dla początkujących',
		slug: 'jak-bezpiecznie-przechowywac-kryptowaluty',
		excerpt:
			'Bezpieczeństwo twoich cyfrowych aktywów powinno być priorytetem. W tym artykule omawiamy najlepsze praktyki przechowywania kryptowalut, od hardware wallets po cold storage.',
		category: 'Bezpieczeństwo',
		readTime: '8 min',
		date: '15 marca 2023',
		author: 'Michał Kowalski',
		imageSrc: '/images/blog/wallet-security.jpg',
		tags: ['bezpieczeństwo', 'portfele', 'cold storage'],
	},
	{
		id: 2,
		title:
			'Co to jest DeFi i jak zacząć korzystać z finansów zdecentralizowanych?',
		slug: 'co-to-jest-defi-jak-zaczac',
		excerpt:
			'Zdecentralizowane finanse (DeFi) rewolucjonizują tradycyjne usługi finansowe. Dowiedz się, jak działają protokoły DeFi i jakie możliwości oferują dla przeciętnego użytkownika.',
		category: 'DeFi',
		readTime: '10 min',
		date: '28 lutego 2023',
		author: 'Anna Nowak',
		imageSrc: '/images/blog/defi-explained.jpg',
		tags: ['DeFi', 'Ethereum', 'staking', 'yield farming'],
	},
	{
		id: 3,
		title: 'Bitcoin - historia króla kryptowalut i perspektywy na przyszłość',
		slug: 'bitcoin-historia-krola-kryptowalut',
		excerpt:
			'Od tajemniczego whitepaper Satoshi Nakamoto do globalnego fenomenu wartego biliony dolarów. Poznaj historię Bitcoina i prognozy ekspertów na nadchodzące lata.',
		category: 'Bitcoin',
		readTime: '12 min',
		date: '10 stycznia 2023',
		author: 'Paweł Wiśniewski',
		imageSrc: '/images/blog/bitcoin-history.jpg',
		tags: ['Bitcoin', 'historia', 'analiza'],
	},
];

export default function BlogPage() {
	return (
		<main className='blog-page'>
			<div className='blog-hero'>
				<div className='container'>
					<h1 className='blog-hero-title'>
						Blog <span>DropHub</span>
					</h1>
					<p className='blog-hero-description'>
						Najnowsze artykuły, analizy i poradniki ze świata kryptowalut i
						blockchain. Poznaj opinie ekspertów i bądź na bieżąco z trendami w
						świecie cyfrowych aktywów.
					</p>

					<div className='blog-categories'>
						<Link href='/blog' className='blog-category-tag active'>
							Wszystkie
						</Link>
						<Link href='/blog?category=Bitcoin' className='blog-category-tag'>
							Bitcoin
						</Link>
						<Link href='/blog?category=Ethereum' className='blog-category-tag'>
							Ethereum
						</Link>
						<Link href='/blog?category=DeFi' className='blog-category-tag'>
							DeFi
						</Link>
						<Link href='/blog?category=NFT' className='blog-category-tag'>
							NFT
						</Link>
						<Link
							href='/blog?category=Bezpieczeństwo'
							className='blog-category-tag'>
							Bezpieczeństwo
						</Link>
					</div>
				</div>
			</div>

			<section className='featured-posts'>
				<div className='container'>
					<h2 className='section-title'>
						Polecane <span>artykuły</span>
					</h2>

					<div className='featured-grid'>
						{blogPosts.slice(0, 3).map((post) => (
							<article key={post.id} className='featured-card'>
								<div className='featured-image-container'>
									<div
										className='featured-image-placeholder'
										style={{
											backgroundColor: '#1a202c',
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'center',
											flexDirection: 'column',
											color: 'white',
											backgroundImage:
												'linear-gradient(90deg, rgba(121, 40, 202, 0.2), rgba(49, 130, 206, 0.2))',
											position: 'relative',
										}}>
										<div
											style={{
												position: 'absolute',
												top: '15px',
												left: '15px',
												fontSize: '18px',
												fontWeight: 'bold',
											}}>
											<span style={{ color: '#7928ca' }}>Drop</span>
											<span style={{ color: '#3182ce' }}>Hub</span>
										</div>
										<h3
											style={{
												marginTop: '25px',
												textAlign: 'center',
												padding: '0 20px',
												fontSize: '20px',
											}}>
											{post.title.substring(0, 40)}...
										</h3>
										<p
											style={{
												fontSize: '14px',
												opacity: 0.7,
												marginTop: '10px',
												textAlign: 'center',
											}}>
											Placeholder
										</p>
										<div className='featured-category'>{post.category}</div>
									</div>
								</div>

								<div className='featured-content'>
									<h3 className='featured-title'>
										<Link href={`/blog/${post.slug}`}>{post.title}</Link>
									</h3>

									<p className='featured-excerpt'>{post.excerpt}</p>

									<div className='featured-meta'>
										<span className='meta-item'>
											<FaUser /> {post.author}
										</span>
										<span className='meta-item'>
											<FaClock /> {post.readTime}
										</span>
										<span className='meta-item'>
											<FaTag /> {post.category}
										</span>
									</div>

									<Link href={`/blog/${post.slug}`} className='read-more-btn'>
										Czytaj więcej
									</Link>
								</div>
							</article>
						))}
					</div>
				</div>
			</section>

			<section className='all-posts'>
				<div className='container'>
					<h2 className='section-title'>
						Wszystkie <span>artykuły</span>
					</h2>

					<div className='blog-grid'>
						{blogPosts.map((post) => (
							<article key={post.id} className='blog-card'>
								<div className='blog-image-container'>
									<div
										className='blog-image-placeholder'
										style={{ backgroundColor: '#1a202c' }}>
										{/* Tutaj w rzeczywistej implementacji byłby komponent Image z Next.js */}
									</div>
									<div className='blog-category'>{post.category}</div>
								</div>

								<div className='blog-content'>
									<h3 className='blog-title'>
										<Link href={`/blog/${post.slug}`}>{post.title}</Link>
									</h3>

									<p className='blog-description'>{post.excerpt}</p>

									<div className='blog-meta'>
										<span>
											<FaUser /> {post.author}
										</span>
										<span>
											<FaClock /> {post.readTime}
										</span>
									</div>
								</div>
							</article>
						))}
					</div>
				</div>
			</section>

			<section className='newsletter'>
				<div className='container'>
					<div className='newsletter-container'>
						<h2 className='newsletter-title'>Zapisz się do newslettera</h2>
						<p className='newsletter-description'>
							Otrzymuj najnowsze artykuły, analizy rynku i ekskluzywne oferty
							bezpośrednio na swój e-mail.
						</p>
						<form className='newsletter-form'>
							<input
								type='email'
								className='newsletter-input'
								placeholder='Twój adres email'
								required
							/>
							<button type='submit' className='newsletter-btn'>
								Zapisz się
							</button>
						</form>
					</div>
				</div>
			</section>
		</main>
	);
}
