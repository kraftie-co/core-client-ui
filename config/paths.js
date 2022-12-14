const path = require('path');

module.exports = {
  context: path.resolve(__dirname, '..'),
  root: path.resolve(__dirname, '../..'),
  sourcePath: path.resolve(__dirname, '..', 'src/'),

  dotenv: path.resolve(__dirname, '..', '.env'),

  entryPoints: [path.resolve(__dirname, '..', 'src/Root.js')],

  outputPath: path.resolve(__dirname, '..', process.env.BUILD_OUTPUT_DIR || 'build/'),

  locales: path.resolve(__dirname, '..', 'src/services/locales/'),
  images: path.resolve(__dirname, '..', 'public/static/images/'),
  template: path.resolve(__dirname, '..', 'public/index.html'),
  favicon: path.resolve(__dirname, '..', 'public/favicon.ico'),
  manifest: path.resolve(__dirname, '..', 'public/manifest.json'),

  publicUrlOrPath: process.env.PUBLIC_URL || require('../package.json').homepage || '',
};
