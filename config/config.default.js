'use strict';
const path = require('path');

module.exports = appInfo => {
  const config = {};

  // should change to your own
  config.keys = appInfo.name + '_1504151336155_1893';
  config.view = {
    defaultViewEngine: 'handlebars',
    defaultExtension: '.hbs',
    mapping: {
      '.hbs': 'handlebars',
    },
  };

  config.handlebars = {
        data: true,
        compat: true,
        noEscape: false,
        knownHelpers: false,
        knownHelpersOnly: true,
        strict: false,
        explicitPartialContext: true,
        ignoreStandalone: true,
        partialsPath: path.join(appInfo.baseDir, 'app/view/partials'),
  };
  // add your config here

  return config;
};
