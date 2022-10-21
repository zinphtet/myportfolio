import React, { useState } from 'react';
import styled from 'styled-components';
import ProjectItem from './ProjectItem';
import { useQuery } from '@apollo/client';
import { GET_PROJECTS } from '../lib/query';
import { motion } from 'framer-motion';
import Loading from './Loading';
const Projects = () => {
	const [showMore, setShowMore] = useState(false);
	const { data, loading, error } = useQuery(GET_PROJECTS);
	if (loading)
		return (
			<div className="loading">
				<Loading />
			</div>
		);
	if (error) return <div>Error ...</div>;

	const dataArr = data.projects.data;
	const showData = showMore ? dataArr : dataArr.slice(0, 6);
	return (
		<ProjectsStyle className="section-2" id="projects">
			<motion.div
				className="title"
				initial={{ opacity: 0, x: -70 }}
				whileInView={{ x: 0, opacity: 1 }}
				transition={{ duration: 1 }}
				viewport={{ once: true }}
			>
				<p>{"Some Projects I've build"} </p>
				<div className="line"></div>
			</motion.div>
			<motion.div className="projects_container">
				{showData.map(({ id, attributes }) => (
					<ProjectItem key={id} data={attributes} />
				))}
			</motion.div>
			<motion.div
				className="btn_div"
				initial={{ opacity: 0, y: 70 }}
				whileInView={{
					opacity: 1,
					y: 0,
				}}
				transition={{ duration: 1 }}
				viewport={{ once: true, amount: 0.5 }}
			>
				<button className="btn" onClick={() => setShowMore((prev) => !prev)}>
					{' '}
					{showMore ? 'Show Less' : 'Show More'}
				</button>
			</motion.div>
		</ProjectsStyle>
	);
};

export default Projects;

const ProjectsStyle = styled.div`
	padding-block: 8rem;

	.projects_container {
		padding-block: 4rem;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
		grid-gap: 3rem;
		@media screen and (max-width: 37.5rem) {
			padding-inline: 2rem;
		}
		@media screen and (max-width: 25rem) {
			padding-inline: 0rem;
		}
	}
	.btn_div {
		display: flex;
		align-items: center;
		justify-content: center;
		button {
			border: 0.2rem solid ${(props) => props.theme.thirdColor};
			padding: 1rem 2.5rem;
			border-radius: 0.3rem;
			font-size: 1.25rem;
			cursor: pointer;
			color: ${(props) => props.theme.text};
			background-color: ${(props) => props.theme.background};
			&:hover {
				background-color: ${(props) => props.theme.thirdColor};
				transition: all 0.2s linear;
			}
		}
	}
`;
