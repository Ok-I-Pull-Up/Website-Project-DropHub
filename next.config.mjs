/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
	images: {
		unoptimized: true,
	},
	reactStrictMode: true,
	onDemandEntries: {
		// Okres, w którym strona pozostaje w pamięci
		maxInactiveAge: 25 * 1000,
		// Liczba stron przechowywanych w pamięci
		pagesBufferLength: 2,
	},
	// Ignorowanie błędów hydratacji powodowanych przez rozszerzenia przeglądarki
	eslint: {
		ignoreDuringBuilds: true,
	},
};

export default nextConfig;
