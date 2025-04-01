'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useFirebase } from '@/context/FirebaseContext';

/**
 * Komponent zabezpieczający strony dostępne tylko dla zalogowanych użytkowników
 * W Client Components użyj tego komponentu jako wrappera
 */
const PrivateRoute = ({ children }) => {
	const router = useRouter();
	const { user, loading } = useFirebase();

	useEffect(() => {
		// Jeśli nie ładujemy i nie ma użytkownika, przekieruj do logowania
		if (!loading && !user) {
			router.push('/login');
		}
	}, [user, loading, router]);

	// Pokaż komponent ładowania, gdy sprawdzamy autentykację
	if (loading) {
		return <div className='loading-spinner'>Weryfikacja dostępu...</div>;
	}

	// Jeśli użytkownik jest zalogowany, renderuj dzieci
	// Jeśli nie jest, renderuj placeholder (przekierowanie jest obsługiwane przez useEffect)
	return user ? (
		children
	) : (
		<div className='loading-spinner'>Przekierowywanie do logowania...</div>
	);
};

export default PrivateRoute;
