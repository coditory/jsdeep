const path = require('path');
const libraryName = require('./package').name.split('/').pop();

const outputFile = opts =>
  opts.production
    ? `${libraryName}.min.js`
    : `${libraryName}.js`;

const webpackConfig = opts => ({
  entry: './lib',
  devtool: !opts.production && 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env']
        }
      }
    ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: outputFile(opts),
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  }
});

const createConfig = (opts) => {
  const mode = opts.mode || 'production';
  // eslint-disable-next-line
  console.error(`Starting webpack in mode: ${mode}`);
  return webpackConfig({
    production: mode === 'production'
  });
};

module.exports = (_, opts) => createConfig(opts);
