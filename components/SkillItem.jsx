import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import langImg from '../imgs/firebase.jpg';
const SkillItem = ({ src, perc, name }) => {
	return (
		<ItemStyle>
			<div className="img">
				<div className="img_container" style={{ position: 'relative' }}>
					<Image src={src || langImg.src} layout="fill" alt="lan img" />
					<div className="perc">{perc || '80'}%</div>
				</div>
			</div>
			<p className="language">{name || 'Firebase'}</p>
		</ItemStyle>
	);
};

export default SkillItem;

const ItemStyle = styled.div`
	width: 10rem;
	height: 10rem;
	/* border: 1px solid blue; */
	color: ${(props) => props.theme.text};
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2rem;
	.img {
		.img_container {
			width: 5rem;
			height: 5rem;
			border-radius: 50%;
			overflow: hidden;
			cursor: pointer;
			position: relative;
			.perc {
				position: absolute;
				/* display: none; */
				width: 100%;
				height: 100%;
				background-color: ${(props) => props.theme.hoverColor};
				left: -100%;
				top: 0;
				display: flex;
				align-items: center;
				justify-content: center;
				color: ${(props) => props.theme.text};
				font-size: 1.5rem;

				transition: all 0.2s linear;
			}
			&:hover {
				.perc {
					position: absolute;
					left: 0;
					transition: all 0.2s linear;
				}
			}
		}
	}
	.language {
		font-size: 1.75rem;
	}
`;
