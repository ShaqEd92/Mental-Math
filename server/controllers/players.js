const mongoose = require('mongoose');
require('../models/player')
const Player = mongoose.model('Player');

module.exports = {

    show: function (req, res) {
        Player.find({}, null, {sort: {Type: 1}}, function (err, players) {
            if (err) {
                res.json({ message: "Error", error: err })
            }
            else {
                res.json({ message: "Success", data: players })
            }
        })
    },

    create: function (req, res) {
        console.log(req.body)
        let newPlayer = new Player(req.body)
        newPlayer.save(function (err) {
            if (err) {
                res.json({ message: "Error", error: err })
            }
            else {
                res.redirect('/')
            }
        })
    },
    
}


