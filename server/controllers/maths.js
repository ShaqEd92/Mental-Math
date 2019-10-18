const mongoose = require('mongoose');
require('../models/math')
const Math = mongoose.model('Math');

module.exports = {

    easy: function (req, res) {
        let gold = Math.floor(Math.random() * 10 + 11)
        res.json({ message: "Success", data: gold })
    },

    medium: function (req, res) {
        let gold = Math.floor(Math.random() * 5 + 6)
        res.json({ message: "Success", data: gold })
    },

    hard: function (req, res) {
        let gold = Math.floor(Math.random() * 2 + 4)
        res.json({ message: "Success", data: gold })
    },

    super: function (req, res) {
        let gold = Math.floor(Math.random() * 2 + 4)
        res.json({ message: "Success", data: gold })
    },
    
}


