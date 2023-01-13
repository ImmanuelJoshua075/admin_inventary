
module.exports = app => {
    const User = require("../controller/user")

    app.post('/api/user/login', User.login);   // login the user

    app.post('/user',User.newuser)     // create the User

    app.get('/user/get', User.get);      // allusers get

    app.get('/user/get/:id', User.getbyId);   // user get by id

    app.post('/user/logout',User.logout);
}


// completed