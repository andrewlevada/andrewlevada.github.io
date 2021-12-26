const paths = require('./webpack.paths');
const common = require('./webpack.common');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { DuplicatesPlugin } = require("inspectpack/plugin");
const { mergeWithRules } = require('webpack-merge')
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");

const config = mergeWithRules({
	module: {
		rules: {
			test: "match",
			use: {
				loader: "match",
				options: "replace",
			},
		},
	},
})(common, {
	mode: 'production',

	module: {
		rules: [{
			test: /\.(ts|tsx)$/,
			use: [{ loader: 'minify-html-literals-loader' }]
		}, {
			test: /.(scss|css)$/,
			use: [{
				loader: 'lit-css-loader',
				options: { uglify: true }
			}]
		}]
	},

	plugins: [
		// new FileManagerPlugin({
		// 	events: {
		// 		onEnd: {
		// 			archive: [
		// 				{ source: `${paths.dist}/`, destination: `${paths.dist}/build.zip` }
		// 			]
		// 		}
		// 	}
		// }),
		new DuplicatesPlugin(),
		new FaviconsWebpackPlugin({
			logo: `${paths.src}/assets/favicon.png`,
			favicons: {
				appName: "Andrew Levada",
				appDescription: null,
				lang: "ru",
				theme_color: "#33AD6A",
				background: "#FCF6F5"
			}
		})
	],

	optimization: {
		minimize: true,

		minimizer: [
			new TerserPlugin({
				terserOptions: {
					format: {
						comments: false
					}
				},
				extractComments: false
			}),
			new CssMinimizerPlugin()
		],

		runtimeChunk: 'single',
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendors',
					chunks: 'all'
				}
			}
		}
	}
})

module.exports = config;
