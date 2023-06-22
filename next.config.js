/** @type {import('next').NextConfig} */
const nextConfig = {
	typescript: {
		ignoreBuildErrors: true,
	},
	reactStrictMode: true,

	// Add basePath
	basePath: "/github-pages",
};

module.exports = nextConfig;
