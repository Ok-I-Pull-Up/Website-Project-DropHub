import Link from 'next/link';
import {
	FaCube,
	FaDiscord,
	FaTwitter,
	FaTelegram,
	FaYoutube,
	FaArrowRight,
} from 'react-icons/fa';

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='footer-gradient'></div>
			<div className='container'>
				<div className='footer-content'>
					<div className='footer-brand'>
						<Link href='/' className='footer-logo'>
							<FaCube className='logo-icon' /> Drop<span>Hub</span>
						</Link>
						<p className='footer-description'>
							Polska społeczność kryptowalutowa, dzieląca się wiedzą,
							doświadczeniami i możliwościami w świecie blockchain.
						</p>
						<div className='footer-social'>
							{[
								{
									href: 'https://discord.gg/Awx7TMy6UZ',
									icon: <FaDiscord />,
									label: 'Discord',
								},
								{ href: '/', icon: <FaTwitter />, label: 'Twitter' },
								{ href: '/', icon: <FaTelegram />, label: 'Telegram' },
								{ href: '/', icon: <FaYoutube />, label: 'YouTube' },
							].map(({ href, icon, label }) => (
								<a
									key={label}
									href={href}
									target='_blank'
									rel='noopener noreferrer'
									aria-label={label}
									className='social-link'>
									{icon}
								</a>
							))}
						</div>
					</div>
					<nav className='footer-nav'>
						{[
							{
								title: 'Nawigacja',
								links: [
									{ href: '/', label: 'Strona główna' },
									{ href: '#features', label: 'O nas' },
									{ href: '#blog', label: 'Blog' },
									{ href: '#newsletter', label: 'Newsletter' },
								],
							},
							{
								title: 'Zasoby',
								links: [
									{ href: '/edukacja', label: 'Edukacja' },
									{ href: '/', label: 'Airdropy' },
									{ href: '/', label: 'Analizy' },
									{ href: '/', label: 'Bezpieczeństwo' },
								],
							},
							{
								title: 'Kontakt',
								links: [
									{ href: 'https://discord.gg/Awx7TMy6UZ', label: 'Discord' },
									{ href: '/', label: 'Twitter' },
									{ href: '/', label: 'Email' },
								],
							},
						].map(({ title, links }) => (
							<div key={title} className='footer-column'>
								<h3 className='footer-heading'>{title}</h3>
								<ul className='footer-links'>
									{links.map(({ href, label }) => (
										<li key={label}>
											<Link href={href} className='footer-link'>
												<FaArrowRight className='footer-link-icon' /> {label}
											</Link>
										</li>
									))}
								</ul>
							</div>
						))}
					</nav>
				</div>
				<div className='footer-divider'></div>
				<div className='footer-bottom'>
					<p>
						&copy; {new Date().getFullYear()} DropHub. Wszelkie prawa
						zastrzeżone.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
