import Head from 'next/head';

import HomeBanner from '../components/Home';
import Aboutme from '../components/Aboutme';
import Technology from '../components/Technology';
export default function Home() {
	return (
		<>
			<Head>
				<title>zinpainghtet.developer</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<HomeBanner />
			<Aboutme />
			<Technology />
		</>
	);
}
