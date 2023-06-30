/** @type {import('next').NextConfig} */
const { omitBy, isNil } = require("lodash");

const { APP_NODE_ENV } = process.env;
const output = APP_NODE_ENV === "dev" ? null : "export";

const nextConfig = {
	reactStrictMode: true,
	basePath: "",

	// Set the asset prefix for GitHub Pages
	assetPrefix: ``,

	// For GitHub Pages, set the trailing slash
	trailingSlash: true,
	output: output,
};

module.exports = omitBy(nextConfig, isNil);
