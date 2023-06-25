const { omitBy, isNil } = require("lodash");

/** @type {import('next').NextConfig} */
const { APP_NODE_ENV } = process.env;
const basePath = APP_NODE_ENV === "dev" ? "" : "/MyPortfolio";
const output = APP_NODE_ENV === "dev" ? null : "export";

const nextConfig = {
	reactStrictMode: true,
	basePath: basePath,

	// Set the asset prefix for GitHub Pages
	assetPrefix: ``,

	// For GitHub Pages, set the trailing slash
	trailingSlash: true,
	output: output,
};

module.exports = omitBy(nextConfig, isNil);
