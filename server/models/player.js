const mongoose = require('mongoose');
require("../config/mongoose")

var PlayerSchema = new mongoose.Schema({
    Name: { type: String },
    Score: { type: Number, default: 0 }
}, { timestamps: true })
mongoose.model('Player', PlayerSchema);