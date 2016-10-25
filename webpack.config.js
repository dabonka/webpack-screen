'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');

module.exports = {
    entry: "./home",
    output: {
        filename: "build.js",
        library: "home"
      },

    watch: NODE_ENV == 'development',

    watchOptions: {
      aggregateTimeout: 100
  },

      devtool: NODE_ENV == 'development' ? "cheap-inline-module-source-map" : null,

      plugins: [
        new webpack.DefinePlugin({

          NODE_ENV: JSON.stringify(NODE_ENV),
          LANG: JSON.stringify('ru')
        })
      ],

module: {
  loaders: [
    {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel', // 'babel-loader' is also a valid name to reference
      query: {
        presets: ['es2015']
      }
    }
  ]
}

};