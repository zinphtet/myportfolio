import React from 'react';
import styled from 'styled-components';

const Footer = () => {
	return (
		<FooterStyle>
			<p>Designed and build by Zin Paing Htet</p>
		</FooterStyle>
	);
};

export default Footer;

const FooterStyle = styled.div`
	padding-block: 4rem;
	color: ${(props) => props.theme.text};
	p {
		font-size: 1.25rem;
		text-align: center;
		font-family: ${(props) => props.theme.titleFont};
	}
`;
