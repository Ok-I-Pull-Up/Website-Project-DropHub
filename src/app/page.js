import Hero from '@/components/Hero';

import Features from '@/components/Features';
import Blog from '@/components/Blog';
import Newsletter from '@/components/Newsletter';

export default function HomePage() {
	return (
		<main>
			<Hero />
			<Features />
			<Blog />
			<Newsletter />
		</main>
	);
}
