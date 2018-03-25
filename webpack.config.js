var path = require('path'); // to use path.join
module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'production')
  },
  module:{
    rules:[
      {test: /\.js?$/, loader: 'babel-loader', exclude: /node_modules/},
      {test: /\.css$/, use: ['style-loader', 'css-loader']}
    ]
  }
}
