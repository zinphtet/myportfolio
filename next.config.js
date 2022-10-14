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
				destination: 'https://www.facebook.com/zinpaing.htet.902 ',
				permanent: false,
			},
			{
				source: '/linkedin',
				destination: 'https://www.linkedin.com/in/zin-paing-htet-49356a17b/',
				permanent: false,
			},
			{
				source: '/github',
				destination: 'https://github.com/zinphtet',
				permanent: false,
			},
		];
	},
};

module.exports = nextConfig;
