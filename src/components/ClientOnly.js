'use client';

import { useEffect, useState } from 'react';

/**
 * Komponent opakowujący, który renderuje zawartość tylko po stronie klienta,
 * co pomaga uniknąć problemów z hydratacją powodowanych przez rozszerzenia przeglądarki
 */
export default function ClientOnly({ children, ...delegated }) {
	const [hasMounted, setHasMounted] = useState(false);

	useEffect(() => {
		setHasMounted(true);
	}, []);

	if (!hasMounted) {
		return null;
	}

	return <div {...delegated}>{children}</div>;
}
