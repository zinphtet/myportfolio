import { gql } from '@apollo/client';

export const GET_SKILLS = gql`
	query GET_SKILLS {
		skills {
			data {
				id
				attributes {
					name
					percentage
					image {
						data {
							attributes {
								formats
							}
						}
					}
				}
			}
		}
	}
`;

export const GET_PROJECTS = gql`
	query GET_PROJECTS {
		projects {
			data {
				id
				attributes {
					title
					desc
					github_link
					demo_link
					image {
						data {
							attributes {
								formats
							}
						}
					}
					techs {
						data {
							attributes {
								formats
							}
						}
					}
				}
			}
		}
	}
`;
