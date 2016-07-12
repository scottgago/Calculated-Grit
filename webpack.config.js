var webpack = require('webpack');

module.exports = {
	context: __dirname + '/dev',
	entry: {
		app: './app.module.js',
	},
	output: {
		path: __dirname + '/public',
		filename: 'app.bundle.js'
	}
};