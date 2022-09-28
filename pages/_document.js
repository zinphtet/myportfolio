import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html>
			<Head>
				<link
					href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500&family=Space+Grotesk:wght@300;400;500&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}

// font-family: 'Poppins', sans-serif;
// font-family: 'Space Grotesk', sans-serif;
