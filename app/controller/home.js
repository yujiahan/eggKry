'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    async index() {
      const { ctx } = this;
      await ctx.render('home.hbs', {word:"hahah"});
    }

/*
    * kryProxy(){
      const result = yield this.ctx.curl('http://sso.keruyun.com/cas/login');
      this.ctx.type = 'html';
      this.ctx.body = result.data;
    }*/
  }
  return HomeController;
};
