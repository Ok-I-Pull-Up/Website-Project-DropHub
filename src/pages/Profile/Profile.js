'use client';

import { useState, useEffect } from 'react';
import { useFirebase } from '@/context/FirebaseContext';
import Link from 'next/link';
import {
	FaUser,
	FaEnvelope,
	FaCalendarAlt,
	FaPen,
	FaSignOutAlt,
} from 'react-icons/fa';

const Profile = () => {
	const { user, getProfile, updateProfile, signOut } = useFirebase();
	const [profile, setProfile] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [editMode, setEditMode] = useState(false);
	const [formData, setFormData] = useState({
		displayName: '',
		bio: '',
		website: '',
	});

	useEffect(() => {
		const fetchProfile = async () => {
			if (user) {
				try {
					const result = await getProfile(user.uid);
					if (result.data) {
						setProfile(result.data);
						setFormData({
							displayName: result.data.displayName || user.displayName || '',
							bio: result.data.bio || '',
							website: result.data.website || '',
						});
					} else {
						setError('Nie można pobrać danych profilu.');
					}
				} catch (err) {
					setError('Wystąpił błąd podczas ładowania profilu.');
				} finally {
					setLoading(false);
				}
			}
		};

		fetchProfile();
	}, [user, getProfile]);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);

		try {
			const result = await updateProfile(user.uid, formData);
			if (result.success) {
				setProfile((prev) => ({
					...prev,
					...formData,
				}));
				setEditMode(false);
			} else {
				setError('Nie udało się zaktualizować profilu.');
			}
		} catch (err) {
			setError('Wystąpił błąd podczas aktualizacji profilu.');
		} finally {
			setLoading(false);
		}
	};

	const handleLogout = async () => {
		try {
			await signOut();
			// Przekierowanie nastąpi automatycznie przez PrivateRoute
		} catch (error) {
			setError('Wystąpił błąd podczas wylogowywania.');
		}
	};

	if (loading) {
		return <div className='loading-spinner'>Ładowanie profilu...</div>;
	}

	return (
		<div className='profile-page'>
			<div className='container'>
				<div className='profile-header'>
					<h1>Twój profil</h1>
					<button onClick={handleLogout} className='logout-btn'>
						<FaSignOutAlt /> Wyloguj
					</button>
				</div>

				{error && <div className='error-message'>{error}</div>}

				<div className='profile-container'>
					<div className='profile-sidebar'>
						<div className='profile-avatar'>
							{user?.photoURL ? (
								<img src={user.photoURL} alt='Avatar' />
							) : (
								<div className='avatar-placeholder'>
									{formData.displayName
										? formData.displayName.charAt(0).toUpperCase()
										: 'U'}
								</div>
							)}
						</div>
						<div className='profile-info'>
							<h2>{formData.displayName || 'Użytkownik'}</h2>
							<p className='profile-email'>
								<FaEnvelope /> {user?.email}
							</p>
							<p className='profile-joined'>
								<FaCalendarAlt /> Dołączono:{' '}
								{profile?.createdAt
									? new Date(
											profile.createdAt.seconds * 1000
									  ).toLocaleDateString()
									: 'Niedawno'}
							</p>
							<button
								onClick={() => setEditMode(!editMode)}
								className='edit-profile-btn'>
								<FaPen /> {editMode ? 'Anuluj edycję' : 'Edytuj profil'}
							</button>
						</div>
					</div>

					<div className='profile-content'>
						{editMode ? (
							<form onSubmit={handleSubmit} className='profile-form'>
								<h3>Edytuj swój profil</h3>

								<div className='form-group'>
									<label htmlFor='displayName'>Imię i nazwisko</label>
									<input
										type='text'
										id='displayName'
										name='displayName'
										value={formData.displayName}
										onChange={handleInputChange}
										placeholder='Twoje imię i nazwisko'
									/>
								</div>

								<div className='form-group'>
									<label htmlFor='bio'>O mnie</label>
									<textarea
										id='bio'
										name='bio'
										value={formData.bio}
										onChange={handleInputChange}
										placeholder='Napisz kilka słów o sobie'
										rows={4}
									/>
								</div>

								<div className='form-group'>
									<label htmlFor='website'>Strona internetowa</label>
									<input
										type='url'
										id='website'
										name='website'
										value={formData.website}
										onChange={handleInputChange}
										placeholder='https://twoja-strona.pl'
									/>
								</div>

								<button
									type='submit'
									className='auth-button'
									disabled={loading}>
									{loading ? 'Zapisywanie...' : 'Zapisz zmiany'}
								</button>
							</form>
						) : (
							<div className='profile-details'>
								<div className='profile-section'>
									<h3>O mnie</h3>
									<p>{profile?.bio || 'Brak informacji'}</p>
								</div>

								{profile?.website && (
									<div className='profile-section'>
										<h3>Strona internetowa</h3>
										<a
											href={profile.website}
											target='_blank'
											rel='noopener noreferrer'>
											{profile.website}
										</a>
									</div>
								)}

								<div className='profile-section'>
									<h3>Aktywność</h3>
									<p>Twoja aktywność na DropHub będzie wyświetlana tutaj.</p>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;
