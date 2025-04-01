'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useFirebase } from '@/context/FirebaseContext';
import {
	FaEnvelope,
	FaLock,
	FaArrowLeft,
	FaGoogle,
	FaFacebook,
	FaCube,
} from 'react-icons/fa';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);
	const router = useRouter();
	const { signIn, signInWithGoogle, signInWithFacebook } = useFirebase();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError('');
		setLoading(true);

		try {
			const result = await signIn(email, password);

			if (result.success) {
				router.push('/profil');
			} else {
				setError(result.error.message || 'Wystąpił błąd podczas logowania.');
			}
		} catch (err) {
			setError('Wystąpił błąd podczas logowania. Spróbuj ponownie.');
		} finally {
			setLoading(false);
		}
	};

	const handleGoogleSignIn = async () => {
		setError('');
		setLoading(true);

		try {
			const result = await signInWithGoogle();

			if (result.success) {
				router.push('/profil');
			} else {
				setError(
					result.error.message ||
						'Wystąpił błąd podczas logowania przez Google.'
				);
			}
		} catch (err) {
			setError('Wystąpił błąd podczas logowania. Spróbuj ponownie.');
		} finally {
			setLoading(false);
		}
	};

	const handleFacebookSignIn = async () => {
		setError('');
		setLoading(true);

		try {
			const result = await signInWithFacebook();

			if (result.success) {
				router.push('/profil');
			} else {
				setError(
					result.error.message ||
						'Wystąpił błąd podczas logowania przez Facebook.'
				);
			}
		} catch (err) {
			setError('Wystąpił błąd podczas logowania. Spróbuj ponownie.');
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className='auth-page'>
			<div className='container'>
				<div className='auth-container'>
					<div className='auth-logo'>
						<Link href='/'>
							<FaCube className='auth-logo-icon' />
							<span>
								Drop<span>Hub</span>
							</span>
						</Link>
					</div>

					<div className='auth-content'>
						<h1 className='auth-title'>Logowanie</h1>
						<p className='auth-description'>
							Zaloguj się, aby uzyskać dostęp do swojego konta
						</p>

						{error && <div className='error-message'>{error}</div>}

						<form onSubmit={handleSubmit} className='auth-form'>
							<div className='form-group'>
								<label htmlFor='email'>Adres email</label>
								<div className='input-group'>
									<FaEnvelope className='input-icon' />
									<input
										type='email'
										id='email'
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										placeholder='Twój adres email'
										required
									/>
								</div>
							</div>

							<div className='form-group'>
								<label htmlFor='password'>Hasło</label>
								<div className='input-group'>
									<FaLock className='input-icon' />
									<input
										type='password'
										id='password'
										value={password}
										onChange={(e) => setPassword(e.target.value)}
										placeholder='Twoje hasło'
										required
									/>
								</div>
							</div>

							<button type='submit' className='auth-button' disabled={loading}>
								{loading ? 'Logowanie...' : 'Zaloguj się'}
							</button>

							<div className='auth-links'>
								<Link href='/reset-password' className='forgot-password'>
									Zapomniałeś hasła?
								</Link>
								<p className='register-link'>
									Nie masz jeszcze konta?{' '}
									<Link href='/register'>Zarejestruj się</Link>
								</p>
							</div>
						</form>

						<div className='auth-divider'>
							<span>lub</span>
						</div>

						<div className='social-auth-buttons'>
							<button
								type='button'
								className='social-auth-button google'
								onClick={handleGoogleSignIn}
								disabled={loading}>
								<FaGoogle />
								Google
							</button>
							<button
								type='button'
								className='social-auth-button facebook'
								onClick={handleFacebookSignIn}
								disabled={loading}>
								<FaFacebook />
								Facebook
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
