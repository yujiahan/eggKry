module.exports = app => {
    class User extends app.Service {
        async get() {
            const result = await this.ctx.curl('http://sso.keruyun.com/cas/login');

            return result.data;
        }
    }
    return User;
};