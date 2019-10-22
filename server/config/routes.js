const players = require('../controllers/players');
    
module.exports = function (app) {

    app.get('/players', players.show)

    app.post('/players', players.create)

}