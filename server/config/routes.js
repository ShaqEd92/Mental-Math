const players = require('../controllers/players');
    
module.exports = function (app) {

    app.get('api/players', players.show)

    app.post('api/players', players.create)

}