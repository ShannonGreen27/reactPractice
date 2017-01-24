const debug = process.env.NODE_ENV != 'production'

module.exports = {
	entry: "./app/app.js",
	output: {
		filename: "public/bundle.js"
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ["react", "es2015", "stage-0"],
					plugins: ["react-html-attrs", "transform-class-properties", "transform-decorators-legacy"],
				}
			}
		]
  },
  // This lets us debug our react code in chrome dev tools. Errors will have lines and file names
  // Without this the console says all errors are coming from just coming from bundle.js
  devtool: debug ? "inline-sourcemap" : null,
  plugins: debug ? []: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({mangle: false, sourcemap: false})]
};