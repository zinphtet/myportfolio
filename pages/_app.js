import GlobalStyle from '../styles/GlobalStyle';
import '../styles/style.css';
import { light, dark } from '../styles/theme';
import { ThemeProvider } from 'styled-components';
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
	uri: process.env.NEXT_PUBLIC_GRAPHQL,
	cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }) {
	const [darkmode, setDarkmode] = useState(false);
	const handleDarkMode = () => {
		setDarkmode((prev) => !prev);
	};

	return (
		<>
			<ApolloProvider client={client}>
				<ThemeProvider theme={darkmode ? dark : light}>
					<GlobalStyle />
					<Navbar darkmode={darkmode} darkmodeHandler={handleDarkMode} />
					<Component {...pageProps} />
				</ThemeProvider>
			</ApolloProvider>
		</>
	);
}

export default MyApp;
