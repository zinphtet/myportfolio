import React from 'react';
import styled from 'styled-components';
import { AiOutlineArrowUp } from 'react-icons/ai';
const Arrow = () => {
	return (
		<a
			href="#navbar
            "
		>
			<ArrStyle>
				<AiOutlineArrowUp />
			</ArrStyle>
		</a>
	);
};

export default Arrow;

const ArrStyle = styled.div`
	position: fixed;
	display: flex;
	right: 2rem;
	bottom: 4rem;
	padding: 2rem 1rem;
	background-color: ${(props) => props.theme.thirdColor};

	svg {
		margin: auto;
		color: ${(props) => props.theme.text};
		font-size: 3rem;
		cursor: pointer;
	}
`;
