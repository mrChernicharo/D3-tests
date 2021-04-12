const path = require("path");

module.exports = {
	mode: "development",
	// entry: "./src/main.js",
	entry: {
		labelCollision: "./src/label_collision/label_collision.js",
		basics: "./src/basics/basics.js",
	},
	// entry: "./src/label_collision/label_collision.js",
	resolve: {
		modules: ["node_modules"],
	},
	devServer: {
		contentBase: "./dist",
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].js",
	},
};
