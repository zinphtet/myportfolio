import React from 'react';
import styled from 'styled-components';

const HomeBanner = () => {
	return (
		<HomeStyle className="section-2">
			<div className="home_info">
				<p className="hi">Hi , My name is</p>
				<p className="name">Zin Paing Htet .</p>
				<p className="build">
					I build <span>apps</span> for the <span>web</span>{' '}
				</p>
				<p className="info">
					I am frontend developer specializing <span>React</span> and{' '}
					<span>Nextjs</span> .
				</p>
			</div>
			<a href="" className="downloadcv btn">
				Resume
			</a>
		</HomeStyle>
	);
};

export default HomeBanner;

const HomeStyle = styled.div`
	/* border: 1px solid blue; */
	padding-block: 6rem 12rem;
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
`;
