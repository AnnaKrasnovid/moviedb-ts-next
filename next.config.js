// /** @type {import('next').NextConfig} */
// const nextConfig = {
// 	webpack: (config) => {
// 		config.module.rules.push({
// 		test: /\.svg$/,
// 		use: ["@svgr/webpack"]
// 	});

// 	return config;
// 	},
// 	images: {

// 		unoptimized: true
// 	},
// 	reactStrictMode: true,
// 	swcMinify: false,
// 	compiler: {
// 		reactRemoveProperties: true,
// 	}
// }

// module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
}

module.exports = nextConfig