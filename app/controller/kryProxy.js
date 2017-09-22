'use strict';

module.exports = app => {
    class KryProxyController extends app.Controller {

        async index(){
            //const needProxyUrl =  this.ctx.query.url;
            //const result = yield this.ctx.curl('http://b.keruyun.com/mind/'+ needProxyUrl);
            var loginHtml = await this.ctx.service.catchLoginHtml.get();
            console.log(loginHtml);
            this.ctx.type = 'html';
            this.ctx.body = loginHtml;


            //console.log(result);
/*
            console.log(result.status =="302" );

            if(result.status =='302') {

                console.log(loginHtml)

            }*/

        }
    }
    return KryProxyController;
};
