import React from 'react';
import styled from 'styled-components';
import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai';
const Contact = () => {
	return (
		<ContactStyle className="section-3" id="contact">
			<p className="contact_title">Get In Touch</p>
			<div className="contact">
				<div className="phone">
					<AiOutlinePhone /> <a href="tel:09774083439"> 09774083439 </a>
				</div>
				<div className="email">
					<AiOutlineMail /> <p>zinpainghtet.215108@gmail.com</p>
				</div>
			</div>
			<p className="opport">
				I am looking for <span>new opportunities</span> . My inbox is always
				open .Whether you want to ask question or just want to say hi , I'll try
				my best to get back to you!
			</p>
			<div>
				<a href="mailto:zinpainghtet.215108@gmail.com">
					<button>Say Hello</button>
				</a>
			</div>
		</ContactStyle>
	);
};

export default Contact;

const ContactStyle = styled.div`
	color: ${(props) => props.theme.text};
	padding-block: 8rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2rem;
	.contact_title {
		font-size: 4rem;
		font-family: ${(props) => props.theme.titleFont};
		text-align: center;
		font-weight: 500;
		padding-bottom: 2rem;
	}
	.contact {
		font-size: 1.75rem;
		display: flex;
		gap: 4rem;
		align-items: center;
		@media screen and (max-width: 37.5rem) {
			flex-direction: column;
			gap: 1rem;
		}
		.phone,
		.email {
			display: flex;
			align-items: center;
			gap: 1rem;
			a {
				text-decoration: none;
				color: ${(props) => props.theme.text};
			}
			svg {
				font-size: 2.5rem;
			}
		}
	}
	.opport {
		font-size: 1.75rem;
		text-align: center;
		line-height: 1.5;
	}
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
`;
