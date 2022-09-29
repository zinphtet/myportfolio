import React from 'react';
import styled from 'styled-components';
import { AiOutlineGithub } from 'react-icons/ai';
import { FiExternalLink } from 'react-icons/fi';
import projimg from '../imgs/proj.png';
import Image from 'next/image';
import TechItem from './TechItem';
import { motion } from 'framer-motion';
const ProjectItem = () => {
	return (
		<ProjectItemStyle
			whileHover={{
				y: -6,
				transition: { duration: 0.2 },
			}}
		>
			<div className="img">
				<div className="img_container" style={{ position: 'relative' }}>
					<Image
						src={projimg.src}
						alt="proj img"
						layout="responsive"
						width={10}
						height={5}
					/>
				</div>
			</div>
			<div className="info">
				<p className="p_title">Capture </p>
				<p className="p_info">This is the portolio site for photographer</p>
				<div className="techs">
					<TechItem />
					<TechItem />
					<TechItem />
				</div>
			</div>
			<div className="icons">
				<AiOutlineGithub />
				<FiExternalLink />
			</div>
		</ProjectItemStyle>
	);
};

export default ProjectItem;

const ProjectItemStyle = styled(motion.div)`
	/* width: 45rem; */
	/* height: 35rem; */
	border-radius: 0.5rem;
	padding-bottom: 2rem;
	display: flex;
	flex-direction: column;
	/* border: 1px solid red; */
	background-color: ${(props) => props.theme.projBack};
	color: ${(props) => props.theme.projText};
	gap: 2rem;
	.info {
		padding-inline: 2rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		.p_title {
			font-size: 3rem;
			font-family: ${(props) => props.theme.titleFont};
		}
		.p_info {
			font-size: 1.5rem;
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
			/* border: 1px solid blue; */
			width: 100%;
			/* height: 20rem; */
		}
	}
	.icons {
		padding-inline: 2.5rem;
		display: flex;
		gap: 2rem;
		justify-content: flex-end;
		svg {
			font-size: 2.5rem;
			cursor: pointer;
		}
	}
`;
