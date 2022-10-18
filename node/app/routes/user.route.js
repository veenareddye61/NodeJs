module.exports = (app) => {
    const user = require('../controllers/user.controller.js');

    app.post('/users',user.signup);
    app.get('/users',user.findAll);
    app.post('/user/generateToken',user.generateToken);
    app.get('/user/validateToken',user.validateToken);
}