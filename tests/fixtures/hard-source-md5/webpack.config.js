var fs = require('fs');

var HardSourceWebpackPlugin = require('../../..');

module.exports = {
  context: __dirname,
  entry: './index.js',
  output: {
    path: __dirname + '/tmp',
    filename: 'main.js',
  },
  plugins: [
    new HardSourceWebpackPlugin({
      cacheDirectory: 'cache',
      configHash: function(config) {
        return fs.readFileSync(__dirname + '/config-hash', 'utf8');
      },
      environmentHash: {
        root: __dirname + '/../../..',
      },
    }),
  ],
};
