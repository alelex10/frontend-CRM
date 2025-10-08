import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	test: {
		setupFiles: "./src/test/stup-tests.ts",
	},
};

export default nextConfig;

