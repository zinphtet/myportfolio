/** @type {import('next').NextConfig} */
const nextConfig = {
	swcMinify: true,
	compiler: {
		// see https://styled-components.com/docs/tooling#babel-plugin for more info on the options.
		styledComponents: true,
	},
	images: {
		domains: ['res.cloudinary.com'],
	},
	async redirects() {
		return [
			{
				source: '/facebook',
				destination: 'https://google.com',
				permanent: false,
			},
		];
	},
};

module.exports = nextConfig;
