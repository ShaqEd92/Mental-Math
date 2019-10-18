const maths = require('../controllers/maths');
    
module.exports = function (app) {

    app.get('/easy', function (req, res) {
        maths.easy(req, res);
    })

    app.get('/medium', function (req, res) {
        maths.medium(req, res);
    })

    app.get('/hard', function (req, res) {
        maths.hard(req, res);
    })

    app.get('/super', function (req, res) {
        maths.super(req, res);
    })

}