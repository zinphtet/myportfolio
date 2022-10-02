import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import myimg from '../imgs/main.jpg';
import { motion } from 'framer-motion';
const Aboutme = () => {
	return (
		<AboutmeStyle className="section-3" id="about">
			<div className="about_info">
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 2 }}
					viewport={{ once: true }}
					className="title"
				>
					<p>About Me</p>
					<div className="line"></div>
				</motion.div>
				<motion.p
					className="my_info"
					initial={{ opacity: 0, x: -50 }}
					whileInView={{ x: 0, opacity: 1 }}
					transition={{ duration: 1 }}
					viewport={{ once: true }}
				>
					Hello ! I am <span>Zin Paing Htet </span>, frontend developer.I enjoy
					creating web apps using <span>React</span> , <span>NextJs</span> and{' '}
					<span>Strapi</span>.I am not from Computer Science field.But I am
					willing to learn Computer Science and Programming, and I love it.I am
					studying web development for 2 years and still learning.I am currently
					live in Yangon,Myanmar.
				</motion.p>
				<motion.p
					className="my_info"
					initial={{ opacity: 0, x: -70 }}
					whileInView={{ x: 0, opacity: 1 }}
					transition={{ duration: 1 }}
					viewport={{ once: true }}
				>
					Hello ! I am <span>Zin Paing Htet</span> , frontend developer.I enjoy
					creating web apps using <span>React</span> , <span>NextJs</span> and{' '}
					<span>Strapi</span>.I am not from Computer Science field.But I am
					willing to learn Computer Science and Programming, and I love it.I am
					studying web development for 2 years and still learning.I am currently
					live in Yangon,Myanmar.
				</motion.p>
			</div>
			<motion.div
				className="img"
				initial={{ opacity: 0, x: 70 }}
				whileInView={{ x: 0, opacity: 1 }}
				transition={{ duration: 1 }}
				viewport={{ once: true, amount: 0.5 }}
			>
				<div className="img_container" style={{ position: 'relative' }}>
					<Image src={myimg.src} layout="fill" alt="about me img" />
				</div>
			</motion.div>
		</AboutmeStyle>
	);
};

export default Aboutme;

const AboutmeStyle = styled.div`
	padding-block: 8rem;
	/* border: 1px solid blue; */
	color: ${(props) => props.theme.text};
	display: flex;
	gap: 4rem;
	@media screen and (max-width: 56.25rem) {
		flex-direction: column;
	}
	& > * {
		flex: 1;
		/* border: 1px solid red; */
	}
	.about_info {
		.my_info {
			padding-block: 1rem;
			font-size: 1.75rem;
			line-height: 1.75;
		}
	}
	.img {
		display: flex;
		align-items: center;
		justify-content: center;
		.img_container {
			width: 25rem;
			height: 25rem;
			z-index: 1;
		}
	}
`;
