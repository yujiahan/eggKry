'use strict';
var proxy = require('koa-proxy');

module.exports = app => {
  app.get('/', 'home.index');
  app.get('/kryProxy', 'kryProxy.index');
  app.get('/captcha.jpg', 'kryProxy.index');
};
