import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import myimg from '../imgs/react.png';
const TechItem = ({ data }) => {
	const {
		formats: {
			thumbnail: { url },
		},
	} = data;
	return (
		<TechStyle>
			<div className="img_container" style={{ position: 'relative' }}>
				<Image src={url} alt="tech img" layout="fill" />
			</div>
		</TechStyle>
	);
};

export default TechItem;

const TechStyle = styled.div`
	width: 3rem;
	height: 3rem;
	.img_container {
		position: relative;
		width: 100%;
		height: 100%;
		overflow: hidden;
		border-radius: 50%;
	}
`;
