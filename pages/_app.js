import GlobalStyle from '../styles/GlobalStyle';
import '../styles/style.css';
import { light, dark } from '../styles/theme';
import { ThemeProvider } from 'styled-components';
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
function MyApp({ Component, pageProps }) {
	const [darkmode, setDarkmode] = useState(false);
	const handleDarkMode = () => {
		setDarkmode((prev) => !prev);
		localStorage.setItem('darkmode', darkmode);
	};

	return (
		<>
			<ThemeProvider theme={darkmode ? dark : light}>
				<GlobalStyle />
				<Navbar darkmode={darkmode} darkmodeHandler={handleDarkMode} />
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
}

export default MyApp;
