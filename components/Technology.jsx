import React, { useEffect } from 'react';
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
import { useQuery } from '@apollo/client';
import { GET_SKILLS } from '../lib/query';
import { motion } from 'framer-motion';

export default function Technology() {
	const { data, loading, error } = useQuery(GET_SKILLS);
	if (loading) return <div>Loading ...</div>;
	if (error) return <div>Error ...</div>;
	const dataArr = data.skills.data;
	return (
		<TechStyle className="section-3" id="skills">
			<div className="skills">
				<motion.div
					className="title"
					initial={{ opacity: 0, x: -70 }}
					whileInView={{ x: 0, opacity: 1 }}
					transition={{ duration: 1 }}
					viewport={{ once: true }}
				>
					<p>Skills & Experience</p>
					<div className="line"></div>
				</motion.div>
				<motion.div className="skills_container">
					{dataArr.map(({ id, attributes }) => (
						<SkillItem key={id} data={attributes} />
					))}
				</motion.div>
			</div>
			<div className="experience">
				<motion.div
					className="exp"
					initial={{ opacity: 0, x: 70 }}
					whileInView={{ x: 0, opacity: 1 }}
					transition={{ duration: 1 }}
					viewport={{ once: true }}
				>
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
				</motion.div>

				<motion.div
					className="exp"
					initial={{ opacity: 0, x: 70 }}
					whileInView={{ x: 0, opacity: 1 }}
					transition={{ duration: 1 }}
					viewport={{ once: true }}
				>
					<div className="year">
						<div>
							<TbNetwork />{' '}
						</div>
						<p>2020 - now</p>
					</div>
					<div className="exp_info">
						Learning <span>Web Development</span> through internet
					</div>
				</motion.div>
			</div>
		</TechStyle>
	);
}

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
					color: ${(props) => props.theme.thirdColor};
				}
			}
			.exp_info {
				line-height: 1.5;
			}
		}
	}
`;
