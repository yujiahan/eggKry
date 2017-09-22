'use strict';
const path = require('path');


// had enabled by egg
// exports.static = true;
exports.handlebars = {
    enable: true,
    path: path.join(__dirname, '../node_modules/egg-view-handlebars'),
};