import React from 'react';
import styled from 'styled-components';
import { AiOutlineGithub } from 'react-icons/ai';
import { FiExternalLink } from 'react-icons/fi';
import projimg from '../imgs/proj.png';
import Image from 'next/image';
import TechItem from './TechItem';
import { motion } from 'framer-motion';
import {  projItem } from '../lib/animate';
const ProjectItem = ({ data }) => {
	const { title, desc, demo_link, github_link, image, techs } = data;
	const main_img = image?.data?.attributes?.formats.small?.url;
	return (
		<ProjectItemStyle
			whileHover={{
				y: -6,
				transition: { duration: 0.2 },
			}}
			variants={projItem}
			initial="initial"
			whileInView="animate"
			viewport={{ once: true, amount: 0.5 }}
		>
			<div className="img">
				<div className="img_container" style={{ position: 'relative' }}>
					<Image
						src={main_img || projimg.src}
						alt="proj img"
						layout="responsive"
						width={10}
						height={5}
					/>
				</div>
			</div>
			<div className="info">
				<p className="p_title">{title || 'My App '} </p>
				<p className="p_info">{desc || 'The best app for developer'}</p>
				<div className="techs">
					{techs?.data?.map(({ attributes }, idx) => (
						<TechItem key={idx} data={attributes} />
					))}
				</div>
			</div>
			<div className="icons">
				<a href={github_link || 'nothiong'} target="_blank">
					<AiOutlineGithub />
				</a>
				<a href={demo_link || 'noting'} target="_blank">
					<FiExternalLink />
				</a>
			</div>
		</ProjectItemStyle>
	);
};

export default ProjectItem;

const ProjectItemStyle = styled(motion.div)`
	align-self: stretch;
	cursor: pointer;
	border-radius: 0.5rem;
	padding-bottom: 4rem;

	background-color: ${(props) => props.theme.projBack};
	color: ${(props) => props.theme.projText};

	display: grid;
	grid-gap: 1rem;

	.info {
		padding-inline: 2rem;
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		.p_title {
			font-size: 2.5rem;
			font-family: ${(props) => props.theme.titleFont};
		}
		.p_info {
			font-size: 1.25rem;
			line-height: 1.5;
		}
		.techs {
			display: flex;
			gap: 1rem;
		}
	}
	.img {
		width: 100%;
		.img_container {

			width: 100%;	
		}
	}
	.icons {
		padding-inline: 2.5rem;
		display: flex;
		gap: 2rem;
		justify-content: flex-end;
		svg {
			font-size: 2.5rem;
			color: ${(props) => props.theme.projText};
			cursor: pointer;
		}
	}
`;
