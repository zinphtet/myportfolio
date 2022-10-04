import React from 'react';
import styled from 'styled-components';
import {
	AiFillFacebook,
	AiFillLinkedin,
	AiFillInstagram,
} from 'react-icons/ai';
import { motion } from 'framer-motion';
import { homeParent, toUp } from '../lib/animate';
import Link from 'next/link';

const HomeBanner = () => {
	return (
		<HomeStyle
			className="section-2"
			variants={homeParent}
			initial="initial"
			animate="animate"
			id="home"
		>
			<div className="home_info">
				<motion.p className="hi" variants={toUp}>
					Hi , My name is
				</motion.p>
				<motion.p className="name" variants={toUp}>
					Zin Paing Htet.
				</motion.p>
				<motion.p className="build" variants={toUp}>
					I build <span>apps</span> for the <span>web</span>{' '}
				</motion.p>
				<motion.p className="info" variants={toUp}>
					I am frontend developer specializing <span>React</span> and{' '}
					<span>Nextjs</span> .
				</motion.p>
			</div>
			<motion.a href="" className="downloadcv btn" variants={toUp}>
				Resume
			</motion.a>
			<motion.div className="home_icons" variants={toUp}>
				<a rel="noreferrer noopener" href={'https://www.google.com'}>
					<AiFillFacebook />
				</a>
				{/* <Link href="https://www.linkedin.com/in/zin-paing-htet-49356a17b/"> */}
				<a
					rel="noreferrer noopener"
					href="https://www.linkedin.com/in/zin-paing-htet-49356a17b/"
				>
					<AiFillLinkedin />
				</a>
				{/* </Link> */}
				{/* <Link href="https://www.instagram.com"> */}
				<a rel="noreferrer noopener" href="https://www.instagram.com">
					<AiFillInstagram />
				</a>
				{/* </Link> */}
			</motion.div>
		</HomeStyle>
	);
};

export default HomeBanner;

const HomeStyle = styled(motion.div)`
	padding-block: 6rem 10rem;
	color: ${(props) => props.theme.text};
	@media screen and (max-width: 37.5rem) {
		padding-block: 4rem 8rem;
	}
	& > * {
		margin-bottom: 6rem;
		@media screen and (max-width: 37.5rem) {
			margin-bottom: 4rem;
		}
	}

	.home_info {
		display: flex;
		flex-direction: column;
		gap: 2.5rem;
		font-size: 1.75rem;
		.hi {
			color: ${(props) => props.theme.thirdColor};
		}
		.name {
			font-size: 8rem;
			font-weight: 500;
			background-image: linear-gradient(
				to right,
				${(props) => props.theme.text},
				${(props) => props.theme.thirdColor}
			);
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
			@media screen and (max-width: 56.25rem) {
				font-size: 7rem;
			}
			@media screen and (max-width: 37.5rem) {
				font-size: 5rem;
			}
		}
		.build {
			font-size: 6rem;
			span {
				color: ${(props) => props.theme.thirdColor};
			}
			@media screen and (max-width: 37.5rem) {
				font-size: 4rem;
			}
		}
		.info {
			line-height: 1.5;
		}
	}
	.downloadcv {
		border: 0.2rem solid ${(props) => props.theme.thirdColor};
		padding: 1rem 2.5rem;
		border-radius: 0.3rem;
		font-size: 1.25rem;
		cursor: pointer;
		color: ${(props) => props.theme.text};
	}
	.home_icons {
		margin-top: 6rem;
		display: flex;
		align-items: center;
		gap: 2rem;
		svg {
			font-size: 4rem;
			cursor: pointer;
			color: ${(props) => props.theme.thirdColor};
			transition: all 0.5s linear;
			&:hover {
				transform: scale(0.9);
				transition: all 0.2s linear;
			}
		}
	}
`;
