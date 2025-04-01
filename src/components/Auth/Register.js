'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useFirebase } from '@/context/FirebaseContext';
import {
	FaEnvelope,
	FaLock,
	FaUser,
	FaGoogle,
	FaFacebook,
	FaCube,
} from 'react-icons/fa';

const Register = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);
	const router = useRouter();
	const { createUser, signInWithGoogle, signInWithFacebook } = useFirebase();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError('');

		// Walidacja formularza
		if (password !== confirmPassword) {
			setError('Hasła nie są identyczne. Proszę spróbować ponownie.');
			return;
		}

		if (password.length < 6) {
			setError('Hasło musi mieć co najmniej 6 znaków.');
			return;
		}

		setLoading(true);

		try {
			const result = await createUser(email, password, name);

			if (result.success) {
				router.push('/profil');
			} else {
				setError(result.error.message || 'Wystąpił błąd podczas rejestracji.');
			}
		} catch (err) {
			setError('Wystąpił błąd podczas rejestracji. Spróbuj ponownie.');
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
						'Wystąpił błąd podczas rejestracji przez Google.'
				);
			}
		} catch (err) {
			setError('Wystąpił błąd podczas rejestracji. Spróbuj ponownie.');
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
						'Wystąpił błąd podczas rejestracji przez Facebook.'
				);
			}
		} catch (err) {
			setError('Wystąpił błąd podczas rejestracji. Spróbuj ponownie.');
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
						<h1 className='auth-title'>Rejestracja</h1>
						<p className='auth-description'>
							Stwórz konto, aby dołączyć do społeczności DropHub
						</p>

						{error && <div className='error-message'>{error}</div>}

						<form onSubmit={handleSubmit} className='auth-form'>
							<div className='form-group'>
								<label htmlFor='name'>Imię i nazwisko</label>
								<div className='input-group'>
									<FaUser className='input-icon' />
									<input
										type='text'
										id='name'
										value={name}
										onChange={(e) => setName(e.target.value)}
										placeholder='Twoje imię i nazwisko'
										required
									/>
								</div>
							</div>

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
										placeholder='Minimum 6 znaków'
										required
									/>
								</div>
							</div>

							<div className='form-group'>
								<label htmlFor='confirm-password'>Powtórz hasło</label>
								<div className='input-group'>
									<FaLock className='input-icon' />
									<input
										type='password'
										id='confirm-password'
										value={confirmPassword}
										onChange={(e) => setConfirmPassword(e.target.value)}
										placeholder='Powtórz swoje hasło'
										required
									/>
								</div>
							</div>

							<button type='submit' className='auth-button' disabled={loading}>
								{loading ? 'Rejestracja...' : 'Zarejestruj się'}
							</button>

							<div className='auth-links'>
								<p className='register-link'>
									Masz już konto?
									<Link href='/login'>Zaloguj się</Link>
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

export default Register;
