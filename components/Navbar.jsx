import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { MdDarkMode } from 'react-icons/md';
import { BsFillSunFill } from 'react-icons/bs';
import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import Image from 'next/image';
import boyimg from '../imgs/boy.png';
import { motion } from 'framer-motion';
import { fadeInParent, fadeIn } from '../lib/animate';
const Navbar = ({ darkmode, darkmodeHandler }) => {
	const [show, setShow] = useState(false);
	useEffect(() => {
		if (show) {
			document.body.classList.add('hide');
		} else {
			document.body.classList.remove('hide');
		}
		return () => {};
	}, [show]);
	const overflowHandle = () => {
		document.body.classList.remove('hide');
		setShow(false);
	};
	return (
		<NavbarStyle
			className="section"
			variants={fadeInParent}
			initial="initial"
			animate="animate"
			transition={{ delay: 5 }}
			id="navbar"
		>
			<div className="logo">
				<div className="img_container">
					<Image src={boyimg.src} layout="fill" alt="profile" />
				</div>
			</div>
			<div className="menu" onClick={() => setShow(true)}>
				<BiMenuAltRight />
			</div>
			<div className={`nav ${show ? 'show' : ''}`}>
				<ul>
					<motion.li
						className="close"
						onClick={() => setShow(false)}
						variants={fadeIn}
					>
						{' '}
						<AiOutlineClose />{' '}
					</motion.li>
					<motion.li variants={fadeIn}>
						{' '}
						<a href="#about" onClick={overflowHandle}>
							.about()
						</a>{' '}
					</motion.li>
					<motion.li variants={fadeIn}>
						{' '}
						<a href="#skills" onClick={overflowHandle}>
							.skills()
						</a>{' '}
					</motion.li>
					<motion.li variants={fadeIn}>
						{' '}
						<a href="#projects" onClick={overflowHandle}>
							.projects()
						</a>{' '}
					</motion.li>
					<motion.li variants={fadeIn}>
						{' '}
						<a href="#contact" onClick={overflowHandle}>
							.contact()
						</a>{' '}
					</motion.li>
					<motion.li onClick={darkmodeHandler} variants={fadeIn}>
						{darkmode ? (
							<MdDarkMode onClick={overflowHandle} />
						) : (
							<BsFillSunFill onClick={overflowHandle} />
						)}
					</motion.li>
				</ul>
			</div>
		</NavbarStyle>
	);
};

export default Navbar;

const NavbarStyle = styled(motion.div)`
	display: flex;
	align-items: center;
	padding-block: 2.5rem;
	font-family: ${({ theme: { titleFont } }) => titleFont};

	overflow-x: hidden;
	color: ${(props) => props.theme.text};

	@media screen and (max-width: 37.5rem) {
		box-shadow: 0.2rem 0.2rem 0.2rem gray;
	}

	.logo {
		flex: 1;
		position: relative;

		.img_container {
			position: relative;
			width: 5rem;
			height: 5rem;

			border-radius: 50%;
			overflow: hidden;
		}
		p {
			font-size: 3rem;

			@media screen and (max-width: 56.25rem) {
				color: red;
			}
			@media screen and (max-width: 37.5rem) {
				color: green;
			}
		}
	}
	.menu {
		display: none;
		@media screen and (max-width: 37.5rem) {
			display: block;
			svg {
				font-size: 5rem;
				cursor: pointer;
			}
		}
	}
	.nav {
		@media screen and (max-width: 37.5rem) {
			position: absolute;
			top: 0;
			right: -110%;
			transform: scale(0);

			backdrop-filter: blur(0.2rem);
			display: block;

			width: 100%;
			height: 100vh;
			transition: all 0.35s linear;

			z-index: 100;
		}
		ul {
			display: flex;
			align-items: center;
			gap: 2rem;
			@media screen and (max-width: 37.5rem) {
				padding-block: 8rem;
				display: flex;
				flex-direction: column;
				gap: 4rem;
				background-color: ${(props) => props.theme.text};
				color: ${(props) => props.theme.background};
				position: absolute;
				top: 0;
				right: 0;
				width: 60%;
				height: 100vh;
			}

			li {
				font-size: 2rem;
				cursor: pointer;
				display: flex;
				align-items: center;
				justify-content: center;
				svg {
					font-size: 3rem;
					&:hover {
						color: ${(props) => props.theme.thirdColor};
					}
				}

				a {
					color: ${(props) => props.theme.text};
					&:hover {
						color: ${(props) => props.theme.thirdColor};
					}
					@media screen and (max-width: 37.5rem) {
						color: ${(props) => props.theme.background};
					}
				}
			}
			.close {
				display: none;
				@media screen and (max-width: 37.5rem) {
					display: block;
					position: absolute;
					top: 3rem;
					right: 2.5rem;
					svg {
						font-size: 4rem;
					}
				}
			}
		}
	}
	.show {
		right: 0;

		transform: scale(1);
		transition: all 0.35 linear;
	}
`;
