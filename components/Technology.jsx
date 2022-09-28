import React from 'react';
import styled from 'styled-components';
import SkillItem from './SkillItem';
import hasura from '../imgs/hasura.jpg';
import js from '../imgs/js.png';
import next from '../imgs/next.png';
import react from '../imgs/react.png';
import strapi from '../imgs/strapi.png';
import sass from '../imgs/sass.jpg';
import css from '../imgs/css.jpg';
import html from '../imgs/html.jpg';
import redux from '../imgs/redux.png';
import { FaGraduationCap } from 'react-icons/fa';
import { TbNetwork } from 'react-icons/tb';
const Technology = () => {
	return (
		<TechStyle className="section-3">
			<div className="skills">
				<div className="title">
					<p>Skills & Experience</p>
					<div className="line"></div>
				</div>
				<div className="skills_container">
					<SkillItem src={html.src} perc={90} name="HTML" />
					<SkillItem src={css.src} perc={85} name="Css" />
					<SkillItem src={sass.src} perc={70} name="Sass" />
					<SkillItem src={js.src} perc={90} name="Javascript" />
					<SkillItem src={react.src} perc={85} name="React" />
					<SkillItem src={next.src} perc={70} name="NextJs" />
					<SkillItem src={strapi.src} perc={65} name="Strapi" />
					<SkillItem />
					<SkillItem src={redux.src} perc={70} name="Redux" />
					<SkillItem src={hasura.src} perc={60} name="Hasura" />
				</div>
			</div>
			<div className="experience">
				<div className="exp">
					<div className="year">
						<div>
							<FaGraduationCap />{' '}
						</div>
						<p>2016 - 2020</p>
					</div>
					<div className="exp_info">
						Studied <span>Electronics Engineering</span> at Mandalay
						Technological University (MTU)
					</div>
				</div>
				<div className="exp">
					<div className="year">
						<div>
							<TbNetwork />{' '}
						</div>
						<p>2020 - now</p>
					</div>
					<div className="exp_info">
						Learning <span>Web Development</span> through internet
					</div>
				</div>
			</div>
		</TechStyle>
	);
};

export default Technology;

const TechStyle = styled.div`
	/* border: 1px solid red; */
	padding-block: 8rem;
	/* display: flex; */
	display: flex;
	gap: 4rem;
	& > * {
		/* border: 1px solid gold; */
		flex: 1;
	}
	@media screen and (max-width: 56.25rem) {
		flex-direction: column;
	}
	/* gap: 4rem; */
	.skills {
		/* border: 1px solid blueviolet; */
		.skills_container {
			/* border: 1px solid gold; */
			padding-block: 4rem;
			display: flex;
			flex-wrap: wrap;
			gap: 2rem;
			@media screen and (max-width: 56.25rem) {
				gap: 1rem;
			}
		}
	}
	.experience {
		padding-top: 10rem;
		/* border: 1px solid gold; */
		@media screen and (max-width: 56.25rem) {
			padding-top: 0rem;
		}
		font-size: 1.75rem;
		color: ${(props) => props.theme.text};
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 2rem;
		@media screen and (max-width: 56.25rem) {
			padding-inline: 2rem;
		}

		.exp {
			display: flex;
			flex-direction: column;
			gap: 1rem;
			.year {
				svg {
					font-size: 3rem;
				}
			}
			.exp_info {
				line-height: 1.5;
			}
		}
	}
`;
