'use client';

import { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { useFirebase } from '@/context/FirebaseContext';

// Dynamiczny import zabezpieczenia
const PrivateRoute = dynamic(() => import('../../components/PrivateRoute'), {
	ssr: false,
});
const Profile = dynamic(() => import('../../pages/Profile/Profile'), {
	ssr: false,
});

export default function ClientProfile() {
	const router = useRouter();
	const { user, loading } = useFirebase();

	useEffect(() => {
		if (!loading && !user) {
			router.push('/login');
		}
	}, [user, loading, router]);

	// Jeśli ładowanie, pokazujemy komuniakt ładowania
	if (loading) {
		return <div className='loading-spinner'>Ładowanie profilu...</div>;
	}

	// Jeśli użytkownik nie jest zalogowany, nie renderujemy nic
	// (przekierowanie zostanie obsłużone przez useEffect)
	if (!user) {
		return <div className='loading-spinner'>Przekierowywanie...</div>;
	}

	return (
		<PrivateRoute>
			<Profile />
		</PrivateRoute>
	);
}
