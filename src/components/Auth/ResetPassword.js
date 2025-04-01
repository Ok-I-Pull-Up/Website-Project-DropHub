'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useFirebase } from '@/context/FirebaseContext';
import { FaEnvelope, FaCube } from 'react-icons/fa';

const ResetPassword = () => {
	const [email, setEmail] = useState('');
	const [error, setError] = useState('');
	const [success, setSuccess] = useState('');
	const [loading, setLoading] = useState(false);
	const { resetPassword } = useFirebase();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError('');
		setSuccess('');
		setLoading(true);

		try {
			const result = await resetPassword(email);

			if (result.success) {
				setSuccess(
					'Instrukcja resetowania hasła została wysłana na podany adres email.'
				);
				setEmail('');
			} else {
				setError(
					result.error.message ||
						'Wystąpił błąd podczas wysyłania instrukcji. Spróbuj ponownie.'
				);
			}
		} catch (err) {
			setError('Wystąpił błąd podczas wysyłania instrukcji. Spróbuj ponownie.');
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
						<h1 className='auth-title'>Resetowanie hasła</h1>
						<p className='auth-description'>
							Wprowadź swój adres email, aby otrzymać instrukcję resetowania
							hasła
						</p>

						{error && <div className='error-message'>{error}</div>}
						{success && <div className='success-message'>{success}</div>}

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

							<button type='submit' className='auth-button' disabled={loading}>
								{loading ? 'Wysyłanie...' : 'Zresetuj hasło'}
							</button>

							<div className='auth-links'>
								<p className='register-link'>
									Przypomniałeś sobie hasło?
									<Link href='/login'>Zaloguj się</Link>
								</p>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ResetPassword;
