'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FaDiscord, FaUser, FaSignOutAlt, FaCube } from 'react-icons/fa';
import { useFirebase } from '../context/FirebaseContext';

const Header = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const { user, signOut } = useFirebase();
	const router = useRouter();
	const headerRef = useRef(null);

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 50);
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const closeMenu = useCallback(() => setMobileMenuOpen(false), []);

	const handleLogout = useCallback(async () => {
		try {
			const result = await signOut();
			if (result.success) router.push('/login');
			closeMenu();
		} catch (error) {
			console.error('Błąd podczas wylogowywania:', error);
		}
	}, [signOut, router, closeMenu]);

	return (
		<header ref={headerRef} className={`header ${scrolled ? 'scrolled' : ''}`}>
			<div className='container'>
				<div className='header-content'>
					<Link href='/' className='logo'>
						<FaCube className='logo-icon' />
						<span>DropHub</span>
					</Link>

					<button
						className={`mobile-menu-btn ${mobileMenuOpen ? 'active' : ''}`}
						onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
						aria-label='Menu mobilne'>
						<span className='hamburger-line'></span>
						<span className='hamburger-line'></span>
						<span className='hamburger-line'></span>
					</button>

					<nav className={mobileMenuOpen ? 'active' : ''}>
						<ul>
							{['/', '/airdropy', '/edukacja', '/blog', '/o_nas'].map(
								(path, index) => (
									<li key={index}>
										<Link href={path} onClick={closeMenu}>
											{path === '/'
												? 'Strona główna'
												: path === '/o_nas'
												? 'O nas'
												: path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
										</Link>
									</li>
								)
							)}
							<li className='mobile-nav-join'>
								<a
									href='https://discord.gg/Awx7TMy6UZ'
									target='_blank'
									rel='noopener noreferrer'
									onClick={closeMenu}>
									<FaDiscord /> Dołącz do nas
								</a>
							</li>
						</ul>
					</nav>

					<div className='header-actions'>
						<a
							href='https://discord.gg/Awx7TMy6UZ'
							className='join-btn'
							target='_blank'
							rel='noopener noreferrer'
							onClick={closeMenu}>
							<FaDiscord /> Dołącz do nas
						</a>
						{user ? (
							<div className='auth-buttons'>
								<Link href='/profil' className='auth-btn'>
									<FaUser /> Mój profil
								</Link>
								<button className='auth-btn logout-btn' onClick={handleLogout}>
									<FaSignOutAlt /> Wyloguj
								</button>
							</div>
						) : (
							<Link href='/login' className='login-btn'>
								Logowanie
							</Link>
						)}
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
