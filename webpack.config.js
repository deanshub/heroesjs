module.exports = {
  entry: './src/scripts/game.js',
  output: {
  	path: 'build',
    filename: '[name].js'
  },
  module:{
  	loaders:[
  		// { test: /\.js$/, loader: 'jsx-loader?harmony' },
      { test: /\.js$/, exclude:'/node_modules/*', loader: 'webpack-traceur?sourceMaps&experimental' },
  		{ test: /\.css$/, loader: 'style-loader!css-loader' },
      {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
  	]
  },
  resolve: {
    // you can now require('file') instead of require('file.coffee')
    extensions: ['', '.js', '.json'] 
  }
};