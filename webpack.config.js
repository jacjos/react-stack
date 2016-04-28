var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry : {
    main : [
      './src/main.js'
    ]
  },
  output : {
    filename : './public/[name].js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?$/,
        include :path.join(__dirname, 'src'),
        loader : 'babel',
        query: {
                presets: ['es2015', 'stage-2', 'react']
            }
      },
      {
        test : /\.scss$/,
        include :path.join(__dirname, 'src'),
        loader : 'style!css!scss'
      }
    ]
  }
};
