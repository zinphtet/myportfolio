import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import myimg from '../imgs/main.jpg';
import { motion } from 'framer-motion';
import profile from './profile.jpg';
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
					initial={{ opacity: 0, x: -70 }}
					whileInView={{ x: 0, opacity: 1 }}
					transition={{ duration: 1 }}
					viewport={{ once: true, amount: 0.5 }}
				>
					Hello , I am <span>Zin Paing Htet</span> . I am frontend developer
					specializing <span>React and NextJs</span> . I am learning Web
					Development for 2 years . During COVID-19 , I wanted to learn new
					skills . So I learned Web development. Now I am really love this. I
					love creating Web apps using ReactJs.
				</motion.p>
				<motion.p
					className="my_info"
					initial={{ opacity: 0, x: -70 }}
					whileInView={{ x: 0, opacity: 1 }}
					transition={{ duration: 1 }}
					viewport={{ once: true, amount: 0.5 }}
				>
					I am 4th year student at
					<span> Mandalay Technological University (MTU) </span>. Because of the
					coup happening in our country , I am not able to join my
					university.Although I am not CS student , I am interested in
					<span> Computer Science</span> and related technologies.
				</motion.p>
				<motion.p
					className="my_info"
					initial={{ opacity: 0, x: -70 }}
					whileInView={{ x: 0, opacity: 1 }}
					transition={{ duration: 1 }}
					viewport={{ once: true, amount: 0.5 }}
				>
					Now I am <span> looking for </span> new role as
					<span> junior developer , intern </span> or something . If you want to
					hire or help me , you can contact{' '}
					<span> my number or via email </span> .
				</motion.p>
			</div>
			<motion.div
				className="img"
				initial={{ opacity: 0, x: 70 }}
				whileInView={{ x: 0, opacity: 1 }}
				transition={{ duration: 1 }}
				viewport={{ once: true, amount: 0.5 }}
			>
				<motion.div
					className="img_container"
					style={{ position: 'relative' }}
					whileHover={{ scale: 1.05 }}
				>
					<Image
						src={profile.src}
						layout="responsive"
						width={6}
						height={5.5}
						alt="about me img"
					/>
				</motion.div>
			</motion.div>
		</AboutmeStyle>
	);
};

export default Aboutme;

const AboutmeStyle = styled.div`
	padding-block: 8rem;

	color: ${(props) => props.theme.text};
	display: flex;
	gap: 4rem;
	@media screen and (max-width: 56.25rem) {
		flex-direction: column;
	}
	& > * {
		flex: 1;
	}
	.about_info {
		.my_info {
			padding-block: 1rem;
			font-size: 1.75rem;
			line-height: 1.75;
			text-align: justify;
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
