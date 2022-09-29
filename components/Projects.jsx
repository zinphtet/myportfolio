import React from 'react';
import styled from 'styled-components';
import ProjectItem from './ProjectItem';
const Projects = () => {
	return (
		<ProjectsStyle className="section-2">
			<div className="title">
				<p>Some Projects I've build </p>
				<div className="line"></div>
			</div>
			<div className="projects_container">
				<ProjectItem />
				<ProjectItem />
				<ProjectItem />
				<ProjectItem />
				<ProjectItem />
				<ProjectItem />
			</div>
			<div className="btn_div">
				<button className="btn">Show More</button>
			</div>
		</ProjectsStyle>
	);
};

export default Projects;

const ProjectsStyle = styled.div`
	padding-block: 8rem;

	.projects_container {
		padding-block: 4rem;
		/* justify-content: center;
		display: flex;
		gap: 4rem;
		flex-wrap: wrap; */
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
		grid-gap: 2.5rem;
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
