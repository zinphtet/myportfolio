import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { motion } from 'framer-motion';

const SkillItem = ({ data }) => {
	const { name, percentage, image } = data;
	return (
		<ItemStyle
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 3 }}
			viewport={{ once: true }}
		>
			<div className="img">
				<div className="img_container" style={{ position: 'relative' }}>
					<Image
						src={image?.data?.attributes?.formats?.thumbnail?.url}
						layout="fill"
						alt="lan img"
					/>
					<div className="perc">{percentage}%</div>
				</div>
			</div>
			<p className="language">{name}</p>
		</ItemStyle>
	);
};

export default SkillItem;

const ItemStyle = styled(motion.div)`
	width: 10rem;
	height: 10rem;
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
