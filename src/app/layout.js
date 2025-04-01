// app/layout.js
import '@/styles/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ClientOnly from '@/components/ClientOnly';
import { FirebaseProvider } from '@/context/FirebaseContext';

export const metadata = {
	title: 'DropHub - Społeczność kryptowalut',
	description:
		'DropHub to miejsce, gdzie entuzjaści kryptowalut spotykają się, by dzielić się wiedzą, doświadczeniami i odkrywać nowe możliwości w świecie blockchain i kryptowalut.',
};

export default function RootLayout({ children }) {
	return (
		<html lang='pl'>
			<body suppressHydrationWarning={true}>
				<FirebaseProvider>
					<ClientOnly>
						<Header />
						{children}
						<Footer />
					</ClientOnly>
				</FirebaseProvider>
			</body>
		</html>
	);
}
