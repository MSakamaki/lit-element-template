const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    bundle: path.join(__dirname, 'components/index.ts'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  }
};
